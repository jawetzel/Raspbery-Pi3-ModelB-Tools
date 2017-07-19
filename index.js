var Servos = require("./tools/servoMotor");
var Climate = require('./tools/tempAndhumidity');
var Image = require('./tools/recordImage');

// Servo Example
var position = 30;
var positionDirectionUp = true;
var servoLoop = function(){
    Servos.ActivateServo(15, position, 500);
    console.log('done' + position);
    if(position === 180 || position === 0){
        positionDirectionUp = !positionDirectionUp;
    }
    if(positionDirectionUp){
        position += 30;
    } else {
        position -= 30;
    }
    setTimeout(function(){
        servoLoop();
    }, 500)
};

//servoLoop();


// climate Example
var climateLoop = function () {
    Climate.ClimateSenseDht11(function (climate) {
        console.log('Tempature: ' + climate.Temperature);
        console.log('Humidity: ' + climate.Humidity);
        setTimeout(function () {
            climateLoop();
        }, 2000);
    });
};

//climateLoop();

var ImageCounter = 0;
var ImageLoop = function () {
    Image.CaptureImage('temp/Josh' + ImageCounter + '.jpg', function () {
        ImageCounter++;
        console.log('took image ' + ImageCounter);
        setTimeout(function () {
            ImageLoop();
        }, 2000);
    })
};

ImageLoop();