# Generated Client Libraries and Documentation from OpenAPI Spec

All these examples work on the example `openapi.yaml` OpenAPI 3.0 Description of a HTTP REST API. This OpenAPI spec was written by hand, but may be generated from the PreForm REST API code, or a handwritten OpenAPI spec .yaml could be used to generate the C++ server classes.

On MacOS:
```bash
brew install openapi-generator

openapi-generator generate -i openapi.yml -g python -o ./pythonlib
```

## HTML Documentation

```
npx @redocly/cli build-docs openapi.yml
```

## Python library

Generate the python library:
```
openapi-generator generate -i openapi.yml -g python -o ./pythonlib
```

Install the python dependencies and test the library
```bash
cd pythonlib

python3 -m venv myenv
source myenv/bin/activate
python3 -m pip install -r requirements.txt

# run python script

deactivate
```

Example Raw library usage:
```python
import openapi_client

api_client = openapi_client.ApiClient(openapi_client.Configuration())
api_instance = openapi_client.DefaultApi(api_client)

r = api_instance.load_post({"file": "C:\\Users\\user\\Desktop\\test.stl"})
r2 = api_instance.print_post({"printer_id": "192.168.1.34"})
```

A convenience python library around the generated code:

```python
# formlabs.py
import openapi_client
import subprocess


class PreFormApi:
    def __init__(self, preform_port=44388):
        # subprocess.Popen(["headless_preform.exe", "--port", str(preform_port)])
        self.client = openapi_client.ApiClient(
            openapi_client.Configuration(host=f"http://localhost:{preform_port}")
        )
        self.instance = openapi_client.DefaultApi(self.client)

    def load(self, file_path):
        return self.instance.load_form_post(file_path)

    def get_scene(self):
        return self.instance.scene_get()

    def print(self, printer, job_name):
        return self.instance.v1_print_post(printer, job_name)

```

Example usage:

```python
import formlabs

api = formlabs.PreFormApi()
api.load("/Users/jacob.haip/Documents/preform-cli-tests/cube-form4b.form")
api.get_scene()
api.print("10.22.2.1", "test-4")
```

#### TODO:
- [ ] update python install scripts to install formlabs.py

## JavaScript Library & Demo App

Genereate the JavaScript code:
```
openapi-generator generate -i openapi.yml -g javascript -o ./jslib
```

Install the Javascript code
```
cd jslib

npm install
npm link
npm run build
```

Create a new `main.js` in the `/jslib` directory as a convenience wrapper around the genreated JavaScript code, for use in the browser.

```javascript
var RootPreFormApi = require('./dist');

class PreFormApi {
    constructor() {
        this.api = new RootPreFormApi.DefaultApi();
    }
    loadFile(path, callback) {
        var loadPostRequest = { "file": path }; // {LoadPostRequest} Full path to the file to load
        return new Promise((resolve, reject) => {
            this.api.loadPost(loadPostRequest, (error, data) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(data);
                }
            });
        });
    }
    print(printer_ip, callback) {
        var printPostRequest = { "printer_ip": printer_ip }; // {PrintPostRequest}
        return new Promise((resolve, reject) => {
            this.api.printPost(printPostRequest, (error, data) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(data);
                }
            });
        });
    }
}
window.api = new PreFormApi();
```

And then compile all the code into a bundle that can be imported into the browser using browserify
```
npm install -g browserify
browserify main.js > bundle.js
```

Run a demo application:
```html
<!DOCTYPE html>
<html>
<head>
    <title>Example PreForm API Integration</title>
    <script src="bundle.js"></script>
</head>
<body>
    <h1>Example PreForm API Integration</h1>
    <form>
        <label for="fileInput">.FORM File Path:</label>
        <input type="text" id="fileInput" name="fileInput"><br><br>
        <label for="printerIP">Printer IP Address:</label>
        <input type="text" id="printerIP" name="printerIP"><br><br>
        <button type="button" onclick="printFile()">Print</button>
    </form>

    <script>
        async function printFile() {
            let loadResponse = await window.api.loadFile(document.getElementById('fileInput').value);
            let printResponse = await window.api.loadFile(document.getElementById('printerIP').value);
        }
    </script>
</body>
</html>
```

## Running PreForm Server in Docker

Go to https://formlabs.awsapps.com/start to get AWS credentials and use the shortcut to export the AWS credentials to your terminal.

Build Docker container:
```
docker build --build-arg AWS_ACCESS_KEY_ID=${AWS_ACCESS_KEY_ID} --build-arg AWS_SECRET_ACCESS_KEY=${AWS_SECRET_ACCESS_KEY} --build-arg AWS_SESSION_TOKEN=${AWS_SESSION_TOKEN} -t preform-server-test .
```

Run container (with port forwarding of the PreFormServer port so you can access the server from outside the container)
```
docker run -it -p 44388:44388 --rm docker.io/library/preform-server-test
```

With the container running, exec into it. Use `docker ps` to find the container's name
```
docker exec -it YOUR_CONTAINER_NAME bash
```

Within the container, you can run the PreForm Server:
```
cd /workspace/preform/latest/PreForm_Server

root@25c87c0fde24:/workspace/preform/latest/PreForm_Server# ./PreFormServer
starting up Qt app...
*** WARNING *** The program 'PreFormServer' uses the Apple Bonjour compatibility layer of Avahi.
*** WARNING *** Please fix your application to use the native API of Avahi!
*** WARNING *** For more information see <http://0pointer.de/blog/projects/avahi-compat.html>
starting HTTP server
HTTP server listening on port 44388
```

You can then connect to the PreFormServer from inside or outside the Docker container.
