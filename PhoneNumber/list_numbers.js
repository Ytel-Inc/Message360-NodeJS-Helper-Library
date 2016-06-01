/**
  * @author : Ytel
  * @version : v2
  * @description : The HTTP POST method is used to request this resource. The format of this resources URI is below.
  */

var m360 = require('m360');
var auth = require('../auth');

var m = m360.RestAPI({
  authId: auth.authId,
  authToken: auth.authToken
});

var params = {
    'friendlyname' : '', //optional //Specifies that only IncomingPhoneNumber resources matching the input FriendlyName should be returned in the list request. 
    'numberType': '', //optional //Specidies that Number type is voice,sms or all. 
    'page' : '', //optional //Used to return a particular page within page
    'pagesize' : '' //optional //Used to return a particular page within
};

// Prints the complete response
m.list_numbers(params, function (status, response) {
    console.log('API Response:\n', JSON.stringify(response));
});

