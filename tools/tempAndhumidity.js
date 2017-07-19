var sensor = require('node-dht-sensor');

var ClimateSense = function (callback) {
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

module.exports = {
    ClimateSense: ClimateSense
};