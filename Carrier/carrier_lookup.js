/**
  * @author : Ytel
  * @version : V1b
  * @description : The response returned here contains all resource properties associated with the given Carrier.
  */

var m360 = require('m360');
var auth = require('../auth');

var m = m360.RestAPI({
  authId: auth.authId,
  authToken: auth.authToken
});

var params = {
    'phonenumber': 'xxxxxxxxxx' //required //The number of the phone you are attempting to perform the carrier lookup on.
};

// Prints the complete response
m.carrier_lookup(params, function (status, response) {
    console.log('API Response:\n', JSON.stringify(response));
});