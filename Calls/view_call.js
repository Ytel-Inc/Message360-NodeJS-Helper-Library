/**
  * @author : Ytel
  * @version : V1b
  * @description : A call resource provides information about an individual call that has occurred through Message360. Both inbound and outbound voice communication through Message360 are categorized as calls. The resource properties representing a call are listed below. Call resources can be accessed at a resource URI made up of the Message360 base URL and a unique call SID.
  */

var m360 = require('m360');
var auth = require('../auth');

var m = m360.RestAPI({
  authId: auth.authId,
  authToken: auth.authToken
});


var params = {
   'CallSid': 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx', //required // An alphanumeric string identifying this resource. 
};

// Prints the complete response
m.view_call(params, function (status, response) {
    console.log('API Response:\n', JSON.stringify(response));
});