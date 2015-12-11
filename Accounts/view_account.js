/**
  * @author : Ytel
  * @version : V1b
  * @description : The request response returned here contains all resource properties associated with your message360 account. 
  */

var m360 = require('m360');
var auth = require('../auth');

var m = m360.RestAPI({
  authId: auth.authId,
  authToken: auth.authToken
});

var params = "";

// Prints the complete response
m.get_account(params, function (status, response) {
    console.log('API Response:\n', JSON.stringify(response));
});