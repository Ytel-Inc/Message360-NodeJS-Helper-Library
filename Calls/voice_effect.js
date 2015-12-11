/**
  * @author : Ytel
  * @version : V1b
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
    'Pitch' : '', //optional //Allowed Value: in or outs 
    'PitchOctaves' : '', //optional //Allowed Value: value between -1 and 1 
    'PitchSemiTones' : '',//optional //Allowed Value: value between -14 and 14 
    'AudioDirection' : '',//optional  //Allowed Value: in or out 
    'Rate' : '', //optional //Allowed Value: value greater than 0 
    'Tempo' : ''//optional //Allowed Value: value greater than 0  
};

// Prints the complete response
m.voice_effect(params, function (status, response) {
    console.log('API Response:\n', JSON.stringify(response));
});