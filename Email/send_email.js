/**
  * @author : Ytel
  * @version : v2
  * @description : This endpoint allows you to send email.
  */

var m360 = require('m360');
var auth = require('../auth');

var m = m360.RestAPI({
  authId: auth.authId,
  authToken: auth.authToken
});

var params = {
    'To': 'xx@xx.xx', //required //Must be a valid email address.Email address to send email.For multpile recipients,emails must be separated by commas. 
    'cc' : '', //optional //Must be a valid email address.Email address to send email.For multpile recipients,emails must be separated by commas. 
    'bcc' : '', //optional //Must be a valid email address.Email address to send email.For multpile recipients,emails must be separated by commas. 
    'subject' : 'xxxx', //required //Must be a valid string.The subject of your email. 
    'type' : '', //required // It should be Text or Html 
    'message' : 'xx xx xx', //required //The Message of your email. 
    'attachment[]' : '' //optional //File to be attached.File must be less than or equal to 2MB. 

};

// Prints the complete response
m.send_email(params, function (status, response) {
    console.log('API Response:\n', JSON.stringify(response));
});

