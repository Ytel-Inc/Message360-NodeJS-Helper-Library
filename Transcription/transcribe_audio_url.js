/**
  * @author : Ytel
  * @version : V1b
  * @description : Here you can experiment with transcribing audio located at a URL and view the request response generated when doing so.
  */

var m360 = require('m360');
var auth = require('../auth');

var m = m360.RestAPI({
  authId: auth.authId,
  authToken: auth.authToken
});

var params = {
    'audiourl': 'xxxx' //required //URL where the audio to be transcribed is located. Allowed Formats : .mp3 & .wav 
};

// Prints the complete response
m.transcribe_audio_url(params, function (status, response) {
    console.log('API Response:\n', JSON.stringify(response));
});