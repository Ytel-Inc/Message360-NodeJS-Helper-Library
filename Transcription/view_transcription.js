/**
  * @author : Ytel
  * @version : v2
  * @description : The response returned here contains all resource properties associated with the given TranscriptionSid.
  */

var m360 = require('m360');
var auth = require('../auth');

var m = m360.RestAPI({
  authId: auth.authId,
  authToken: auth.authToken
});

var params = {
    'TranscriptionSid': '5f3a42a1-6873-4644-bc5c-25309a3a1339' //required //An alphanumeric string identifying the transcription id that of transcribed file.
};

// Prints the complete response
m.view_transcription(params, function (status, response) {
    console.log('API Response:\n', JSON.stringify(response));
});