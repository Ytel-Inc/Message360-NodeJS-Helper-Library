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
    'conferencesid': 'xxxxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx' //required //An alphanumeric string identifying this resource. 
};

// Prints the complete response
m.view_conference(params, function (status, response) {
    console.log('API Response:\n', JSON.stringify(response));
});