/**
  * @author : Ytel
  * @version : V1b
  * @description : Here you can experiment with playing audio to conference participants.
  */

var m360 = require('m360');
var auth = require('../auth');

var m = m360.RestAPI({
  authId: auth.authId,
  authToken: auth.authToken
});

var params = {
    'conferencesid': 'xxxxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx', //required //The Sid identifying the conference this participant took part in.
    'participantsid': 'xxxxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx', //required //An alphanumeric string identifying this participant.
    'audiourl' : 'xxxx' //required //A URL to the audio file that will be played. Mutliple AudioUrl parameters may be passed to play more than one file like so: AudioUrl=abc.mp3&AudioUrl=123.mp3 
};

// Prints the complete response
m.play_audio(params, function (status, response) {
    console.log('API Response:\n', JSON.stringify(response));
});