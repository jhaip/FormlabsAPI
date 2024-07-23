var PreFormApi = require('pre_form_api');


var api = new PreFormApi.DefaultApi()
var opts = {
  'format': "format_example", // {String} 
  'outputPath': "outputPath_example" // {String} File to write export results
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.exportGet(opts, callback);
