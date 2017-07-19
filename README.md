# Raspbery-Pi3-ModelB-Tools
Tamplate project with some tools for the Raspberry pi 3 model b alredy setup.

[Raspberry pi3 model b GPIO Diagram](https://github.com/jawetzel/Raspbery-Pi3-ModelB-Tools/blob/master/pi3_gpio.png), 
the side with 1 faces the body of the pi


# Capabilities

## Play and Record Audio 
https://github.com/ashishbajaj99/mic
https://github.com/pmelander/node-aplay

my choices for [speaker](https://www.amazon.com/gp/product/B00D4MT9S0/ref=od_aui_detailpages00?ie=UTF8&psc=1), 
[microphone](https://www.amazon.com/gp/product/B00NSOWWIS/ref=oh_aui_detailpage_o00_s00?ie=UTF8&psc=1)

## Take Photos
https://github.com/troyth/node-raspicam

[my choice of camera](https://www.amazon.com/gp/product/B00JM94WCW/ref=oh_aui_detailpage_o08_s00?ie=UTF8&psc=1)

## Servo Motors
https://github.com/101100/pca9685

my choice of [motors](https://www.amazon.com/gp/product/B01I6AWBJI/ref=oh_aui_detailpage_o00_s00?ie=UTF8&th=1),
[servo driver](https://www.amazon.com/gp/product/B01G61MZF4/ref=oh_aui_detailpage_o01_s00?ie=UTF8&psc=1), and 
[servo motor power adapter](https://www.amazon.com/gp/product/B01MY0FG0I/ref=oh_aui_detailpage_o02_s00?ie=UTF8&psc=1)

## Climate Sensor(temp and humidity)
https://github.com/momenso/node-dht-sensor

this works for both [DHT11](https://www.amazon.com/Temperature-Relative-Humidity-Compatible-Arduino/dp/B00TM87YRS) and [DHT22](https://www.amazon.com/HiLetgo-Digital-Temperature-Humidity-Replace/dp/B01N9BA0O4/ref=sr_1_4?s=hi&ie=UTF8&qid=1500480204&sr=1-4&keywords=dht22)

# Raspberry pi3 model B command Line Setup

## updating the pi
```bash
sudo apt-get update
sudo apt full-upgrade
sudo rpi-update
```

## nodejs
```bash
sudo apt-get install alsa-base alsa-utils
sudo apt install nodejs
```

## AudioSetup
```bash
sudo apt-get install alsa-base alsa-utils
```

## [Remote Desktop setup and share file setup](http://thisdavej.com/beginners-guide-to-installing-node-js-on-a-raspberry-pi/)
