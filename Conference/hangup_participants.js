/**
  * @author : Ytel
  * @version : V1b
  * @description : The HTTP GET method is used to request this resource. The format of this resources URI is below. 
  */

var m360 = require('m360');
var auth = require('../auth');

var m = m360.RestAPI({
  authId: auth.authId,
  authToken: auth.authToken
});

var params = {
    'conferencesid': 'xxxxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx', //required //The Sid identifying the conference this participant took part in.
    'participantsid': 'xxxxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx', //required //An alphanumeric string identifying this participant.
};

// Prints the complete response
m.hangup_participants(params, function (status, response) {
    console.log('API Response:\n', JSON.stringify(response));
});