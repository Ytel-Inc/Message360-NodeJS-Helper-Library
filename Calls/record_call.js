/**
  * @author : Ytel
  * @version : v2
  * @description : Here you can experiment with adding voice audio effects on a call through Message360 and view the request response generated when doing so. 
  */

var m360 = require('m360');
var auth = require('../auth');

var m = m360.RestAPI({
  authId: auth.authId,
  authToken: auth.authToken
});

var params = {
  'CallSid': 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx', //required // An alphanumeric string identifying this resource. 
	'Direction' : '', //optional //Allowed Value: in, out, both
  'Fileformat' : '', //optional //Allowed Value: mp3 or wav
	'Record' : true, //required //Default Value: true or false 
	'TimeLimit' : '' //optional //Allowed Value: integer greater than or equal to 0 
};

// Prints the complete response
m.record_call(params, function (status, response) {
    console.log('API Response:\n', JSON.stringify(response));
});