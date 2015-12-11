/**
  * @author : Ytel
  * @version : V1b
  * @description : The request response returned here contains a list of all available phone numbers that can be purchased for use with your Message360 account.
  */

var m360 = require('m360');
var auth = require('../auth');

var m = m360.RestAPI({
  authId: auth.authId,
  authToken: auth.authToken
});

var params = {
    'areacode': '', //optional //Specifies the area code that the returned list of available numbers should be in. Only available for North American numbers 
    'region' : '', //optional //The region of the available phone number. Usually a two letter abbreviation. 
    'numbertype' : '', //required //Specifies the number type is Voice,SMS,Voice and SMS.    e.g. voice
    'pagesize' : '' //optional //Used to return a particular page within
};

// Prints the complete response
m.list_available_numbers(params, function (status, response) {
    console.log('API Response:\n', JSON.stringify(response));
});

