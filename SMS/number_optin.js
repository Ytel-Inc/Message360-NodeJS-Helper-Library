/**
  * @author : Ytel
  * @version : V1b
  * @description : Here you can experiment with Optin numbers before sending sms from toll-free number through Message360 and view the request response generated when doing so.
  */

var m360 = require('m360');
var auth = require('../auth');

var m = m360.RestAPI({
  authId: auth.authId,
  authToken: auth.authToken
});

var params = {
	  'from' : 'xxxxxxxxxx', //required //A comma-separated list of toll-free numbers from which texts may be sent
    'to': 'xxxxxxxxxx', //required //A comma-separated list of mobile device (cell phone) numbers to which texts may be sent.
    'expires' : 0, //required //Indicates whether or not this opt-in authorization should expire. When it has expired the M360 system will remove the authorization and texts may no longer be sent from this toll-free number to this mobile device. Valid values are 0 and 1.
    'authorizedby' : 'xxxx', //required //It indicates who accepted the opt-in request and created this opt-in authorization
    'authorizedhow' : 'xxxx' //required //It indicates how the owner of this mobile device has given permission to receive texts. Examples of this are Matt 908-555-1212 at ABC Corporation at 5:00PM on 9/1/2015 requested to opt-in by phone or John Doe via email: example@gmail.com at 5:00PM on 9/12/2015 requested to opt-in by email 
};

// Prints the complete response
m.number_optin(params, function (status, response) {
    console.log('API Response:\n', JSON.stringify(response));
});
