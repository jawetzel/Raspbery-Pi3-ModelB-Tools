var sensor = require('node-dht-sensor');

var ClimateSenseDht11 = function (callback) {
    sensor.read(11, 4, function(err, temperature, humidity) {
        if (!err) {
            var temp = (temperature * 9 / 5) + 32;
            callback({
                Temperature: temp,
                Humidity: humidity
            })
        }
    });
};


var ClimateSenseDht22 = function (callback) {
    sensor.read(22, 4, function(err, temperature, humidity) {
        if (!err) {
            var temp = (temperature * 9 / 5) + 32;
            callback({
                Temperature: temp,
                Humidity: humidity
            })
        }
    });
};
module.exports = {
    ClimateSenseDht11: ClimateSenseDht11,
    ClimateSenseDht22: ClimateSenseDht22
};