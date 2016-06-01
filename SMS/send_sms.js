/**
  * @author : Ytel
  * @version : v2
  * @description : Here you can experiment with sending an sms through Message360 and view the request response generated when doing so.
  */

var m360 = require('m360');
var auth = require('../auth');

var m = m360.RestAPI({
  authId: auth.authId,
  authToken: auth.authToken
});

var params = {
  'body' : 'xx xx xx',
  'to': 'xxxxxxxxxx', //required // The phone numer to which the all has to be placed
  'from' : 'xxxxxxxxxx', //required // The phone number to be used as the caller id
  'method' : '', //optional //Allowed Value: POST or GET 
  'fromcountrycode' : 1, //required //Please enter FromCountryCode number with country code.(i.e 1) 
  'tocountrycode' : 1, //required //Please enter ToCountryCode number with country code.(i.e 1)
  'messagestatuscallback' :  '' //optional //URL that can be requested to receive notification when SMS has been sent. A set of default parameters will be sent here once the SMS is sent. 
};

// Prints the complete response
m.send_message(params, function (status, response) {
    console.log('API Response:\n', JSON.stringify(response));
});