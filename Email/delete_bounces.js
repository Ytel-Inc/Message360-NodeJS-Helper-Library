/**
  * @author : Ytel
  * @version : v2
  * @description : This endpoint allows you to delete entries in the bounces list.
  */

var m360 = require('m360');
var auth = require('../auth');

var m = m360.RestAPI({
  authId: auth.authId,
  authToken: auth.authToken
});

var params = {
    'email': 'xx@xx.xx' //required //Must be a valid user account email.Bounced email address to remove.
};

// Prints the complete response
m.delete_bounce(params, function (status, response) {
    console.log('API Response:\n', JSON.stringify(response));
});

