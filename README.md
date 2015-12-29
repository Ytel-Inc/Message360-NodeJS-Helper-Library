# Message360-NodeJS-Helper-Library

![](http://message360.com/wordpress/wp-content/uploads/2014/08/message360.png)

### Welcome to the Message360 NodeJS Helper Library
This is home to the Official NodeJS Message360 Helper Library. 

```javascript
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
  'tocountrycode' : 1 //required //Please enter ToCountryCode number with country code.(i.e 1)
};

// Prints the complete response
m.send_message(params, function (status, response) {
    console.log('API Response:\n', JSON.stringify(response));

```

An account for Message360 is free to sign up for at [https://api.message360.com](https://api.message360.com)

### About Message360
Empowering technology to meet modern day communication needs. Through a simple to use API, developers can build, connect, and manage all communications platforms in one system. 

Communicating with prospects, leads and customers is the single most important thing when protecting and growing your business. Now, take it to the next level by imagining the possibilities and how your business can communicate with these people.

More information can be obtained about message360 at [http://www.message360.com](http://message360.com/)

### Support or Contact
Having trouble with Pages or the library?  Visit [https://api.message360.com](https://api.message360.com) and click the Help button in the bottom right corner or [contact support](mailto:support@ytel.com) and we’ll help you sort it out.

### Company Information
© 2015 Ytel, Inc. | Ytel™ All Rights Reserved. | 800.382.4913 | www.ytel.com
