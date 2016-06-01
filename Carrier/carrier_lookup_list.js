/**
  * @author : Ytel
  * @version : v2
  * @description : Shows info on all carrier lookups associated with your Message360 account.
  */

var m360 = require('m360');
var auth = require('../auth');

var m = m360.RestAPI({
  authId: auth.authId,
  authToken: auth.authToken
});

var params = {};

// Prints the complete response
m.carrier_lookup_list(params, function (status, response) {
    console.log('API Response:\n', JSON.stringify(response));
});