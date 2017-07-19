var Sound = require('node-aplay'); //sudo apt-get install alsa-base alsa-utils


var PlayAudioReturnOnEnd = function(fileName, callback) {
    var audio = new Sound(fileName);
    audio.play();
    audio.on('complete', function () {
        callback();
    });
};

var PlayAudioNoReturn = function(fileName) {
    var audio = new Sound(fileName);
    audio.play();
};

module.exports = {
    PlayAudioReturnOnEnd: PlayAudioReturnOnEnd,
    PlayAudioNoReturn: PlayAudioNoReturn
};