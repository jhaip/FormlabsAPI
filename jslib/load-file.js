var PreFormApi = require('pre_form_api');

var api = new PreFormApi.DefaultApi()
var loadPostRequest = {"file":"/Users/kevin.otoole/Formlabs/prints/scraper.form"}; // {LoadPostRequest} Full path to the file to load
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.loadPost(loadPostRequest, callback);

