# Raspbery-Pi3-ModelB-Tools
Tools for raspberry pi 3 model b

# Capabilities

## Play and Record Audio 
https://github.com/ashishbajaj99/mic
https://github.com/pmelander/node-aplay

## Take Photos
https://github.com/troyth/node-raspicam

## Servo Motors
https://github.com/101100/pca9685

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


## Servo Motors
This template uses [this servo motor driver](https://www.adafruit.com/product/815) 
to run the motors, my personal configuration also used [these as a way to supply power to the driver](https://www.amazon.com/gp/product/B01MY0FG0I/ref=oh_aui_detailpage_o02_s00?ie=UTF8&psc=1)