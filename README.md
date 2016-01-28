# Awesome app

This document list all the javascript libs used at [Soixante circuits](http://soixantecircuits.fr). They are compatible with Webpack and run in the browser and / or node only.

There are tons of libs out there. You certainly not need them all. For sure it's a pain to test, check, and push the limit of each of them when you start a new project. To ease the process of development, we decided to stick to some of the libs we really enjoyed to use. They are selected because they did not fail our test and have been use in website or in application for clients and for internal projects. All of them are under the **MIT licence**.
Every month we test the ease of use, the learning curve, the maintenance of these libs. We won't reinvent the wheel so lets keep improving and focus our energy on the libs that already exist.
This list respects the [Single Responsibility Principle](https://en.wikipedia.org/wiki/Single_responsibility_principle). This means each of them do something chirurgically and do it well. When you build your project you will not need them all :)

[<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Hexagonal.svg/295px-Hexagonal.svg.png" align="right" width=100>](https://github.com/soixantecircuits/neodymium) This list is maintened continuously and serves as a startup prompt for [Neodymium Generator](https://github.com/soixantecircuits/neodymium).
**Neodymium** allows to built interactive applications fast and without any pain. It brings Webpack and tested set of libs out of the box, tested in production ready projects.

Let's build something great ! ⚒

## Routing
Name | Description | install | Trend | Compatibility | Authored
------------- | ------------- | ------------- | ------------- | ------------- | -------------
<a href="https://millermedeiros.github.io/crossroads.js/" target="_blank">Crossroads</a> | It parses a string input and decides which action should | `npm i --save crossroads` | [<img src="https://img.shields.io/npm/dm/crossroads.svg" align="right">](https://www.npmjs.com/package/crossroads) | ![Compatibility](https://img.shields.io/badge/cover-both-green.svg)  | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)
<a href="https://github.com/millermedeiros/hasher/" target="_blank">Hasher</a> | Set of functions to control browser history | `npm i --save hasher` | [<img src="https://img.shields.io/npm/dm/hasher.svg" align="right">](https://www.npmjs.com/package/hasher) | ![Compatibility](https://img.shields.io/badge/cover-both-green.svg) | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg) 

## Communication
Name | Description | install | Trend | Compatibility | Authored
------------- | ------------- | ------------- | ------------- | ------------- | -------------
<a href="https://millermedeiros.github.io/signals.js/" target="_blank">Signals.js</a> | similar to an Event Emitter/Dispatcher or a Pub/Sub system | `npm i --save signals` | [<img src="https://img.shields.io/npm/dm/signals.svg" align="right">](https://www.npmjs.com/package/signals) | ![Compatibility](https://img.shields.io/badge/cover-both-green.svg)  | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg) 
<a href="https://github.com/socketio/socket.io/" target="_blank">Socket.io/server</a> | Socket.IO enables real-time bidirectional event-based communication | `npm i --save socket.io` | [<img src="https://img.shields.io/npm/dm/socket.io.svg" align="right">](https://www.npmjs.com/package/socket.io) | ![Compatibility](https://img.shields.io/badge/cover-both-green.svg)  | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg) 
<a href="https://github.com/socketio/socket.io/" target="_blank">Socket.io/client</a> | Socket.IO enables real-time bidirectional event-based communication | `npm i --save socket.io-client` | [<img src="https://img.shields.io/npm/dm/socket.io.svg" align="right">](https://www.npmjs.com/package/socket.io) | ![Compatibility](https://img.shields.io/badge/cover-both-green.svg)  | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg) 
<a href="https://github.com/soixantecircuits/spacebro" target="_blank">Spacebro</a> | Server for broadcasting socket.io service | `npm i --save spacebro` | [<img src="https://img.shields.io/npm/dm/spacebro.svg" align="right">](https://www.npmjs.com/package/spacebro) | ![Compatibility](https://img.shields.io/badge/cover-node-yellow.svg)  | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg) 
<a href="https://github.com/soixantecircuits/spacebro-client" target="_blank">Spacebro client</a> | Connect thru socket.io with ZeroConf | `npm i --save spacebro-client` | [<img src="https://img.shields.io/npm/dm/spacebro-client.svg" align="right">](https://www.npmjs.com/package/spacebro-client) |![Compatibility](https://img.shields.io/badge/cover-node-yellow.svg)  | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg) 

## Request
Name | Description | install | Trend | Compatibility | Authored
------------- | ------------- | ------------- | ------------- | ------------- | -------------
<a href="https://github.com/visionmedia/superagent" target="_blank">Superagent</a> | small progressive client-side HTTP request library, and Node.js module with the same API, sporting many high-level HTTP client features | `npm install superagent` | | ![Compatibility](https://img.shields.io/badge/cover-both-green.svg) | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)

## Caching
Name | Description | install | Trend | Compatibility | Authored
------------- | ------------- | ------------- | ------------- | ------------- | -------------
<a href="https://github.com/soixantecircuits/bifrost" target="_blank">Bitfrost</a> | Bifrost cache and queue your POST request when internet is down. It will try to forward your query to the desired endpoint, if it fail it will save the POST data and try to update them periodically. It will forward the response as it is. | | | ![Compatibility](https://img.shields.io/badge/cover-node-yellow.svg) | ![Author](https://img.shields.io/badge/author-unidentified-lightgrey.svg)
<a href="https://github.com/jpodwys/superagent-cache" target="_blank">Superagent-cache</a> | Superagent with built-in, customizable caching | npm i superagent-cache | | ![Compatibility](https://img.shields.io/badge/cover-both-brightgreen.svg) | ![Author](https://img.shields.io/badge/author-yes-green.svg)

## Persistent data
Name | Description | install | Trend | Compatibility | Authored
------------- | ------------- | ------------- | ------------- | ------------- | -------------
<a href="https://developer.mozilla.org/en/docs/Web/API/Window/localStorage" target="_blank">Native LocalStorage</a> | | [RTFM](https://en.wikipedia.org/wiki/RTFM) | | ![Compatibility](https://img.shields.io/badge/cover-chrome-orange.svg) | ![Author](https://img.shields.io/badge/author-unidentified-lightgrey.svg)
<a href="https://github.com/brianleroux/lawnchair" target="_blank">Lawnchair</a> | simple json storage | `npm install lawnchair` | | ![Compatibility](https://img.shields.io/badge/cover-both-green.svg) | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)
<a href="https://github.com/Ivshti/linvodb3" target="_blank">Linvodb3</a> | Model-oriented embedded database, inspired by Mongoose &amp; MongoDB, over LevelUP | `npm install linvodb3` | | ![Compatibility](https://img.shields.io/badge/cover-both-green.svg) | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)

## State machine
Name | Description | install | Trend | Compatibility | Authored
------------- | ------------- | ------------- | ------------- | ------------- | -------------
<a href="http://machina-js.org/" target="_blank">Machina</a> | A library for creating powerful and flexible finite state machines | `npm install machina` | | ![Compatibility](https://img.shields.io/badge/cover-both-green.svg) | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)

## Animation
Name | Description | install | Trend | Compatibility | Authored
------------- | ------------- | ------------- | ------------- | ------------- | -------------
<a href="https://github.com/greensock/GreenSock-JS" target="_blank">GSAP</a> | Think of GSAP as the Swiss Army Knife of web animation...but better | `npm install gsap` | | ![Compatibility](https://img.shields.io/badge/cover-both-green.svg) | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)
<a href="https://github.com/tweenjs/tween.js/" target="_blank">Tween</a> | Super simple, fast and easy to use tweening engine | `npm install tween.js` | | ![Compatibility](https://img.shields.io/badge/cover-both-green.svg) | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)
<a href="https://github.com/dan-silver/ElementTransitions" target="_blank">elementTransitions</a> | Simple transitions for web pages | | | ![Compatibility](https://img.shields.io/badge/cover-chrome-orange.svg) | ![Author](https://img.shields.io/badge/author-unidentified-lightgrey.svg)

## Image manipulation
Name | Description | install | Trend | Compatibility | Authored
------------- | ------------- | ------------- | ------------- | ------------- | -------------
<a href="https://github.com/brunosimon/burno.js/blob/dev/src/tools/resizer.class.js" target="_blank">Resizer(burno.js)</a> | Resize elements inside containers according to many possible options | | | ![Compatibility](https://img.shields.io/badge/cover-chrome-orange.svg) | ![Author](https://img.shields.io/badge/author-unidentified-lightgrey.svg)
<a href="https://gist.github.com/thejefflarson/914435" target="_blank">Zooming</a> | Zooms | | | ![Compatibility](https://img.shields.io/badge/cover-chrome-orange.svg) | ![Author](https://img.shields.io/badge/author-unidentified-lightgrey.svg)
<a href="https://github.com/leeoniya/RgbQuant.js/tree/master" target="_blank">RgbQuant</a> | color quantization lib | `npm install rgbquant` | | ![Compatibility](https://img.shields.io/badge/cover-both-green.svg) | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)
<a href="https://github.com/blueimp/JavaScript-Load-Image" target="_blank">Javascript-Load-Image</a> | JavaScript Load Image is a library to load images provided as File or Blob objects or via URL | npm i blueimp-load-image | | ![Compatibility](https://img.shields.io/badge/cover-both-green.svg) | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)
<a href="https://github.com/gestixi/image-scale" target="_blank">Image-scale</a> needs to be made JQueryless | Scale images to fit or fill any target container via two simple properties: scale and align. | `npm install image-scale` | | ![Compatibility](https://img.shields.io/badge/cover-both-green.svg)  | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg) 
<a href="https://github.com/imulus/retinajs" target="_blank">RetinaJS</a> | open source script that serves high-resolution images to devices with retina displays | `npm install retina.js` | | ![Compatibility](https://img.shields.io/badge/cover-both-green.svg) | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)

## Video playback
Name | Description | install | Trend | Compatibility | Authored
------------- | ------------- | ------------- | ------------- | ------------- | -------------
<a href="https://github.com/videojs/video.js" target="_blank">VideoJS</a> | An HTML5 and Flash video player with a common API and skin for both | `npm install videojs` | | ![Compatibility](https://img.shields.io/badge/cover-both-green.svg) | ![Author](https://img.shields.io/badge/author-unidentified-lightgrey.svg)

## Slider
Name | Description | install | Trend | Compatibility | Authored
------------- | ------------- | ------------- | ------------- | ------------- | -------------
<a href="https://www.npmjs.com/package/lory.js" target="_blank">Lory</a> | Touch enabled minimalistic slider written in vanilla JavaScript | `npm install lory.js` | | ![Compatibility](https://img.shields.io/badge/cover-both-green.svg) | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)
<a href="https://github.com/dimsemenov/PhotoSwipe" target="_blank">PhotoSwipe</a> | JavaScript image gallery for mobile and desktop, modular, framework independent | `npm install photoswipe` | | ![Compatibility](https://img.shields.io/badge/cover-both-green.svg) | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)
<a href="https://github.com/nolimits4web/swiper/" target="_blank">Swiper</a> | Most modern mobile touch slider with hardware accelerated transitions | `npm install swiper` | | ![Compatibility](https://img.shields.io/badge/cover-both-green.svg) | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)

## Sprite animation
Name | Description | install | Trend | Compatibility | Authored
------------- | ------------- | ------------- | ------------- | ------------- | -------------
<a href="https://github.com/darsain/motio" target="_blank">Motio</a> | Small JavaScript library for sprite based animations and panning | | | ![Compatibility](https://img.shields.io/badge/cover-chrome-orange.svg) | ![Author](https://img.shields.io/badge/author-unidentified-lightgrey.svg)

## Rendering
Name | Description | install | Trend | Compatibility | Authored
------------- | ------------- | ------------- | ------------- | ------------- | -------------
<a href="https://github.com/mrdoob/three.js/" target="_blank">Three</a> | JavaScript 3D library | `npm install three` | | ![Compatibility](https://img.shields.io/badge/cover-both-green.svg) | ![Author](https://img.shields.io/badge/author-no-red.svg)
<a href="https://github.com/pixijs/pixi.js" target="_blank">Pixi</a> | Pixi.js is a fast lightweight 2D library that works across all devices | `npm install pixi.js` | | ![Compatibility](https://img.shields.io/badge/cover-both-green.svg) | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)

## Effects
Name | Description | install | Trend | Compatibility | Authored
------------- | ------------- | ------------- | ------------- | ------------- | -------------
<a href="https://github.com/brianchirls/Seriously.js" target="_blank">Seriously</a> |  A real-time, node-based video effects compositor for the web built with HTML5, Javascript and WebGL |  | | ![Compatibility](https://img.shields.io/badge/cover-chrome-orange.svg) | ![Author](https://img.shields.io/badge/author-unidentified-lightgrey.svg)
<a href="https://github.com/flozz/StackBlur" target="_blank">StackBlur</a> | Fast and almost Gaussian blur | `npm i stackblur-canvas` | | ![Compatibility](https://img.shields.io/badge/cover-both-green.svg) | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)

## Recording
Name | Description | install | Trend | Compatibility | Authored
------------- | ------------- | ------------- | ------------- | ------------- | -------------
<a href="https://github.com/niklasvh/html2canvas" target="_blank">Html2canvas</a> | The script allows you to take "screenshots" of webpages or parts of it, directly on the users browser | `npm install html2canvas` | | ![Compatibility](https://img.shields.io/badge/cover-both-green.svg) | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)
<a href="https://github.com/sole/Animated_GIF" target="_blank">Animated_gif</a> | Javascript library for creating animated GIFs | `npm install animated_gif` | | ![Compatibility](https://img.shields.io/badge/cover-both-green.svg) | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)
<a href="https://github.com/spite/ccapture.js/" target="_blank">CCapture</a> | A library to capture canvas-based animations at a fixed framerate | | | ![Compatibility](https://img.shields.io/badge/cover-chrome-orange.svg) | ![Author](https://img.shields.io/badge/author-unidentified-lightgrey.svg)
<a href="https://github.com/collab-project/videojs-record" target="_blank">Videojs-record</a> | video.js plugin for recording audio/video/image files | `npm install videojs-record` | | ![Compatibility](https://img.shields.io/badge/cover-both-green.svg) | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)
<a href="http://jnordberg.github.io/gif.js/" target="_blank">Gif.js</a> | JavaScript GIF encoder that runs in your browser | `npm install gif.js` | | ![Compatibility](https://img.shields.io/badge/cover-both-green.svg) | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)

## Inputs
Name | Description | install | Trend | Compatibility | Authored
------------- | ------------- | ------------- | ------------- | ------------- | -------------
<a href="https://github.com/hammerjs/hammer.js" target="_blank">Hammer</a> | A javascript library for multi-touch gestures :// You can touch this | `npm install hammerjs` | | ![Compatibility](https://img.shields.io/badge/cover-both-green.svg) | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)
<a href="https://github.com/soixantecircuits/piano" target="_blank">Piano</a> | Virtual keyboard for touch devices | | | ![Compatibility](https://img.shields.io/badge/cover-chrome-orange.svg) | ![Author](https://img.shields.io/badge/author-unidentified-lightgrey.svg)
<a href="https://github.com/joeferner/node-serialport2" target="_blank">SerialPort2</a> | node.js serial port driver | `npm install serialport2` | | ![Compatibility](https://img.shields.io/badge/cover-both-green.svg) | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)
<a href="https://github.com/nonolith/node-usb" target="_blank">USB</a>[USB](https://github.com/nonolith/node-usb) | Improved USB library for NodeJS | `npm install usb` | | ![Compatibility](https://img.shields.io/badge/cover-both-green.svg) | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)
<a href="https://github.com/Benvie/Keyboard" target="_blank">Keyboard</a> | Keyboard as an object in the DOM | `npm install keyboard` | | ![Compatibility](https://img.shields.io/badge/cover-both-green.svg) | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)
<a href="https://namuol.github.io/cheet.js/" target="_blank">Cheet</a> | easy easter eggs (konami code, etc) for your site | 'npm install cheet.js' | | ![Compatibility](https://img.shields.io/badge/cover-both-green.svg)  | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)
<a href="https://craig.is/killing/mice" target="_blank">Mousetrap</a> | Simple library for handling keyboard shortcuts | 'npm install mousetrap' | | ![Compatibility](https://img.shields.io/badge/cover-both-green.svg) | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)
<a href="http://monospaced.github.io/hamster.js/" target="_blank">Hamsterjs</a> | standalone javascript library for cross-browser mouse wheel support | `npm install hamsterjs` | | ![Compatibility](https://img.shields.io/badge/cover-both-green.svg)  | ![Author](https://img.shields.io/badge/author-no-red.svg)

## Camera
Name | Description | install | Trend | Compatibility | Authored
------------- | ------------- | ------------- | ------------- | ------------- | -------------
<a href="https://github.com/jhuckaby/webcamjs" target="_blank">WebcamJS</a> | HTML5 Webcam Image Capture Library with Flash Fallback | `npm install webcamjs` | | ![Compatibility](https://img.shields.io/badge/cover-both-green.svg) | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)

## Signal processing
Name | Description | install | Trend | Compatibility | Authored
------------- | ------------- | ------------- | ------------- | ------------- | -------------
<a href="https://github.com/auduno/clmtrackr" target="_blank">Clmtrackr</a> | Javascript library for precise tracking of facial features via Constrained Local Models | | | ![Compatibility](https://img.shields.io/badge/cover-chrome-orange.svg) | ![Author](https://img.shields.io/badge/author-unidentified-lightgrey.svg)
<a href="https://github.com/inspirit/jsfeat" target="_blank">Jsfeat</a> | JavaScript Computer Vision library | | | ![Compatibility](https://img.shields.io/badge/cover-chrome-orange.svg) | ![Author](https://img.shields.io/badge/author-unidentified-lightgrey.svg)

## Tooling
Name | Description | install | Trend | Compatibility | Authored
------------- | ------------- | ------------- | ------------- | ------------- | -------------
<a href="https://github.com/soixantecircuits/Idle.js" target="_blank">Idle.js</a> | Script to create handlers for onIdle onActive onHidden onShow statuses, compatible with `<script>` tag and webpack | `npm install idle-js` | | ![Compatibility](https://img.shields.io/badge/cover-both-green.svg) | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)
<a href="http://www.stringjs.com/" target="_blank">StringJS</a> | JavaScript library for the browser or for Node.js that provides extra String methods | `npm install string` | | ![Compatibility](https://img.shields.io/badge/cover-both-green.svg) | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)
<a href="https://github.com/hubspot/offline" target="_blank">Offline</a> | Automatically display online/offline indication to your users |  | | ![Compatibility](https://img.shields.io/badge/cover-chrome-orange.svg) | ![Author](https://img.shields.io/badge/author-unidentified-lightgrey.svg)
<a href="https://noraesae.github.io/perfect-scrollbar/" target="_blank">PerfectScroll</a> | minimalistic scrollbar plugin working with jQuery or vanilla JavaScript as well. | `npm i perfect-scrollbar` | | ![Compatibility](https://img.shields.io/badge/cover-both-green.svg)  | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)
<a href="https://github.com/moment/moment" target="_blank">Moment</a> | Parse, validate, manipulate, and display dates in javascript | `npm install moment` | | ![Compatibility](https://img.shields.io/badge/cover-both-green.svg)  | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)
<a href="https://github.com/szimek/signature_pad" target="_blank">Signature_pad</a> | HTML5 canvas based smooth signature drawing | `npm install signature_pad` | | ![Compatibility](https://img.shields.io/badge/cover-both-green.svg)  | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)
<a href="https://code.google.com/archive/p/dat-gui/" target="_blank">Dat-Gui</a> | A lightweight graphical user interface for changing variables in JavaScript | `npm install dat-gui` | | ![Compatibility](https://img.shields.io/badge/cover-both-green.svg)  | ![Author](https://img.shields.io/badge/author-no-red.svg)
<a href="http://wicky.nillia.ms/enquire.js" target="_blank">Enquire</a> | a lightweight, pure JavaScript library for responding to CSS media queries | `npm install enquire.js` |  |![Compatibility](https://img.shields.io/badge/cover-both-green.svg)  | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg) 
<a href="https://modernizr.com/docs" target="_blank">Modernizr</a> | Automatically detects the availability of next-generation web technologies in your user's browsers | `npm install -g modernizr` | | ![Compatibility](https://img.shields.io/badge/cover-both-green.svg)  | ![Author](https://img.shields.io/badge/author-unidentified-lightgrey.svg)
<a href="http://verge.airve.com/" target="_blank">Verge</a> | compact set of cross-browser viewport utilities written in native JavaScript | `npm install verge` | | ![Compatibility](https://img.shields.io/badge/cover-both-green.svg) | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)
<a href="http://sizzlejs.com/" target="_blank">Sizzle</a> | A pure-JavaScript, bottom-up CSS selector engine designed to be easily dropped in to a host library |  `npm install sizzle` (might not be same team) (to test if automatic css prefixing) | | ![Compatibility](https://img.shields.io/badge/cover-both-green.svg) | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)

## Pdf
Name | Description | install | Trend | Compatibility | Authored
------------- | ------------- | ------------- | ------------- | ------------- | -------------
<a href="https://github.com/bpampuch/pdfmake" target="_blank">Pdfmake</a> | A lightweight graphical user interface for changing variables in JavaScript | `npm install pdfmake` | | ![Compatibility](https://img.shields.io/badge/cover-both-green.svg)  | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)
<a href="https://github.com/vuejs/vue" target="_blank">Vue.js</a> | Simple, Fast &amp; Composable MVVM for building interactive interfaces | `npm install vue` | | ![Compatibility](https://img.shields.io/badge/cover-both-green.svg)  | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)
[React](https://github.com/facebook/react) | A declarative, efficient, and flexible JavaScript library for building user interfaces. | `npm install react` | | ![Compatibility](https://img.shields.io/badge/cover-both-green.svg)  | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)

## Perf
Name | Description | install | Trend | Compatibility | Authored
------------- | ------------- | ------------- | ------------- | ------------- | -------------
<a href="https://github.com/lmacsen/rstats" target="_blank">Rstats.js</a> | rStats aims to provide a way of measuring and visualizing performance of your code, mainly in apps based on an update loop, like games or interactive experiences. | `npm install rstats.js` | | ![Compatibility](https://img.shields.io/badge/cover-both-green.svg)  | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)
<a href="https://github.com/mrdoob/stats.js" target="_blank">Stats.js</a> | JavaScript Performance Monitor | `npm install stats.js` | | ![Compatibility](https://img.shields.io/badge/cover-both-green.svg)  | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)

## Tracking
Name | Description | install | Trend | Compatibility | Authored
------------- | ------------- | ------------- | ------------- | ------------- | -------------
<a href="https://github.com/vuejs/vue" target="_blank">Vue.js</a> | Simple, Fast &amp; Composable MVVM for building interactive interfaces | `npm install vue` | | ![Compatibility](https://img.shields.io/badge/cover-both-green.svg)  | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)
<a href="https://github.com/soixantecircuits/off" target="_blank">Off</a>[Off](https://github.com/soixantecircuits/off) | Allow to track clicks and touchend on a webapp | | | ![Compatibility](https://img.shields.io/badge/cover-chrome-orange.svg)  | ![Author](https://img.shields.io/badge/author-unidentified-lightgrey.svg)
<a href="https://github.com/crookedneighbor/amplitude" target="_blank">Amplitude</a> | A node wrapper for Amplitude analytics | `npm install amplitude` | | ![Compatibility](https://img.shields.io/badge/cover-node-yellow.svg)  | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)
<a href="https://github.com/andjosh/gatrack.js" target="_blank">GATracks</a> | Easily track user events with Google Analytics | `npm install gatrack` | | ![Compatibility](https://img.shields.io/badge/cover-both-green.svg)  | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg) 

## Social network
Name | Description | install | Trend | Compatibility | Authored
------------- | ------------- | ------------- | ------------- | ------------- | -------------
<a href="https://github.com/ttezel/twit" target="_blank">Twit</a> | Twitter API client for node (REST &amp; Streaming) | `npm install twit` | | ![Compatibility](https://img.shields.io/badge/cover-node-yellow.svg)  | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)
<a href="https://github.com/totemstech/instagram-node" target="_blank">Instagram-node</a>[Instagram-node](https://github.com/totemstech/instagram-node) | NodeJS driver for the instagram API | `npm install instagram-node` | | ![Compatibility](https://img.shields.io/badge/cover-node-yellow.svg)  | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)
<a href="https://github.com/node-facebook/facebook-node-sdk" target="_blank">Fb</a> | With facebook-node-sdk you can now easily write the same code and share between your server (nodejs) and the client (Facebook Javascript SDK) | `npm install fb` | | ![Compatibility](https://img.shields.io/badge/cover-both-green.svg)  | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)
