/**
  * @author : Ytel
  * @version : V1b
  * @description : This endpoint allows you to delete entries in the Invalid Emails list.
  */

var m360 = require('m360');
var auth = require('../auth');

var m = m360.RestAPI({
  authId: auth.authId,
  authToken: auth.authToken
});

var params = {
    'email': 'test@test.com' //required //Must be a valid user account email.Invalid emails address to remove. 
};

// Prints the complete response
m.delete_invalid(params, function (status, response) {
    console.log('API Response:\n', JSON.stringify(response));
});

