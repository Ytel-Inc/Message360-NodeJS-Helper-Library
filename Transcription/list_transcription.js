/**
  * @author : Ytel
  * @version : v2
  * @description : The request response returned here contains a list of transcriptions that have occurred through your message360 account.
  */

var m360 = require('m360');
var auth = require('../auth');

var m = m360.RestAPI({
  authId: auth.authId,
  authToken: auth.authToken
});

var params = "";

// Prints the complete response
m.list_transcription(params, function (status, response) {
    console.log('API Response:\n', JSON.stringify(response));
});