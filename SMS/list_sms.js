/**
  * @author : Ytel
  * @version : V1b
  * @description : The request response returned here contains a list of SMS messages associated with your Message360 account.
  */

var m360 = require('m360');
var auth = require('../auth');

var m = m360.RestAPI({
  authId: auth.authId,
  authToken: auth.authToken
});

var params = {
    'page' : '', //optional //Used to return a particular page within the list.
    'pagesize' : '', //optional //Used to specify the amount of list items to return per page.
    'datesent' : '', //optional //Allowed Value: date in the following format: yyyy-MM-dd HH:mm:SS 
    'to' : '', //optional //Lists all SMS messages sent to this number. 
    'from' : '' //optional //Lists all SMS messages sent from this number. 
};

// Prints the complete response
m.list_messages(params, function (status, response) {
    console.log('API Response:\n', JSON.stringify(response));
});