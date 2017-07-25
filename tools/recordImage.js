var Camera = require('raspicam');


var CaptureImage = function(filePath, callback){
    var camera = new Camera({
        mode: 'photo',
        encoding: 'jpg',
        quality: 10,
        width: 500,
        height: 500,
        output: filePath,
        timeout: 1
    });
    camera.on('exit', function(){
        callback();
    });
    camera.start();
};

var VideoRecord = function (filepath, recordTime, callback) {
    var camera = new Camera({
        mode: "video",
        output: filepath + ".h264",
        framerate: 30,
        bitrate: 10000000,
        timeout: 0
    });
    camera.start();
    setTimeout(function () {
        camera.stop();
    }, recordTime * 1000);
    camera.on("start", function(){
        console.log('started recording video');
    });
    camera.on("stop", function(){
        callback();
    });
};

module.exports = {
    CaptureImage: CaptureImage,
    VideoRecord: VideoRecord
};