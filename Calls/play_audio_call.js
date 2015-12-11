/**
  * @author : Ytel
  * @version : V1b
  * @description : Message360 allows you to play an audio file during a call. This is useful for playing hold music, providing IVR prompts, etc.
  */

var m360 = require('m360');
var auth = require('../auth');

var m = m360.RestAPI({
  authId: auth.authId,
  authToken: auth.authToken
});

var params = {
  'callsid': 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx', // An alphanumeric string identifying this resource. 
	'Mix' : '', //optional //Allowed Value: false,true
	'Length' : '', //optional //Allowed Value: integer greater than or equal to 0
	'Loop' : '', //optional //Allowed Value: false,true
	'AudioUrl' : 'xxxxxx', //required
	'Direction' : '', //optional //Allowed Value: in, out, or both 
};

// Prints the complete response
m.play_audio_call(params, function (status, response) {
    console.log('API Response:\n', JSON.stringify(response));
});