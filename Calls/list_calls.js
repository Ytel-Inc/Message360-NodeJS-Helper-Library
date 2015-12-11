/**
  * @author : Ytel
  * @version : V1b
  * @description : The request response returned here contains a list of calls associated with your Message360 account.
  */

var m360 = require('m360');
var auth = require('../auth');

var m = m360.RestAPI({
  authId: auth.authId,
  authToken: auth.authToken
});

var params = {
    'to': 'xxxxxxxxxx', //optional //Lists all calls made to this number. 
    'from': 'xxxxxxxxxx', //optional //Lists all calls made from this number. 
    'page': 'x', //optional //Used to return a particular page within the list.
    'pagesize': 'x', //optional //Used to specify the amount of list items to return per page. 
    'datecreated': 'xxxx-xx-xx' //optional //Used to specify the created date of the call. 
};

// Prints the complete response
m.list_calls(params, function (status, response) {
    console.log('API Response:\n', JSON.stringify(response));
});