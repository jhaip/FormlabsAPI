# Formlabs SDK JavaScript Library

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
