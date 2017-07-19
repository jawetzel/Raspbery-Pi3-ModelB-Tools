var Servos = require("./tools/servoMotor");
var Climate = require('./tools/tempAndhumidity');

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
    Climate.ClimateSense(function (climate) {
        console.log('Tempature: ' + climate.Temperature);
        console.log('Humidity: ' + climate.Humidity);
        setTimeout(function () {
            climateLoop();
        }, 2000);
    });
};

climateLoop();