var mic = require('mic');
var fs = require('fs');
var path = require('path');



var RecordAudio = function(filepath, callback){
    var micInstance = mic({
        rate: '16000',
        channels: '1',
        debug: true,
        exitOnSilence: 6
    });

    var micInputStream = micInstance.getAudioStream();
    var outputFileStream = fs.WriteStream(filepath);
    micInputStream.pipe(outputFileStream);

    micInputStream.on('silence', function() {
        console.log("Got SIGNAL silence");
        micInstance.stop();
        setTimeout(function () {
            callback();
        }, 200);
    });

    micInstance.start();
};

module.exports = {
    RecordAudio: RecordAudio
};