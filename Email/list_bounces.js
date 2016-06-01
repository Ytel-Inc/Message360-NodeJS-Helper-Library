/**
  * @author : Ytel
  * @version : v2
  * @description : This endpoint allows you to retrieve entries in the Bounces list. 
  */

var m360 = require('m360');
var auth = require('../auth');

var m = m360.RestAPI({
  authId: auth.authId,
  authToken: auth.authToken
});

var params = {
    'Limit': '', //Optional field to limit the number of results returned.
    'Offset' : '' //Optional beginning point in the list to retrieve from.
};

// Prints the complete response
m.list_bounces(params, function (status, response) {
    console.log('API Response:\n', JSON.stringify(response));
});

