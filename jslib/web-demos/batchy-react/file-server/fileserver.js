/**
 * The react app needs a way to access files outside its /public directory, which is not supported in the general buildchain.
 * A common setup for local apps I'm emulating is to set up a minimal fileserver to contain the files used by the app: inputs
 * and outputs of the PreForm API
 */
const express = require('express');
const path = require('path');
const app = express();

// Serve the static files from the React app
// Directory to serve files from
const INPUT_DIR = path.join(__dirname, 'files/input-model-stls');
const OUTPUT_DIR = path.join(__dirname, 'files/output-scene-stls');

app.use('/files/input-model-stls', express.static(INPUT_DIR));
app.use('/files/output-scene-stls', express.static(OUTPUT_DIR, {
  index: false,
  setHeaders: (response, file_path, file_stats) => {
      // const relative_path = path.join(OUTPUT_DIR, path.relative(OUTPUT_DIR, file_path));
      console.log('serving file:' + file_path);
      // console.info(`@${Date.now()}`, "GAVE\t\t", relative_path);
  }
}));

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
  console.log('serving generic file: ' + req.url);
  res.sendFile(path.join(__dirname, '../react-client/build/index.html'));
});

const port = process.env.PORT || 8123;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
