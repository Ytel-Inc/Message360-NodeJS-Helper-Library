//Get required modules
var util = require('util');
var crypto = require('crypto');
var Request = require('request');
var qs = require('querystring');
var xmlBuilder = require('xmlbuilder');
var doc = xmlBuilder.create();

var m360 = {};

m360.options = {};
m360.options.host = 'api.message360.com';
m360.options.version = 'v2';
m360.options.authId = '';
m360.options.authToken = '';

var UserAgent = '';

// Generic m360 Error
function m360Error(msg) {
    Error.call(this);
    Error.captureStackTrace(this, arguments.callee);
    this.message = (msg || '') + '\n';
    this.name = 'm360Error';
}

m360Error.prototype = Error.prototype;

// Main request function
var request = function (action, method, params, callback, optional) {
    if (optional) {
        if (typeof params != 'object') {
            if (typeof params == 'function') {
                var callback = params;
            }
            var params = {};
        }
    }

    if (!callback) {
        var callback = function() {};
    }

    var err = null;
    var path = 'https://' + m360.options.host + '/api/' + m360.options.version + '/'+ action +'.json';

    var auth = 'Basic ' + new Buffer(m360.options.authId + ':' + m360.options.authToken)
        .toString('base64');

    var headers = {
        'Authorization': auth,
        'User-Agent': UserAgent,
        'Content-Type': 'application/json'
    };

    var request_options = {
        uri: path,
        headers: headers,
        json: true,
    };

    if (method == 'POST') {
        var body = JSON.stringify(params);

        request_options.json = true;
        request_options.body = body;
        Request.post(request_options, function (error, response, body) {
            if (error || !response) {
              return callback(500, body)
            }
            if (response.statusCode != 201) {
                err = new m360Error(error);
            }
            callback(response.statusCode, body);

        });
    } else if (method == 'GET') {
        request_options.qs = params;
        Request.get(request_options, function (error, response, body) {
            callback(response.statusCode, body);
        });
    } else if (method == 'DELETE') {
        Request.del(request_options, function (error, response, body) {
            callback(response.statusCode, body);
        });
    } else if (method == 'PUT') {
        var body = JSON.stringify(params);

        request_options.json = true;
        request_options.body = body,
        Request.put(request_options, function (error, response, body) {
            callback(response.statusCode, body);
        });
    }
};

// Exposing generic request functionality as well.
m360.request = request;

// For verifying the m360 server signature
m360.create_signature = function (url, params) {
  var toSign = url;

  Object.keys(params).sort().forEach(function(key) {
    toSign += key + params[key];
  });

  var signature = crypto
    .createHmac('sha1', m360.options.authToken)
    .update(new Buffer(toSign, 'utf-8'))
    .digest('base64');

  return signature;
};

// Express middleware for verifying signature
m360.middleware = function(options) {
  return function (req, res, next) {
    if (process.env.NODE_ENV === 'test') return next()

    var toSign;
    if (options && options.host) {
      toSign = options.host;
    } else {
      toSign = req.protocol + '://' + req.host;
    }
    toSign += req.originalUrl;

    var expectedSignature = m360.create_signature(toSign, req.body);

    if (expectedSignature === req.header('X-m360-Signature')) {
      next();
    } else {
      var msg = 'Invalid m360 Signature toSign=' + toSign + ', ' +
                'expected=' + expectedSignature + ', ' +
                'actual=' + req.header('X-m360-Signature');
      next(new Error(msg));
    }
  };
};


// Accounts
m360.get_account = function (params, callback) {
    var action = 'accounts/viewaccount/'+params['date'];
    var method = 'GET';

    request(action, method, params, callback, true);
};

//Usage 
m360.list_usage = function (params, callback) {
    var action = 'usage/listusage';
    var method = 'GET';

    request(action, method, params, callback);
};

// Message
m360.view_message = function (params, callback) {
    var action = 'sms/viewsms/'+params['MessageSid'];
    var method = 'GET';

    request(action, method, params, callback);
};

m360.list_messages = function (params, callback) {
    var action = 'sms/listsms';
    var method = 'GET';

    request(action, method, params, callback);
};

m360.send_message = function (params, callback) {
    var action = 'sms/sendsms';
    var method = 'GET';

    request(action, method, params, callback);
};

m360.inbound_message = function (params, callback) {
    var action = 'sms/getinboundsms';
    var method = 'GET';

    request(action, method, params, callback);
};

m360.number_optin = function (params, callback) {
    var action = 'sms/numberoptin';
    var method = 'GET';

    request(action, method, params, callback);
};


// Calls
m360.view_call = function (params, callback) {
    var action = 'calls/viewcalls/'+params['CallSid'];
    var method = 'GET';

    request(action, method, params, callback);
};

m360.list_calls = function (params, callback) {
    var action = 'calls/listcalls';
    var method = 'GET';

    request(action, method, params, callback);
};

m360.make_call = function (params, callback) {
    var action = 'calls/makecall';
    var method = 'GET';

    request(action, method, params, callback);
};

m360.interrupt_call = function (params, callback) {
    var action = 'calls/interruptcalls';
    var method = 'GET';

    request(action, method, params, callback);
};

m360.send_digit = function (params, callback) {
    var action = 'calls/senddigits';
    var method = 'GET';

    request(action, method, params, callback);
};

m360.play_audio_call = function (params, callback) {
    var action = 'calls/playaudios';
    var method = 'GET';

    request(action, method, params, callback);
};

m360.record_call = function (params, callback) {
    var action = 'calls/recordcalls';
    var method = 'GET';

    request(action, method, params, callback);
};

m360.voice_effect = function (params, callback) {
    var action = 'calls/voiceeffect/'+params['CallSid'];
    var method = 'GET';

    request(action, method, params, callback);
};

//Conference
m360.view_conference = function (params, callback) {
    var action = 'conferences/viewconference/'+params['conferenceid'];
    var method = 'GET';

    request(action, method, params, callback);
};

m360.list_conference = function (params, callback) {
    var action = 'conferences/listconference';
    var method = 'GET';

    request(action, method, params, callback);
}; 

m360.add_participant = function (params, callback) {
    var action = 'conferences/addparticipant';
    var method = 'GET';

    request(action, method, params, callback);
}; 

m360.view_participant = function (params, callback) {
    var action = 'conferences/viewparticipant';
    var method = 'GET';

    request(action, method, params, callback);
}; 

m360.list_participant = function (params, callback) {
    var action = 'conferences/listparticipant';
    var method = 'GET';

    request(action, method, params, callback);
}; 

m360.deaformute_participants = function (params, callback) {
    var action = 'conferences/deafmuteparticipant';
    var method = 'GET';

    request(action, method, params, callback);
}; 

m360.hangup_participants = function (params, callback) {
    var action = 'conferences/hangupparticipant';
    var method = 'GET';

    request(action, method, params, callback);
}; 

m360.play_audio = function (params, callback) {
    var action = 'conferences/playaudio';
    var method = 'GET';

    request(action, method, params, callback);
}; 


//Recording
m360.view_recording = function (params, callback) {
    var action = 'recording/viewrecording/'+params['recordingid'];
    var method = 'GET';

    request(action, method, params, callback);
}; 

m360.list_recording = function (params, callback) {
    var action = 'recording/listrecording';
    var method = 'GET';

    request(action, method, params, callback);
}; 

m360.delete_recording = function (params, callback) {
    var action = 'recording/deleterecording/'+params['recordingsid'];;
    var method = 'GET';

    request(action, method, params, callback);
}; 


//Transcription
m360.view_transcription = function (params, callback) {
    var action = 'transcriptions/viewtranscription/'+params['TranscriptionSid'];
    var method = 'GET';

    request(action, method, params, callback);
}; 

m360.list_transcription = function (params, callback) {
    var action = 'transcriptions/listtranscription';
    var method = 'GET';

    request(action, method, params, callback);
};

m360.transcribe_audio_url = function (params, callback) {
    var action = 'transcriptions/audiourltranscription';
    var method = 'GET';

    request(action, method, params, callback);
};

m360.recording_transcription = function (params, callback) {
    var action = 'transcriptions/recordingtranscription';
    var method = 'GET';

    request(action, method, params, callback);
};


//Phone Numbers
m360.list_available_numbers = function (params, callback) {
    var action = 'incomingphone/availablenumber';
    var method = 'GET';

    request(action, method, params, callback);
};

m360.view_numbers = function (params, callback) {
    var action = 'incomingphone/viewnumber/'+params['phonenumber'];
    var method = 'GET';

    request(action, method, params, callback);
};

m360.list_numbers = function (params, callback) {
    var action = 'incomingphone/listnumber';
    var method = 'GET';

    request(action, method, params, callback);
};

m360.buy_number = function (params, callback) {
    var action = 'incomingphone/buynumber';
    var method = 'GET';

    request(action, method, params, callback);
}; 

m360.update_number = function (params, callback) {
    var action = 'incomingphone/updatenumber';
    var method = 'GET';

    request(action, method, params, callback);
};

m360.release_number = function (params, callback) {
    var action = 'incomingphone/releasenumber/'+params['phonenumber'];
    var method = 'GET';

    request(action, method, params, callback);
};

//Email
m360.send_email = function (params, callback) {
    var action = 'email/sendemails';
    var method = 'GET';

    request(action, method, params, callback);
};

m360.list_blocks = function (params, callback) {
    var action = 'email/listblockemail';
    var method = 'GET';

    request(action, method, params, callback);
};

m360.delete_blocks = function (params, callback) {
    var action = 'email/deleteblocksemail/'+params['email'];
    var method = 'GET';

    request(action, method, params, callback);
};

m360.list_bounces = function (params, callback) {
    var action = 'email/listbounceemail';
    var method = 'GET';

    request(action, method, params, callback);
};

m360.delete_bounce = function (params, callback) {
    var action = 'email/deletebouncesemail/'+params['email'];
    var method = 'GET';

    request(action, method, params, callback);
};

m360.list_spam = function (params, callback) {
    var action = 'email/listspamemail';
    var method = 'GET';

    request(action, method, params, callback);
};

m360.delete_spam = function (params, callback) {
    var action = 'email/deletespamemail/'+params['email'];
    var method = 'GET';

    request(action, method, params, callback);
};

m360.list_invalid = function (params, callback) {
    var action = 'email/listinvalidemail/'+params['email'];
    var method = 'GET';

    request(action, method, params, callback);
};

m360.delete_invalid = function (params, callback) {
    var action = 'email/deletespamemail/'+params['email'];
    var method = 'GET';

    request(action, method, params, callback);
};

m360.add_unsubscribe = function (params, callback) {
    var action = 'email/addunsubscribesemail/'+params['email'];
    var method = 'GET';

    request(action, method, params, callback);
};

m360.list_unsubscribe = function (params, callback) {
    var action = 'email/listunsubscribedemail';
    var method = 'GET';

    request(action, method, params, callback);
};

m360.delete_unsubscribe = function (params, callback) {
    var action = 'email/deleteunsubscribedemail/'+params['email'];
    var method = 'GET';

    request(action, method, params, callback);
};

//Carrier

m360.carrier_lookup_list = function (params, callback) {
    var action = 'carrier/lookuplist';
    var method = 'GET';

    request(action, method, params, callback);
};

m360.carrier_lookup = function (params, callback) {
    var action = 'carrier/lookup';
    var method = 'GET';

    request(action, method, params, callback);
};

/**
 * XML Response Generation
 */

// Decalaring a class Response
function Response() {
    this.element = 'Response';
    this.nestables = ['Speak', 'Play', 'GetDigits', 'Record', 'Dial', 'Message',
                     'Redirect', 'Wait', 'Hangup', 'PreAnswer', 'Conference', 'DTMF'];
    this.valid_attributes = [];
    this.elem = doc.begin(this.element);
};

Response.prototype = {
    init: function (name, body, attributes, parent) {
        this.name = name;
        this.body = body;
        this.elem = '';

        if (this.element != 'Response') {
            this.elem.parent = parent;
            this.elem = parent.ele(this.name);
        } else {
            this.elem = this.elem.ele(this.name);
        }

        if (!attributes) {
            var attributes = {};
        }
        var keys = Object.keys(attributes);

        for (var i = 0; i < keys.length; i++) {
            if (this.valid_attributes.indexOf(keys[i]) == -1) {
                throw new m360Error('Not a valid attribute : "' + keys[i] + '" for "' + this.name + '" Element');
            }
            this.elem.att(keys[i], attributes[keys[i]])
        }

        if (body) {
            this.elem.text(body)
        }
    },

    add: function (new_element, body, attributes) {
        if (body === undefined) {
            throw new m360Error('No text set for ' + new_element.element + '.');
        }

        if (this.nestables.indexOf(new_element.element) > -1) {
            var parent = this.elem;
        } else {
            throw new m360Error(new_element.element + ' cannot be nested in ' + this.element + '.');
        }
        new_element.init(new_element.element, body, attributes, parent);
        return new_element;
    },

    addConference: function (body, attributes) {
        return this.add(new Conference(Response), body, attributes);
    },

    addNumber: function (body, attributes) {
        return this.add(new Number(Response), body, attributes);
    },

    addUser: function (body) {
        return this.add(new User(Response), body, {});
    },

    addDial: function (attributes) {
        return this.add(new Dial(Response), '', attributes);
    },

    addGetDigits: function (attributes) {
        return this.add(new GetDigits(Response), '', attributes);
    },

    addHangup: function (attributes) {
        return this.add(new Hangup(Response), '', attributes);
    },

    addMessage: function (body, attributes) {
        return this.add(new Message(Response), body, attributes);
    },

    addPlay: function (body, attributes) {
        return this.add(new Play(Response), body, attributes);
    },

    addPreAnswer: function () {
        return this.add(new PreAnswer(Response), '', {});
    },

    addRecord: function (attributes) {
        return this.add(new Record(Response),'', attributes);
    },

    addRedirect: function (body, attributes) {
        return this.add(new Redirect(Response), body, attributes);
    },

    addSpeak: function (body, attributes) {
        return this.add(new Speak(Response), body, attributes);
    },

    addWait: function (attributes) {
        return this.add(new Wait(Response), '', attributes);
    },

    addDTMF: function (body, attributes) {
        return this.add(new DTMF(Response), body, attributes);
    },

    toXML: function () {
        return this.elem.toString();
    }
}

function Conference(Response) {
    this.element = 'Conference';
    this.valid_attributes = ['muted', 'beep', 'startConferenceOnEnter',
                'endConferenceOnExit', 'waitSound', 'enterSound', 'exitSound',
                'timeLimit', 'hangupOnStar', 'maxMembers', 'record','recordWhenAlone',
                'recordFileFormat', 'action', 'method', 'redirect',
                'digitsMatch', 'callbackUrl', 'callbackMethod', 'stayAlone',
                'floorEvent', 'transcriptionType', 'transcriptionUrl',
                'transcriptionMethod', 'relayDTMF'];
    this.nestables = [];
}
util.inherits(Conference, Response);

function Number(Response) {
    this.element = 'Number';
    this.valid_attributes = ['sendDigits', 'sendOnPreanswer', 'sendDigitsMode'];
    this.nestables = [];
}
util.inherits(Number, Response);

function User(Response) {
    this.element = 'User';
    this.nestables = [];
    this.valid_attributes = ['sendDigits', 'sendOnPreanswer', 'sipHeaders'];
}
util.inherits(User, Response);

function Dial(Response) {
    this.element = 'Dial';
    this.valid_attributes = ['action', 'method', 'timeout', 'hangupOnStar',
                'timeLimit', 'callerId', 'callerName', 'confirmSound',
                'dialMusic', 'confirmKey', 'redirect', 'callbackUrl',
                'callbackMethod', 'digitsMatch', 'digitsMatchBLeg', 'sipHeaders'];
    this.nestables = ['Number', 'User'];
}
util.inherits(Dial, Response);

function GetDigits(Response) {
    this.element = 'GetDigits';
    this.valid_attributes = ['action', 'method', 'timeout', 'digitTimeout',
                'finishOnKey', 'numDigits', 'retries', 'invalidDigitsSound',
                'validDigits', 'playBeep', 'redirect', 'log'];
    this.nestables = ['Speak', 'Play', 'Wait'];
}
util.inherits(GetDigits, Response);

function Hangup(Response) {
    this.element = 'Hangup';
    this.valid_attributes = ['schedule', 'reason'];
    this.nestables = [];
}
util.inherits(Hangup, Response);

function Message(Response) {
    this.element = 'Message';
    this.nestables = [];
    this.valid_attributes = ['src', 'dst', 'type', 'callbackUrl',
                'callbackMethod'];
}
util.inherits(Message, Response);

function Play(Response) {
    this.element = 'Play';
    this.valid_attributes = ['loop'];
    this.nestables = [];
}
util.inherits(Play, Response);

function PreAnswer(Response) {
    this.element = 'PreAnswer';
    this.valid_attributes = [];
    this.nestables = ['Play', 'Speak', 'GetDigits', 'Wait', 'Redirect',
                'Message', 'DTMF'];
}
util.inherits(PreAnswer, Response);

function Record(Response) {
    this.element = 'Record';
    this.nestables = [];
    this.valid_attributes = ['action', 'method', 'timeout', 'finishOnKey',
                'maxLength', 'playBeep', 'recordSession',
                'startOnDialAnswer', 'redirect', 'fileFormat',
                'callbackUrl', 'callbackMethod', 'transcriptionType',
                'transcriptionUrl', 'transcriptionMethod'];
}
util.inherits(Record, Response);

function Redirect(Response) {
    this.element = 'Redirect';
    this.valid_attributes = ['method'];
    this.nestables = [];
}
util.inherits(Redirect, Response);

function Speak(Response) {
    this.element = 'Speak';
    this.valid_attributes = ['voice', 'language', 'loop'];
    this.nestables = [];
}
util.inherits(Speak, Response);

function Wait(Response) {
    this.element = 'Wait';
    this.valid_attributes = ['length', 'silence', 'min_silence', 'minSilence', 'beep'];
    this.nestables = [];
}
util.inherits(Wait, Response);

function DTMF(Response) {
    this.element = 'DTMF';
    this.nestables = [];
    this.valid_attributes = ['digits', 'async'];
}

util.inherits(DTMF, Response);

/**
 * Module Exports
 */

exports.Response = function () {
    return new Response();
}

exports.RestAPI = function (config) {
    if (!config) {
        throw new m360Error('Auth ID and Auth Token must be provided.');
    }

    if (typeof config != 'object') {
        throw new m360Error('Config for RestAPI must be provided as an object.');
    }

    if (!config.authId || !config.authToken) {
        throw new m360Error('Auth ID and Auth Token must be provided.');
    }

    // override default config according to the config provided.
    for (key in config) {
        m360.options[key] = config[key];
    }

    return m360;
}
