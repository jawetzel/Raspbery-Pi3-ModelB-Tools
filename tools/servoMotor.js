var i2cBus = require ("i2c-bus");
var Pca9685Driver = require ("pca9685").Pca9685Driver;

var options = {
    i2c: i2cBus.openSync(1),
    address: 0x40,
    frequency: 50,
    debug: false
};

var ActivateServo = function(pin, degree) {
    var pulseWidth = (degree + 60) * 10;
    var pwm = new Pca9685Driver(options, function(err) {
        if (err) {
            console.error("Error initializing PCA9685");
            process.exit(-1);
        }
        pwm.setPulseRange(0, 42, 255, function() {
            if (err) {
                console.error("Error setting pulse range.");
            }
        });
        pwm.setPulseLength(pin, pulseWidth);
    });
};

module.exports = {
    ActivateServo : ActivateServo
};