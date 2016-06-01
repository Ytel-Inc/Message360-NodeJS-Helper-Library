/**
  * @author : Ytel
  * @version : v2
  * @description : The response returned here contains all resource properties associated with the requested Message360 phone number.
  */

var m360 = require('m360');
var auth = require('../auth');

var m = m360.RestAPI({
  authId: auth.authId,
  authToken: auth.authToken
});

var params = {
    'phonenumber': 'xxxxxxxxxx' //required //You can view the specfic information about Phone number.
};

// Prints the complete response
m.view_numbers(params, function (status, response) {
    console.log('API Response:\n', JSON.stringify(response));
});

