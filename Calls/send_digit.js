/**
  * @author : Ytel
  * @version : v2
  * @description : Here you can experiment with sending digits to a call through TelAPI and view the request response generated when doing so.
  */

var m360 = require('m360');
var auth = require('../auth');

var m = m360.RestAPI({
  authId: auth.authId,
  authToken: auth.authToken
});

var params = {
    'CallSid': 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx', //required // An alphanumeric string identifying this resource. 
    'PlayDtmfDirection' : '', //optional //Allowed Value: in or out 
    'PlayDtmf' : '' //optional //Allowed Value: 12ww34 
};

// Prints the complete response
m.send_digit(params, function (status, response) {
    console.log('API Response:\n', JSON.stringify(response));
});