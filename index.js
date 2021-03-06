var Servos = require("./tools/servoMotor");
var Climate = require('./tools/tempAndhumidity');
var Image = require('./tools/recordImage');
var RecordAudio = require('./tools/recordAudio');

// Servo Example
var position = 30;
var positionDirectionUp = true;
var servoLoop = function(){
    Servos.ActivateServo(15, position, 500); //servo slot 11, 500ms delay, position is in degrees
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
//servoLoop(); //uncomment this to run the servo loop example

// 360 servo (speed can range from -90 to 90
var speed = -75;
var DirectionClockwise = true;
var servo360Loop = function () {
    Servos.Activate360Servo(15, speed);
    if(speed === -90 || speed === 90){
        DirectionClockwise = !DirectionClockwise;
    }
    if(DirectionClockwise){
        speed += 15;
    } else {
        speed -= 15;
    }
    setTimeout(function () {
        servo360Loop();
    }, 2500);
};
//servo360Loop(); // uncomment this to run the 360 degree servo


// climate Example
var climateLoop = function () {
    Climate.ClimateSenseDht22(function (climate) {
        console.log('Tempature: ' + climate.Temperature);
        console.log('Humidity: ' + climate.Humidity);
        setTimeout(function () {
            climateLoop();
        }, 2000);
    });
};
//climateLoop(); //uncomment to run climate loop example


// Image Example
var ImageCounter = 0;
var ImageLoop = function () {
    Image.CaptureImage('temp/Josh' + ImageCounter + '.jpg', function () { //string is file path
        ImageCounter++;
        console.log('took image ' + ImageCounter);
        setTimeout(function () {
            ImageLoop();
        }, 2000);
    })
};
//ImageLoop(); //uncomment to run the image loop example

// Video Recording Example
var VideoRecord = function(){
    Image.VideoRecord('temp/initialRecord', 10, function () {
        console.log('done');
    })
};
//VideoRecord(); //uncomment to run video recording example


// Record Audio example
var Audio = function () {
    RecordAudio.RecordAudio('temp/JoshAudioFile.wav');
};