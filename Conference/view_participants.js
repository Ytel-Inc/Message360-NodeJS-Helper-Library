/**
  * @author : Ytel
  * @version : v2
  * @description : The request response returned here contains a conference participant resource.
  */

var m360 = require('m360');
var auth = require('../auth');

var m = m360.RestAPI({
  authId: auth.authId,
  authToken: auth.authToken
});

var params = {
    'conferencesid': 'xxxxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx', //required // An alphanumeric string identifying this resource. 
    'participantsid' : 'xxxxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx' //required An alphanumeric string identifying this participant.
};

// Prints the complete response
m.view_participant(params, function (status, response) {
    console.log('API Response:\n', JSON.stringify(response));
});