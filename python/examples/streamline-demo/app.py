import re
import os
import time
import pathlib
import shutil
import formlabs
from datetime import datetime
from dataclasses import dataclass
from enum import Enum
from formlabs.models.auto_orient_post_request import AutoOrientPostRequest


FORMLABS_MATERIAL_SELECTION = {
    "machine_type": "FRMB-3-0", # Form 3B
    "material_code": "FLGPGR04", # TODO change this
    "slice_thickness": 0.1,
    "print_setting": "DEFAULT", # TODO change this
}

class StlModelType(Enum):
    L1 = 1 # Lower reference model
    U1 = 2 # Upper reference model
    L2 = 3 # Lower designed model
    U2 = 4 # Upper designed model
    UNKNOWN = 5

class OrderType(Enum):
    LOCAL_PATIENT = 1
    NEW_PATIENT = 2
    REOCCURING_PATIENT = 3

ORDER_TYPE_ABBREVIATIONS = {
    OrderType.LOCAL_PATIENT: "LP",
    OrderType.NEW_PATIENT: "NP",
    OrderType.REOCCURING_PATIENT: "RP",
}

@dataclass
class StlModelAndQuantity:
    filename: str
    quantity: int

@dataclass
class OrderParameters:
    order_id: str
    order_type: OrderType
    order_folder_path: str
    previous_order_id: str # For reoccurring orders. Empty if not a reoccurring order
    top_quantity: int
    bottom_quantity: int
    stl_files_and_quantities: list[StlModelAndQuantity]

@dataclass
class BatchResult:
    part_quantity_in_this_print: int

STATION_NAME = "Station-3-7-"
PATH_TO_INPUT_FOLDERS = {
    OrderType.LOCAL_PATIENT: "TODO",
    OrderType.NEW_PATIENT: "TODO",
    OrderType.REOCCURING_PATIENT: "TODO",
}
PATH_TO_OUTPUT_FOLDERS = {
    OrderType.LOCAL_PATIENT: "TODO",
    OrderType.NEW_PATIENT: "TODO",
    OrderType.REOCCURING_PATIENT: "TODO",
}
CACHE_OF_INPUT_FOLDERS = {
    OrderType.LOCAL_PATIENT: set(),
    OrderType.NEW_PATIENT: set(),
    OrderType.REOCCURING_PATIENT: set(),
}
PATH_TO_FOLDER_FOR_SAVING_PRINT_FILES = "TODO"
DELAY_BETWEEN_NEW_ORDER_FOLDER_CHECKS_SECONDS = 2
pathToPreformServer = pathlib.Path().resolve() / "PreFormServer.app/Contents/MacOS/PreFormServer"


def check_input_folder(order_type: OrderType):
    global CACHE_OF_INPUT_FOLDERS
    input_folder = PATH_TO_INPUT_FOLDERS[order_type]
    current_folders = set(f for f in os.listdir(input_folder) if os.path.isdir(os.path.join(input_folder, f)))
    new_folders = current_folders - CACHE_OF_INPUT_FOLDERS[order_type]
    for new_folder in new_folders:
        process_order(new_folder, order_type)
    CACHE_OF_INPUT_FOLDERS[order_type] = current_folders


def process_order(order_folder_path, order_type: OrderType):
    order_parameters = parse_order_parameters(order_folder_path, order_type)
    order_parameters = update_order_parameters_with_stl_files(order_parameters)
    batch_results = mock_process_order_models(order_parameters)
    # batch_results = process_order_models(order_parameters)
    write_result_file(order_parameters, batch_results)
    move_order_order_to_completed_folder(order_folder_path, order_type)


def move_order_order_to_completed_folder(order_folder_path, order_type: OrderType):
    shutil.move(order_folder_path, PATH_TO_OUTPUT_FOLDERS[order_type])


def parse_recurring_order_folder_name(folder_name):
    # Regular expression pattern to extract the required parts, allowing for missing T and B quantities
    # Written by Chat GPT:
    pattern = re.compile(r"(?P<order_id>\d+)-SCANS-\s*(?P<previous_order_id>\d+)(?:-T(?P<top_quantity>\d*))?(?:-B(?P<bottom_quantity>\d*))?")
    match = pattern.match(folder_name)
    if match:
        # If top_quantity or bottom_quantity is empty, default it to 0
        top_quantity = int(match.group('top_quantity') or 0)
        bottom_quantity = int(match.group('bottom_quantity') or 0)
        return OrderParameters(
            match.group('order_id'),
            OrderType.REOCCURING_PATIENT,
            folder_name,
            match.group('previous_order_id'),
            top_quantity,
            bottom_quantity,
            []
        )
    else:
        return None


def parse_type_of_stl_from_filename(stl_filename) -> StlModelType:
    flags = {
        StlModelType.L1: ["L_1", "L-1", "1_L", "1-L"],
        StlModelType.U1: ["U_1", "U-1", "1_U", "1-U"],
        StlModelType.L2: ["L_2", "L-2", "2_L", "2-L"],
        StlModelType.U2: ["U_2", "U-2", "2_U", "2-U"],
    }
    for model_type, flag_list in flags.items():
        for flag_str in flag_list:
            if flag_str in stl_filename:
                return model_type
    return StlModelType.UNKNOWN


def parse_order_parameters(order_folder_path, order_type) -> OrderParameters:
    order_parameters = None
    if order_type == OrderType.REOCCURING_PATIENT:
        return parse_recurring_order_folder_name(order_folder_path)
    elif order_type == OrderType.NEW_PATIENT:
        raise Exception("Not implemented")
    elif order_type == OrderType.LOCAL_PATIENT:
        raise Exception("Not implemented")
    if order_parameters is None:
        raise Exception("Unable to parse order folder name")


def update_order_parameters_with_stl_files(order_parameters: OrderParameters) -> OrderParameters:
    stl_files_and_quantities: list[StlModelAndQuantity] = []
    for file in os.listdir(order_parameters.order_folder_path):
        if file.endswith(".stl"):
            type_of_stl = parse_type_of_stl_from_filename(file)
            if type_of_stl != StlModelType.UNKNOWN:
                # Always include 1 of the reference model
                if type_of_stl == StlModelType.L1 and order_parameters.bottom_quantity > 0:
                    stl_files_and_quantities.append(StlModelAndQuantity(file, 1))
                elif type_of_stl == StlModelType.U1 and order_parameters.top_quantity > 0:
                    stl_files_and_quantities.append(StlModelAndQuantity(file, 1))
                # Include the desired quantity of the designed models
                elif type_of_stl == StlModelType.L2 and order_parameters.bottom_quantity > 0:
                    stl_files_and_quantities.append(StlModelAndQuantity(file, order_parameters.bottom_quantity))
                elif type_of_stl == StlModelType.U2 and order_parameters.top_quantity > 0:
                    stl_files_and_quantities.append(StlModelAndQuantity(file, order_parameters.top_quantity))
    order_parameters.stl_files_and_quantities = stl_files_and_quantities
    return order_parameters


# Returns the label string text for a print
# Example:
# LP: Station-3-7-
# 88292295 #4
# 2023-01-02
# Part 2
def create_result_string(order_parameters: OrderParameters, part_quantity_in_this_print: int, print_number=None) -> str:
    result_str = ""
    order_type_abbreviation = ORDER_TYPE_ABBREVIATIONS[order_parameters.order_type]
    result_str += f"{order_type_abbreviation}: {STATION_NAME}\n"
    result_str += f"{order_parameters.order_id} #{part_quantity_in_this_print}"
    date_str = datetime.now().strftime("%Y-%m-%d")  # Example: 2023-01-02
    result_str += f"{date_str}\n"
    if print_number is not None:
        result_str += f"Part {print_number}\n"
    return result_str


def write_result_file(order_parameters: OrderParameters, batch_results: list[BatchResult]):
    RESULT_TXT_FILE = os.path.join(order_parameters.order_folder_path, "summary.txt")
    with open(RESULT_TXT_FILE, 'w', newline='') as result_file:
        label_contents_list = []
        for i, batch_result in enumerate(batch_results):
            print_number = None
            if len(batch_results) > 1:
                print_number = i + 1
            label_contents_list.append(create_result_string(order_parameters, batch_result.part_quantity_in_this_print, print_number=print_number))
        result_file.write("\n\n\n".join(label_contents_list))


def mock_process_order_models(order_parameters: OrderParameters) -> list[BatchResult]:
    time.sleep(2)
    save_path = os.path.join(PATH_TO_FOLDER_FOR_SAVING_PRINT_FILES, f"{order_parameters.order_id}_part1.fakeform")
    with open(save_path, 'w', newline='') as form_file:
        form_file.write("This is a fake form file")
    return [BatchResult(1)]


# TODO: this function could by improved by duplicating existing models, rather than reimporting the same model multiple times
def process_order_models(order_parameters: OrderParameters) -> list[BatchResult]:
    current_batch = 1
    batch_results: list[BatchResult] = []
    batch_has_unsaved_changed = False

    def clear_scene(preform):
        nonlocal batch_has_unsaved_changed, batch_results
        print("Clearing scene")
        preform.api.scene_post(FORMLABS_MATERIAL_SELECTION)
        batch_has_unsaved_changed = False
        batch_results.append(BatchResult(0))
    
    def save_batch_form(preform):
        nonlocal current_batch
        save_path = os.path.join(PATH_TO_FOLDER_FOR_SAVING_PRINT_FILES, f"{order_parameters.order_id}_part{current_batch}.form")
        preform.api.save_form_post(save_path)
        print(f"Saving batch {current_batch} to {save_path}")
        current_batch += 1

    with formlabs.PreFormApi.start_preform_server(pathToPreformServer=pathToPreformServer) as preform:
        clear_scene(preform)
        for stl_file_and_quantity in order_parameters.stl_files_and_quantities:
            for i in range(stl_file_and_quantity["qty"]):
                new_model = preform.api.scene_import_model_post({"file": os.path.join(order_parameters.order_folder_path, stl_file_and_quantity["file"])})
                try:
                    print(f"Auto layouting all")
                    preform.api.auto_layout_post_with_http_info(AutoOrientPostRequest.from_dict({"models": "ALL"}))
                    batch_has_unsaved_changed = True
                    batch_results[-1].part_quantity_in_this_print += 1
                except formlabs.exceptions.ServiceException as e:
                    if e.status == 500 and e.data.error == "AUTO_LAYOUT_FAILED":
                        print("Not all models can fit, removing model")
                        preform.api.models_id_delete(str(new_model.model_id))
                        save_batch_form(preform)
                        clear_scene(preform)
                print(f"Model {stl_file_and_quantity['file']} added to scene")
        if batch_has_unsaved_changed:
            save_batch_form(preform)

    return batch_results


if __name__ == "__main__":
    while True:
        check_input_folder(OrderType.REOCCURING_PATIENT)
        # Local and new patient folders are implemented in this demo.
        # check_input_folder(OrderType.LOCAL_PATIENT)
        # check_input_folder(OrderType.NEW_PATIENT)
        time.sleep(DELAY_BETWEEN_NEW_ORDER_FOLDER_CHECKS_SECONDS)