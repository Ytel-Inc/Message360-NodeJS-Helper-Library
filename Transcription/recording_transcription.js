/**
  * @author : Ytel
  * @version : v2
  * @description : Here you can experiment with transcribing recordings that have occurred through your message360 account and view the request response generated when doing so.
  */

var m360 = require('m360');
var auth = require('../auth');

var m = m360.RestAPI({
  authId: auth.authId,
  authToken: auth.authToken
});

var params = {
    'recordingSid': 'xxxxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx' //required //An alphanumeric string identifying this resource. 
};

// Prints the complete response
m.recording_transcription(params, function (status, response) {
    console.log('API Response:\n', JSON.stringify(response));
});