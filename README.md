# Awesome app

This document list all the javascript libs used at [Soixante circuits](http://soixantecircuits.fr). They are compatible with Webpack and run in the browser and / or node only.

There are tons of libs out there. You certainly not need them all. For sure it's a pain to test, check, and push the limit of each of them when you start a new project. To ease the process of development, we decided to stick to some of the libs we really enjoyed to use. They are selected because they did not fail our test and have been use in website or in application for clients and for internal projects. All of them are under the **MIT licence**.
Every month we test the ease of use, the learning curve, the maintenance of these libs. We won't reinvent the wheel so lets keep improving and focus our energy on the libs that already exist.
This list respects the [Single Responsibility Principle](https://en.wikipedia.org/wiki/Single_responsibility_principle). This means each of them do something chirurgically and do it well. When you build your project you will not need them all :)

[<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Hexagonal.svg/295px-Hexagonal.svg.png" align="right" width=100>](https://github.com/soixantecircuits/neodymium) This list is maintened continuously and serves as a startup prompt for [Neodymium Generator](https://github.com/soixantecircuits/neodymium).
**Neodymium** allows to built interactive applications fast and without any pain. It brings Webpack and tested set of libs out of the box, tested in production ready projects.

Let's build something great ! ⚒

## Routing
Name | Description | npm command | Trend | Compatibility | Published By
------------- | ------------- | ------------- | ------------- | ------------- | -------------
[Crossroads](https://millermedeiros.github.io/crossroads.js/) | It parses a string input and decides which action should | `npm i --save crossroads` | [<img src="https://img.shields.io/npm/dm/crossroads.svg" align="right">](https://www.npmjs.com/package/crossroads) | ![Compatibility](https://img.shields.io/badge/cover-both-green.svg)  | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)
[Hasher](https://github.com/millermedeiros/hasher/)  | Set of functions to control browser history | `npm i --save hasher` | [<img src="https://img.shields.io/npm/dm/hasher.svg" align="right">](https://www.npmjs.com/package/hasher) | ![Compatibility](https://img.shields.io/badge/cover-both-green.svg) | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg) 

## Communication
Name | Description | npm command | Trend | Compatibility | Published By
------------- | ------------- | ------------- | ------------- | ------------- | -------------
[Signals.js](https://millermedeiros.github.io/signals.js/) | similar to an Event Emitter/Dispatcher or a Pub/Sub system | `npm i --save signals` | [<img src="https://img.shields.io/npm/dm/signals.svg" align="right">](https://www.npmjs.com/package/signals) | ![Compatibility](https://img.shields.io/badge/cover-both-green.svg)  | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg) 
[Socket.io](http://socket.io/) | Socket.IO enables real-time bidirectional event-based communication | `npm i --save socket.io` | [<img src="https://img.shields.io/npm/dm/socket.io.svg" align="right">](https://www.npmjs.com/package/socket.io) | ![Compatibility](https://img.shields.io/badge/cover-both-green.svg)  | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg) 
[Spacebro](https://github.com/soixantecircuits/spacebro) | Server for broadcasting socket.io service | `npm i --save spacebro` | [<img src="https://img.shields.io/npm/dm/spacebro.svg" align="right">](https://www.npmjs.com/package/spacebro) | ![Compatibility](https://img.shields.io/badge/cover-node-yellow.svg)  | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg) 
[Spacebro client](https://github.com/soixantecircuits/spacebro-client) | Connect thru socket.io with ZeroConf | `npm i --save spacebro-client` | [<img src="https://img.shields.io/npm/dm/spacebro-client.svg" align="right">](https://www.npmjs.com/package/spacebro-client) |![Compatibility](https://img.shields.io/badge/cover-node-yellow.svg)  | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg) 

## Breakpoint
Name | Description | npm command | Trend | Compatibility | Published By
------------- | ------------- | ------------- | ------------- | ------------- | -------------
[Enquire](http://wicky.nillia.ms/enquire.js) | a lightweight, pure JavaScript library for responding to CSS media queries | npm install enquire.js |  |![Compatibility](https://img.shields.io/badge/cover-both-green.svg)  | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg) 

## Modernizr
Name | Description | npm command | Trend | Compatibility | Published By
------------- | ------------- | ------------- | ------------- | ------------- | -------------
[Modernizr](https://modernizr.com/docs) | Automatically detects the availability of next-generation web technologies in your user's browsers | 'npm install -g modernizr' | | ![Compatibility](https://img.shields.io/badge/cover-both-green.svg)  | ![Author](https://img.shields.io/badge/author-unidentified-lightgrey.svg)

## Analytics
Name | Description | npm command | Trend | Compatibility | Published By
------------- | ------------- | ------------- | ------------- | ------------- | -------------
[GATracks](https://github.com/andjosh/gatrack.js) | Easily track user events with Google Analytics | 'npm install gatrack' | | ![Compatibility](https://img.shields.io/badge/cover-both-green.svg)  | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg) 

## KonamiCode
Name | Description | npm command | Trend | Compatibility | Published By
------------- | ------------- | ------------- | ------------- | ------------- | -------------
[Cheet](https://namuol.github.io/cheet.js/) | easy easter eggs (konami code, etc) for your site | 'npm install cheet.js' | | ![Compatibility](https://img.shields.io/badge/cover-both-green.svg)  | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)

## Keyboard Keypress
Name | Description | npm command | Trend | Compatibility | Published By
------------- | ------------- | ------------- | ------------- | ------------- | -------------
[Mousetrap](https://craig.is/killing/mice) | Simple library for handling keyboard shortcuts | 'npm install mousetrap' | | ![Compatibility](https://img.shields.io/badge/cover-both-green.svg) | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)

## Mouse Wheel
Name | Description | npm command | Trend | Compatibility | Published By
------------- | ------------- | ------------- | ------------- | ------------- | -------------
[Hamsterjs](http://monospaced.github.io/hamster.js/) | standalone javascript library for cross-browser mouse wheel support | npm install hamsterjs | | ![Compatibility](https://img.shields.io/badge/cover-both-green.svg)  | ![Author](https://img.shields.io/badge/author-no-red.svg)

## Resizer 
Name | Description | npm command | Trend | Compatibility | Published By
------------- | ------------- | ------------- | ------------- | ------------- | -------------
[Image-scale](https://github.com/gestixi/image-scale) needs to be made JQueryless | Scale images to fit or fill any target container via two simple properties: scale and align. | npm install image-scale | | ![Compatibility](https://img.shields.io/badge/cover-both-green.svg)  | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg) 

## Viewport
Name | Description | npm command | Trend | Compatibility | Published By
------------- | ------------- | ------------- | ------------- | ------------- | -------------
[Verge](http://verge.airve.com/) | compact set of cross-browser viewport utilities written in native JavaScript | `npm install verge` | | ![Compatibility](https://img.shields.io/badge/cover-both-green.svg) | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)

## RetinaJS
Name | Description | npm command | Trend | Compatibility | Published By
------------- | ------------- | ------------- | ------------- | ------------- | -------------
[RetinaJS](https://github.com/imulus/retinajs) | open source script that serves high-resolution images to devices with retina displays | npm install retina.js | | ![Compatibility](https://img.shields.io/badge/cover-both-green.svg) | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)

## CSS Selector Engine
Name | Description | npm command | Trend | Compatibility | Published By
------------- | ------------- | ------------- | ------------- | ------------- | -------------
[Sizzle](http://sizzlejs.com/) | A pure-JavaScript, bottom-up CSS selector engine designed to be easily dropped in to a host library |  npm install sizzle (might not be same team) (to test if automatic css prefixing) | | ![Compatibility](https://img.shields.io/badge/cover-both-green.svg) | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)


## Request
Name | Description | npm command | Trend | Compatibility | Published By
------------- | ------------- | ------------- | ------------- | ------------- | -------------
[Superagent](https://github.com/visionmedia/superagent) | small progressive client-side HTTP request library, and Node.js module with the same API, sporting many high-level HTTP client features | npm install superagent | | ![Compatibility](https://img.shields.io/badge/cover-both-green.svg) | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)

## Caching
Name | Description | npm command | Trend | Compatibility | Published By
------------- | ------------- | ------------- | ------------- | ------------- | -------------
[Bitfrost](https://github.com/soixantecircuits/bifrost) | Bifrost cache and queue your POST request when internet is down. It will try to forward your query to the desired endpoint, if it fail it will save the POST data and try to update them periodically. It will forward the response as it is. | | | ![Compatibility](https://img.shields.io/badge/cover-node-yellow.svg) | ![Author](https://img.shields.io/badge/author-unidentified-lightgrey.svg)

## Persistent data
Name | Description | npm command | Trend | Compatibility | Published By
------------- | ------------- | ------------- | ------------- | ------------- | -------------
[Native LocalStorage](https://developer.mozilla.org/en/docs/Web/API/Window/localStorage) | | [RTFM](https://en.wikipedia.org/wiki/RTFM) | | ![Compatibility](https://img.shields.io/badge/cover-chrome-orange.svg) | ![Author](https://img.shields.io/badge/author-unidentified-lightgrey.svg))

Name | Description | npm command | Trend | Compatibility | Published By
------------- | ------------- | ------------- | ------------- | ------------- | -------------
[Lawnchair](https://github.com/brianleroux/lawnchair) | simple json storage | npm install lawnchair | | ![Compatibility](https://img.shields.io/badge/cover-both-green.svg) | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)

Name | Description | npm command | Trend | Compatibility | Published By
------------- | ------------- | ------------- | ------------- | ------------- | -------------
[Linvodb3](https://github.com/Ivshti/linvodb3) | Model-oriented embedded database, inspired by Mongoose &amp; MongoDB, over LevelUP | npm install linvodb3| | ![Compatibility](https://img.shields.io/badge/cover-both-green.svg) | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)

## State machine
Name | Description | npm command | Trend | Compatibility | Published By
------------- | ------------- | ------------- | ------------- | ------------- | -------------
[Machina](http://machina-js.org/) | A library for creating powerful and flexible finite state machines | npm install machina | | ![Compatibility](https://img.shields.io/badge/cover-both-green.svg) | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)

## Animation
Name | Description | npm command | Trend | Compatibility | Published By
------------- | ------------- | ------------- | ------------- | ------------- | -------------
[GSAP](npm install gsap) | Think of GSAP as the Swiss Army Knife of web animation...but better | npm install retina.js | | ![Compatibility](https://img.shields.io/badge/cover-both-green.svg) | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)

Name | Description | npm command | Trend | Compatibility | Published By
------------- | ------------- | ------------- | ------------- | ------------- | -------------
[Tween](https://github.com/tweenjs/tween.js/) | Super simple, fast and easy to use tweening engine | npm install tween.js | | ![Compatibility](https://img.shields.io/badge/cover-both-green.svg) | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)

Name | Description | npm command | Trend | Compatibility | Published By
------------- | ------------- | ------------- | ------------- | ------------- | -------------
[elementTransitions](https://github.com/dan-silver/ElementTransitions) | Simple transitions for web pages | | | ![Compatibility](https://img.shields.io/badge/cover-chrome-orange.svg) | ![Author](https://img.shields.io/badge/author-unidentified-lightgrey.svg)

## Image manipulation
Name | Description | npm command | Trend | Compatibility | Published By
------------- | ------------- | ------------- | ------------- | ------------- | -------------
[Resizer(burno.js)](https://github.com/brunosimon/burno.js/blob/dev/src/tools/resizer.class.js) | Resize elements inside containers according to many possible options | | | ![Compatibility](https://img.shields.io/badge/cover-chrome-orange.svg) | ![Author](https://img.shields.io/badge/author-unidentified-lightgrey.svg)

Name | Description | npm command | Trend | Compatibility | Published By
------------- | ------------- | ------------- | ------------- | ------------- | -------------
[Zooming](https://gist.github.com/thejefflarson/914435) | Zooms | | | ![Compatibility](https://img.shields.io/badge/cover-chrome-orange.svg) | ![Author](https://img.shields.io/badge/author-unidentified-lightgrey.svg)

Name | Description | npm command | Trend | Compatibility | Published By
------------- | ------------- | ------------- | ------------- | ------------- | -------------
[RgbQuant](https://github.com/leeoniya/RgbQuant.js/tree/master) | color quantization lib | npm install rgbquant | | ![Compatibility](https://img.shields.io/badge/cover-both-green.svg) | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)

Name | Description | npm command | Trend | Compatibility | Published By
------------- | ------------- | ------------- | ------------- | ------------- | -------------
[Javascript-Load-Image](https://github.com/blueimp/JavaScript-Load-Image) | JavaScript Load Image is a library to load images provided as File or Blob objects or via URL | npm i blueimp-load-image | | ![Compatibility](https://img.shields.io/badge/cover-both-green.svg) | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)

## Video playback
Name | Description | npm command | Trend | Compatibility | Published By
------------- | ------------- | ------------- | ------------- | ------------- | -------------
[VideoJS](https://github.com/videojs/video.js) | An HTML5 and Flash video player with a common API and skin for both | npm install videojs | | ![Compatibility](https://img.shields.io/badge/cover-both-green.svg) | ![Author](https://img.shields.io/badge/author-no-red.svg)

## Slider
Name | Description | npm command | Trend | Compatibility | Published By
------------- | ------------- | ------------- | ------------- | ------------- | -------------
[Lory](https://www.npmjs.com/package/lory.js) | Touch enabled minimalistic slider written in vanilla JavaScript | npm install lory.js | | ![Compatibility](https://img.shields.io/badge/cover-both-green.svg) | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)

Name | Description | npm command | Trend | Compatibility | Published By
------------- | ------------- | ------------- | ------------- | ------------- | -------------
[PhotoSwipe](https://github.com/dimsemenov/PhotoSwipe) | JavaScript image gallery for mobile and desktop, modular, framework independen | npm install photoswipe | | ![Compatibility](https://img.shields.io/badge/cover-both-green.svg) | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)

Name | Description | npm command | Trend | Compatibility | Published By
------------- | ------------- | ------------- | ------------- | ------------- | -------------
[Swiper](https://github.com/nolimits4web/swiper/) | Most modern mobile touch slider with hardware accelerated transitions | npm install swiper | | ![Compatibility](https://img.shields.io/badge/cover-both-green.svg) | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)

## Sprite animation
Name | Description | npm command | Trend | Compatibility | Published By
------------- | ------------- | ------------- | ------------- | ------------- | -------------
[Motio](https://github.com/darsain/motio) | Small JavaScript library for sprite based animations and panning | | | ![Compatibility](https://img.shields.io/badge/cover-chrome-orange.svg) | ![Author](https://img.shields.io/badge/author-no-red.svg)

## Rendering
Name | Description | npm command | Trend | Compatibility | Published By
------------- | ------------- | ------------- | ------------- | ------------- | -------------
[Three](https://github.com/mrdoob/three.js/) | JavaScript 3D library | npm install three | | ![Compatibility](https://img.shields.io/badge/cover-both-green.svg) | ![Author](https://img.shields.io/badge/author-no-red.svg)


Name | Description | npm command | Trend | Compatibility | Published By
------------- | ------------- | ------------- | ------------- | ------------- | -------------
[Pixi](https://github.com/pixijs/pixi.js) | Pixi.js is a fast lightweight 2D library that works across all devices | https://www.npmjs.com/package/pixi.js | | ![Compatibility](https://img.shields.io/badge/cover-both-green.svg) | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)

## Effects
Name | Description | npm command | Trend | Compatibility | Published By
------------- | ------------- | ------------- | ------------- | ------------- | -------------
[Seriously](https://github.com/brianchirls/Seriously.js) |  A real-time, node-based video effects compositor for the web built with HTML5, Javascript and WebGL |  | | ![Compatibility](https://img.shields.io/badge/cover-chrome-orange.svg) | ![Author](https://img.shields.io/badge/author-unidentified-lightgrey.svg)

Name | Description | npm command | Trend | Compatibility | Published By
------------- | ------------- | ------------- | ------------- | ------------- | -------------
[StackBlur](https://github.com/flozz/StackBlur) | Fast and almost Gaussian blur | npm i stackblur-canvas | | ![Compatibility](https://img.shields.io/badge/cover-both-green.svg) | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)

## Recording
Name | Description | npm command | Trend | Compatibility | Published By
------------- | ------------- | ------------- | ------------- | ------------- | -------------
[Html2canvas](https://github.com/niklasvh/html2canvas) | The script allows you to take "screenshots" of webpages or parts of it, directly on the users browser | npm install html2canvas | | ![Compatibility](https://img.shields.io/badge/cover-both-green.svg) | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)

Name | Description | npm command | Trend | Compatibility | Published By
------------- | ------------- | ------------- | ------------- | ------------- | -------------
[Animated_gif](https://github.com/sole/Animated_GIF) | Javascript library for creating animated GIFs | npm install animated_gif | | ![Compatibility](https://img.shields.io/badge/cover-both-green.svg) | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)

Name | Description | npm command | Trend | Compatibility | Published By
------------- | ------------- | ------------- | ------------- | ------------- | -------------
[CCapture](https://github.com/spite/ccapture.js/) | A library to capture canvas-based animations at a fixed framerate | | | ![Compatibility](https://img.shields.io/badge/cover-chrome-orange.svg) | ![Author](https://img.shields.io/badge/author-no-red.svg)

Name | Description | npm command | Trend | Compatibility | Published By
------------- | ------------- | ------------- | ------------- | ------------- | -------------
[Videojs-record](https://github.com/collab-project/videojs-record) | video.js plugin for recording audio/video/image files | npm install videojs-record | | ![Compatibility](https://img.shields.io/badge/cover-both-green.svg) | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)

## Inputs
Name | Description | npm command | Trend | Compatibility | Published By
------------- | ------------- | ------------- | ------------- | ------------- | -------------
[Hammer](https://github.com/hammerjs/hammer.js) | A javascript library for multi-touch gestures :// You can touch this | npm install hammerjs | | ![Compatibility](https://img.shields.io/badge/cover-both-green.svg) | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)

Name | Description | npm command | Trend | Compatibility | Published By
------------- | ------------- | ------------- | ------------- | ------------- | -------------
[Piano](https://github.com/soixantecircuits/piano) | Desktop browser keyboard for touch screens — Edit | | | ![Compatibility](https://img.shields.io/badge/cover-chrome-orange.svg) | ![Author](https://img.shields.io/badge/author-no-red.svg)

Name | Description | npm command | Trend | Compatibility | Published By
------------- | ------------- | ------------- | ------------- | ------------- | -------------
[SerialPort2](https://github.com/joeferner/node-serialport2) | node.js serial port driver | npm install serialport2 | | ![Compatibility](https://img.shields.io/badge/cover-both-green.svg) | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)


Name | Description | npm command | Trend | Compatibility | Published By
------------- | ------------- | ------------- | ------------- | ------------- | -------------
[USB](https://github.com/nonolith/node-usb) | Improved USB library for NodeJS | npm install usb | | ![Compatibility](https://img.shields.io/badge/cover-both-green.svg) | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)

Name | Description | npm command | Trend | Compatibility | Published By
------------- | ------------- | ------------- | ------------- | ------------- | -------------
[Keyboard](https://github.com/Benvie/Keyboard) | Keyboard as an object in the DOM | npm install keyboard| | ![Compatibility](https://img.shields.io/badge/cover-both-green.svg) | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)

## Camera
Name | Description | npm command | Trend | Compatibility | Published By
------------- | ------------- | ------------- | ------------- | ------------- | -------------
[WebcamJS](https://github.com/jhuckaby/webcamjs) | HTML5 Webcam Image Capture Library with Flash Fallback | npm install webcamjs | | ![Compatibility](https://img.shields.io/badge/cover-both-green.svg) | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)

## Signal processing
Name | Description | npm command | Trend | Compatibility | Published By
------------- | ------------- | ------------- | ------------- | ------------- | -------------
[Clmtrackr](https://github.com/auduno/clmtrackr) | Javascript library for precise tracking of facial features via Constrained Local Models | | | ![Compatibility](https://img.shields.io/badge/cover-chrome-orange.svg) | ![Author](https://img.shields.io/badge/author-no-brightgreen.svg)


Name | Description | npm command | Trend | Compatibility | Published By
------------- | ------------- | ------------- | ------------- | ------------- | -------------
[Jsfeat](https://github.com/inspirit/jsfeat) | JavaScript Computer Vision library | | | ![Compatibility](https://img.shields.io/badge/cover-chrome-orange.svg) | ![Author](https://img.shields.io/badge/author-no-red.svg)

## Tooling
Name | Description | npm command | Trend | Compatibility | Published By
------------- | ------------- | ------------- | ------------- | ------------- | -------------
[Idle.js](https://github.com/soixantecircuits/Idle.js) | Script to create handlers for onIdle onActive onHidden onShow statuses, compatible with `<script>` tag and webpack | npm install idle-js | | ![Compatibility](https://img.shields.io/badge/cover-both-green.svg) | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)

Name | Description | npm command | Trend | Compatibility | Published By
------------- | ------------- | ------------- | ------------- | ------------- | -------------
[StringJS](http://www.stringjs.com/) | JavaScript library for the browser or for Node.js that provides extra String methods | `npm install string` | | ![Compatibility](https://img.shields.io/badge/cover-both-green.svg) | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)

Name | Description | npm command | Trend | Compatibility | Published By
------------- | ------------- | ------------- | ------------- | ------------- | -------------
[Offline](https://github.com/hubspot/offline) | Automatically display online/offline indication to your users |  | | ![Compatibility](https://img.shields.io/badge/cover-chrome-orange.svg) | ![Author](https://img.shields.io/badge/author-no-brightgreen.svg)

Name | Description | npm command | Trend | Compatibility | Published By
------------- | ------------- | ------------- | ------------- | ------------- | -------------
[PerfectScroll](https://noraesae.github.io/perfect-scrollbar/) | minimalistic scrollbar plugin working with jQuery or vanilla JavaScript as well. | npm i perfect-scrollbar | | ![Compatibility](https://img.shields.io/badge/cover-both-green.svg)  | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)

Name | Description | npm command | Trend | Compatibility | Published By
------------- | ------------- | ------------- | ------------- | ------------- | -------------
[Moment](https://github.com/moment/moment) | Parse, validate, manipulate, and display dates in javascript | npm install moment | | ![Compatibility](https://img.shields.io/badge/cover-both-green.svg)  | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)

Name | Description | npm command | Trend | Compatibility | Published By
------------- | ------------- | ------------- | ------------- | ------------- | -------------
[Signature_pad](https://github.com/szimek/signature_pad) | HTML5 canvas based smooth signature drawing | npm install signature_pad | | ![Compatibility](https://img.shields.io/badge/cover-both-green.svg)  | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)

Name | Description | npm command | Trend | Compatibility | Published By
------------- | ------------- | ------------- | ------------- | ------------- | -------------
[Dat-Gui](https://code.google.com/archive/p/dat-gui/) | A lightweight graphical user interface for changing variables in JavaScript | https://www.npmjs.com/package/dat-gui| | ![Compatibility](https://img.shields.io/badge/cover-both-green.svg)  | ![Author](https://img.shields.io/badge/author-no-red.svg)

## Pdf
Name | Description | npm command | Trend | Compatibility | Published By
------------- | ------------- | ------------- | ------------- | ------------- | -------------
[Pdfmake](https://github.com/bpampuch/pdfmake) | A lightweight graphical user interface for changing variables in JavaScript | npm install pdfmake | | ![Compatibility](https://img.shields.io/badge/cover-both-green.svg)  | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)

Name | Description | npm command | Trend | Compatibility | Published By
------------- | ------------- | ------------- | ------------- | ------------- | -------------
[Vue.js](https://github.com/vuejs/vue) | Simple, Fast &amp; Composable MVVM for building interactive interfaces | npm install vue | | ![Compatibility](https://img.shields.io/badge/cover-both-green.svg)  | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)

Name | Description | npm command | Trend | Compatibility | Published By
------------- | ------------- | ------------- | ------------- | ------------- | -------------
[React](https://github.com/facebook/react) | A declarative, efficient, and flexible JavaScript library for building user interfaces. | npm install react | | ![Compatibility](https://img.shields.io/badge/cover-both-green.svg)  | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)

## Perf
Name | Description | npm command | Trend | Compatibility | Published By
------------- | ------------- | ------------- | ------------- | ------------- | -------------
[Rstats.js](https://github.com/lmacsen/rstats) | rStats aims to provide a way of measuring and visualizing performance of your code, mainly in apps based on an update loop, like games or interactive experiences. | npm install rstats.js | | ![Compatibility](https://img.shields.io/badge/cover-both-green.svg)  | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)

Name | Description | npm command | Trend | Compatibility | Published By
------------- | ------------- | ------------- | ------------- | ------------- | -------------
[Stats.js](https://github.com/mrdoob/stats.js) | JavaScript Performance Monitor | npm install stats.js | | ![Compatibility](https://img.shields.io/badge/cover-both-green.svg)  | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)

## Tracking
Name | Description | npm command | Trend | Compatibility | Published By
------------- | ------------- | ------------- | ------------- | ------------- | -------------
[Vue.js](https://github.com/vuejs/vue) | Simple, Fast &amp; Composable MVVM for building interactive interfaces | npm install vue | | ![Compatibility](https://img.shields.io/badge/cover-both-green.svg)  | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)

Name | Description | npm command | Trend | Compatibility | Published By
------------- | ------------- | ------------- | ------------- | ------------- | -------------
[Off](https://github.com/soixantecircuits/off) | Allow to track clicks and touchend on a webapp | | | ![Compatibility](https://img.shields.io/badge/cover-chrome-orange.svg)  | ![Author](https://img.shields.io/badge/author-no-red.svg)

Name | Description | npm command | Trend | Compatibility | Published By
------------- | ------------- | ------------- | ------------- | ------------- | -------------
[Amplitude](https://github.com/crookedneighbor/amplitude) | A node wrapper for Amplitude analytics | npm install amplitude | | ![Compatibility](https://img.shields.io/badge/cover-node-yellow.svg)  | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)

## Social network
Name | Description | npm command | Trend | Compatibility | Published By
------------- | ------------- | ------------- | ------------- | ------------- | -------------
[Amplitude](https://github.com/crookedneighbor/amplitude) | A node wrapper for Amplitude analytics | npm install amplitude | | ![Compatibility](https://img.shields.io/badge/cover-node-yellow.svg)  | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)

Name | Description | npm command | Trend | Compatibility | Published By
------------- | ------------- | ------------- | ------------- | ------------- | -------------
[Twit](https://github.com/ttezel/twit) | Twitter API client for node (REST &amp; Streaming) | npm install twit | | ![Compatibility](https://img.shields.io/badge/cover-node-yellow.svg)  | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)

Name | Description | npm command | Trend | Compatibility | Published By
------------- | ------------- | ------------- | ------------- | ------------- | -------------
[Instagram-node](https://github.com/totemstech/instagram-node) | NodeJS driver for the instagram API | npm install instagram-node | | ![Compatibility](https://img.shields.io/badge/cover-node-yellow.svg)  | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)

Name | Description | npm command | Trend | Compatibility | Published By
------------- | ------------- | ------------- | ------------- | ------------- | -------------
[Fb](https://github.com/node-facebook/facebook-node-sdk) | With facebook-node-sdk you can now easily write the same code and share between your server (nodejs) and the client (Facebook Javascript SDK) | npm install fb | | ![Compatibility](https://img.shields.io/badge/cover-both-green.svg)  | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)
