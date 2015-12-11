/**
  * @author : Ytel
  * @version : V1b
  * @description : Here you can experiment with deleting a recording and view the request response generated when doing so. 
  */

var m360 = require('m360');
var auth = require('../auth');

var m = m360.RestAPI({
  authId: auth.authId,
  authToken: auth.authToken
});

var params = {
    'recordingSid': 'xxxxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx' //required // An alphanumeric string identifying this resource. 
};

// Prints the complete response
m.delete_recording(params, function (status, response) {
    console.log('API Response:\n', JSON.stringify(response));
});