/**
  * @author : Ytel
  * @version : V1b
  * @description : Here you can experiment with updating an incoming Message360 phone number and view the request response generated when doing so.
  */

var m360 = require('m360');
var auth = require('../auth');

var m = m360.RestAPI({
  authId: auth.authId,
  authToken: auth.authToken
});

var params = {
    'FriendlyName' : '', //optional //User generated name for the incoming number. 
	'HangupCallback' : '',	//optional
	'HangupCallbackMethod' : '', //optional
	'HeartbeatMethod'  : '', //optional
	'HeartbeatUrl' : '', //optional
	'PhoneNumber' : '3022316939', //required //Phone number required to update.
	'SmsFallbackMethod'	 : '',//optional //Specifies the HTTP method used to request the SmsFallbackUrl. //Allowed Value: POST or GET
	'SmsFallbackUrl' : '',//optional //URL used if any errors occur during execution of InboundXML from an SMS or at initial request of the SmsUrl. 
	'SmsMethod'	 : '',//optional //Specifies the HTTP method used to request the SmsUrl once an incoming SMS is received. //Allowed Value: POST or GET 
	'SmsUrl'	 : '',//optional //The URL returning InboundXML incoming phone numbers should execute when receiving an SMS.
	'VoiceFallbackMethod' : '',//optional //Specifies the HTTP method used to request the VoiceFallbackUrl once incoming call connects.
	'VoiceFallbackUrl' : '',//optional //URL used if any errors occur during execution of InboundXML on a call or at initial request of the VoiceUrl. 
	'VoiceUrl'	 : ''//optional //The URL returning InboundXML incoming calls should execute when connected. 
};

// Prints the complete response
m.update_number(params, function (status, response) {
    console.log('API Response:\n', JSON.stringify(response));
});

