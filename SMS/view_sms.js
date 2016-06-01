/**
  * @author : Ytel
  * @version : v2
  * @description : The response returned here contains all resource properties associated with the given SMSMessageSid.
  */

var m360 = require('m360');
var auth = require('../auth');

var m = m360.RestAPI({
   authId: auth.authId,
   authToken: auth.authToken
});

var params = {
    'messagesid': 'xxxxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx' //required //An alphanumeric string identifying this resource.
};

// Prints the complete response
m.view_message(params, function (status, response) {
    console.log('API Response:\n', JSON.stringify(response));
});