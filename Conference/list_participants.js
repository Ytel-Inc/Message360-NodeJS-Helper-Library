/**
  * @author : Ytel
  * @version : v2
  * @description : The request response returned here contains a list of all conferences associated with an account.
  */

var m360 = require('m360');
var auth = require('../auth');

var m = m360.RestAPI({
  authId: auth.authId,
  authToken: auth.authToken
});

var params = {
    'conferencesid': 'xxxxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx', //required //The Sid identifying the conference this participant took part in.
    'deaf' : '', //optional //Allowed Value:true or false
    'muted' : '', //optional //Allowed Value:true or false
    'page' : '', //optional //Used to return a particular page within the list. 
    'pagesize' : '' //optional //Used to specify the amount of list items to return per page. 
};

// Prints the complete response
m.list_participant(params, function (status, response) {
    console.log('API Response:\n', JSON.stringify(response));
});