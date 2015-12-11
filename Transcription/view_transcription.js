/**
  * @author : Ytel
  * @version : V1b
  * @description : The response returned here contains all resource properties associated with the given TranscriptionSid.
  */

var m360 = require('m360');
var auth = require('../auth');

var m = m360.RestAPI({
  authId: auth.authId,
  authToken: auth.authToken
});

var params = {
    'TranscriptionSid': 'xxxxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx' //required //An alphanumeric string identifying the transcription id that of transcribed file.
};

// Prints the complete response
m.view_transcription(params, function (status, response) {
    console.log('API Response:\n', JSON.stringify(response));
});