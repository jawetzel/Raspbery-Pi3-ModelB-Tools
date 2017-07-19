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

module.exports = {
    CaptureImage: CaptureImage
};