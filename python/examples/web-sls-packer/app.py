from flask import Flask, jsonify, request, send_from_directory, render_template
from flask_cors import CORS
from werkzeug.utils import secure_filename
import os
import json
import uuid
from pathlib import Path
import formlabs

# Directory where jobs are stored
JOBS_DIR = 'jobs'
UPLOAD_FOLDER = '/tmp'

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
CORS(app)


class PreFormApi:
    def __init__(self):
        # self.api = formlabs.Api()
        pass

    def load_form(self, form_path):
        # self.api.load_form(form_path)
        pass

    def import_model(self, model_path):
        # self.api.import_model(model_path)
        pass

    def auto_pack(self):
        # self.api.auto_pack()
        pass

    def save_screenshot(self, screenshot_path):
        # self.api.save_screenshot(screenshot_path)
        # Mock by copying a file
        Path(screenshot_path).write_bytes(Path('/Users/jacob.haip/Downloads/lena.png').read_bytes())

    def get_scene(self):
        # return self.api.get_scene()
        return {
            "mock_scene_data": "mock"
        }

    def save_form(self, form_path):
        # self.api.save_form(form_path)
        pass

api = PreFormApi()


def merge(job_id, uploaded_file_paths):
    job_folder = os.path.join(JOBS_DIR, job_id)
    existing_job_form_path = os.path.join(job_folder, f"{job_id}.form")
    existing_screenshot_path = os.path.join(job_folder, f"{job_id}.png")
    existing_metadata_path = os.path.join(job_folder, 'metadata.json')
    api.load_form(existing_job_form_path)
    for file_path in uploaded_file_paths:
        api.import_model(file_path)
    try:
        api.auto_pack()
    except:
        raise Exception("Failed to auto pack")
    api.save_screenshot(existing_screenshot_path)
    # Update metadata with new scene data
    api.save_form(existing_job_form_path)
    return api.get_scene()


def get_job_form_path(job_id):
    job_folder = os.path.join(JOBS_DIR, job_id)
    form_files = [f for f in os.listdir(job_folder) if f.endswith('.form')]
    if form_files:
        return os.path.join(job_folder, form_files[0])
    return None


@app.route('/')
def index():
    return send_from_directory('.', 'index.html')

@app.route('/list', methods=['GET'])
def list_jobs():
    jobs = []
    for job_folder in os.listdir(JOBS_DIR):
        job_path = os.path.join(JOBS_DIR, job_folder)
        if os.path.isdir(job_path):
            metadata_path = os.path.join(job_path, 'metadata.json')
            if os.path.exists(metadata_path):
                with open(metadata_path) as f:
                    metadata = json.load(f)
                jobs.append(metadata)
    return jsonify(jobs)

@app.route('/download/<job_id>', methods=['GET'])
def download_form(job_id):
    form_path = get_job_form_path(job_id)
    if form_path:
        return send_from_directory(os.path.dirname(form_path), os.path.basename(form_path), as_attachment=True)
    return jsonify({'error': 'Job not found or form file missing'}), 404

@app.route('/thumbnails/<job_id>/thumbnail.png', methods=['GET'])
def download_image(job_id):
    job_folder = os.path.join(JOBS_DIR, job_id)
    img_files = [f for f in os.listdir(job_folder) if f.endswith('.png')]
    if img_files:
        return send_from_directory(job_folder, img_files[0], as_attachment=True)
    return jsonify({'error': 'Job not found or image file missing'}), 404

@app.route('/new-from-form', methods=['POST'])
def create_new_from_form():
    data = request.form
    owner_name = data.get('owner_name')
    owner_email = data.get('owner_email')
    file = request.files['file']
    # Creat a new ID for the job
    id = str(uuid.uuid4())
    # Make new directory in with the name of the ID
    job_folder = os.path.join(JOBS_DIR, id)
    os.makedirs(job_folder)
    # Save the file to the new directory with the name ID.form
    filename = f"{id}.form"
    file.save(os.path.join(job_folder, filename))
    # Use API to get metadata and screenshot from scene
    api.load_form(os.path.join(job_folder, filename))
    scene_metadata = api.get_scene()
    metadata = {
        'id': id,
        'owners': [{'name': owner_name, 'email': owner_email}],
        'scene': scene_metadata
    }
    # Save metadata to the new directory with the name metadata.json
    with open(os.path.join(job_folder, 'metadata.json'), 'w') as f:
        json.dump(metadata, f, indent=4)
    # Use API to get screenshot of new file
    # Save screenshot to the new directory with the name screenshot.png
    api.save_screenshot(os.path.join(job_folder, 'screenshot.png'))
    return jsonify({'success': 'New job created successfully', 'id': id})



# @app.route('/new-empty-scene', methods=['POST'])
# def create_new_empty_scene():
#     # Case 2: empty scene
#     # Given scene type and material information
#     # Use API to create a new scene
#     # Use API to get metadata and screenshot from scene
#     # Create new folder

@app.route('/import-models/<job_id>', methods=['POST'])
def import_parts(job_id):
    data = request.form
    owner_name = data.get('owner_name')
    owner_email = data.get('owner_email')
    files = request.files.getlist('files')

    job_folder = os.path.join(JOBS_DIR, job_id)
    if not os.path.exists(job_folder):
        return jsonify({'error': 'Job ID not found'}), 404

    # Save these to a temp directory instead
    uploaded_file_paths = []
    for file in files:
        if file.filename.endswith(('.stl', '.form')):
            filename = secure_filename(file.filename)
            saved_file_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
            file.save(saved_file_path)
            uploaded_file_paths.append(saved_file_path)

    # TODO: Do merge operation here, that could fail
    # result = merge(files, job_folder.form)
    # on success or failure, remove the cached file updates
    # if result.error:
    #    return jsonify({'error': result.error})
    # else:
    #    on sucess, updates .form and takes new screenshot and updates metadata

    try:
        scene_data = merge(job_id, uploaded_file_paths)
    except Exception as e:
        return jsonify({'error': str(e)}), 400

    # Update metadata
    metadata_path = os.path.join(job_folder, 'metadata.json')
    if os.path.exists(metadata_path):
        with open(metadata_path) as f:
            metadata = json.load(f)
        metadata['owners'].append({'name': owner_name, 'email': owner_email})
        metadata['scene'] = scene_data
        with open(metadata_path, 'w') as f:
            json.dump(metadata, f, indent=4)

    return jsonify({'success': 'Parts added successfully to the job'})

if __name__ == '__main__':
    app.run(port=8323, debug=True)
