/**
  * @author : Ytel
  * @version : v2
  * @description : Add email addresses to the Unsubscribe list.
  */

var m360 = require('m360');
var auth = require('../auth');

var m = m360.RestAPI({
  authId: auth.authId,
  authToken: auth.authToken
});

var params = {
    'email': 'mohanish@ytel.co.in' //required //Must be a valid email address.Email address to add in unsubscribe list. 
};

// Prints the complete response
m.add_unsubscribe(params, function (status, response) {
    console.log('API Response:\n', JSON.stringify(response));
});

