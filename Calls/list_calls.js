/**
  * @author : Ytel
  * @version : v2
  * @description : The request response returned here contains a list of calls associated with your Message360 account.
  */

var m360 = require('m360');
var auth = require('../auth');

var m = m360.RestAPI({
  authId: auth.authId,
  authToken: auth.authToken
});

var params = {
    'To': 'xxxxxxxxxx', //optional //Lists all calls made to this number. 
    'From': 'xxxxxxxxxx', //optional //Lists all calls made from this number. 
    'Page': 'x', //optional //Used to return a particular page within the list.
    'PageSize': 'x', //optional //Used to specify the amount of list items to return per page. 
    'DateCreated': 'xxxx-xx-xx' //optional //Used to specify the created date of the call. 
};

// Prints the complete response
m.list_calls(params, function (status, response) {
    console.log('API Response:\n', JSON.stringify(response));
});