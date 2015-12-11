/**
  * @author : Ytel
  * @version : V1b
  * @description : Here you can experiment with playing audio to conference participants.
  */

var m360 = require('m360');
var auth = require('../auth');

var m = m360.RestAPI({
  authId: auth.authId,
  authToken: auth.authToken
});

var params = {
    'conferencesid': 'xxxxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx', // This is Conference Sid. 
    'tocountrycode': 1, //Please select the ToCountryCode number with country code e.g 1. 
    'participantnumber' : 'xxxxxxxxxx', //This is Participant Number. 
    'deaf' : '', //optional //Allowed Value: true or false
    'muted' : '' //optional //Allowed Value: true or false
};

// Prints the complete response
m.add_participant(params, function (status, response) {
    console.log('API Response:\n', JSON.stringify(response));
});