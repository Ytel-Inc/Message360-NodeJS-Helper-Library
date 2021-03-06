/**
  * @author : Ytel
  * @version : v2
  * @description : Here you can experiment with deleting an incoming Message360 phone number and view the request response generated when doing so.
  */

var m360 = require('m360');
var auth = require('../auth');

var m = m360.RestAPI({
  authId: auth.authId,
  authToken: auth.authToken
});

var params = {
    'phonenumber': 'xxxxxxxxxx' //required //A specific available phone number you wish to buy.
};

// Prints the complete response
m.release_number(params, function (status, response) {
    console.log('API Response:\n', JSON.stringify(response));
});

