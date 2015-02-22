# Unchatbar Notification
[![Build Status](https://travis-ci.org/unchatbar/unchatbar-notification.svg?branch=master)](https://travis-ci.org/unchatbar/unchatbar-notification)

notification for chat/stream

## Requirements
* Node.js 0.10+
* Chrome 26+ or Firefox 23+

## Installation
* Install Bower: `npm install -g bower`
* Install Gunt CLI: `npm install -g grunt-cli`
* Clone repository `git clone git://github.com/unchatbar/unchatbar-notification.git`
* Run `npm install` to install required Node.js modules
* Run `bower install` to install required Bower components


## Dependencies
* angular
* json3
* es5-shim
* bootstrap-css-only
* lodash



## Get Started
```javascript
angular.module('app', ['unchatbar-notification'])
```


## API
* notification for stream start

>
```javascript
Notify.streamCallStart();
```

* notification for stream stop

>
```javascript
Notify.streamCallStop();
```


* notification for new text message

>
```javascript
Message.textMessage([MESSAGE]);
```
