/**
  * @author : Ytel
  * @version : V1b
  * @description : Here you can experiment with the deaf or mute conference participant API methods.
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
    'muted' : '', //optional //Allowed Value: true or false
    'deaf' : '' //optional //Allowed Value: true or false
};

// Prints the complete response
m.deaformute_participants(params, function (status, response) {
    console.log('API Response:\n', JSON.stringify(response));
});