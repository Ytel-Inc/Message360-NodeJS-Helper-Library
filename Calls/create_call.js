/**
  * @author : Ytel
  * @version : V1b
  * @description : Here you can experiment with initiating a call through Message360 and view the request response generated when doing so.
  */

var m360 = require('m360');
var auth = require('../auth');

var m = m360.RestAPI({
  authId: auth.authId,
  authToken: auth.authToken
});

var params = {
    'to': 'xxxxxxxxxx', // The phone numer to which the all has to be placed //required
    'from' : 'xxxxxxxxxx', // The phone number to be used as the caller id //required
    'FromCountryCode' : 1, //required //Please enter the FromCountryCode number with country code e.g 1. 
    'ToCountryCode' : 1, //required //Please enter the ToCountryCode number with country code e.g 1.
    'Url' : '' //required //The URL requested once the call connects.
};

// Prints the complete response
m.make_call(params, function (status, response) {
    console.log('API Response:\n', JSON.stringify(response));
});