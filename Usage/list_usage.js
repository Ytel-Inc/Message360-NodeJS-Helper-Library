/**
  * @author : Ytel
  * @version : v2
  * @description : The request response returned here contains a list of usages resources associated with your message360 account. 
  */

var m360 = require('m360');
var auth = require('../auth');

var m = m360.RestAPI({
  authId: auth.authId,
  authToken: auth.authToken
});

var params = {
    'ProductCode': 0, //optional // Allowed value 0-13
    'startDate' : 'xxxx-xx-xx', //optional //Select from which date searching should start. yyyy-mm-dd
    'endDate' : 'xxxx-xx-xx' //optional //Select date to which searching should end. yyyy-mm-dd
}; 

// Prints the complete response
m.list_usage(params, function (status, response) {
    console.log('API Response:\n', JSON.stringify(response));
});