/**
  * @author : Ytel
  * @version : V1b
  * @description : Here you can experiment with modifying a call through Message360 and view the request response doing so generates.
  */

var m360 = require('m360');
var auth = require('../auth');

var m = m360.RestAPI({
  authId: auth.authId,
  authToken: auth.authToken
});

var params = {
    'CallSid': 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx', // An alphanumeric string identifying this resource. //required
    'Status' : 'Noanswer', //optional //The status used to end the call. "canceled" only ends in-queue calls while "completed" ends in-progress calls as well as queued/ringing calls. 
    'Url' : '', //optional //The URL in-progress calls can be forwarded to. 
    'Method' : '' //optional //Lists all calls with the specified status. //Allowed Value: POST or GET
};

// Prints the complete response
m.interrupt_call(params, function (status, response) {
    console.log('API Response:\n', JSON.stringify(response));
});