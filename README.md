# Awesome app

This document list all the javascript libs used at [Soixante circuits](http://soixantecircuits.fr). They are compatible with Webpack and run in the browser and / or node only.

So far **80** libs.

There are tons of libs out there. You certainly not need them all. For sure it's a pain to test, check, and push the limit of each of them when you start a new project. To ease the process of development, we decided to stick to some of the libs we really enjoyed to use. They are selected because they did not fail our test and have been use in website or in application for clients and for internal projects. All of them are under the **MIT licence**.
Every month we test the ease of use, the learning curve, the maintenance of these libs. We won't reinvent the wheel so lets keep improving and focus our energy on the libs that already exist.
This list respects the [Single Responsibility Principle](https://en.wikipedia.org/wiki/Single_responsibility_principle). This means each of them do something chirurgically and do it well. When you build your project you will not need them all :)

[<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Hexagonal.svg/295px-Hexagonal.svg.png" align="right" width=100>](https://github.com/soixantecircuits/neodymium) This list is maintened continuously and serves as a startup prompt for [Neodymium Generator](https://github.com/soixantecircuits/neodymium).
**Neodymium** allows to built interactive applications fast and without any pain. It brings Webpack and tested set of libs out of the box, tested in production ready projects.

Let's build something great ! ⚒

## Routing
Name | Description | install | Trend | Compat | Authored
------------- | ------------- | ------------- | ------------- | ------------- | -------------
<a href="https://millermedeiros.github.io/crossroads.js/" target="_blank">Crossroads</a> | It parses a string input and decides which action should | ` npm i -S crossroads` | [<img src="https://img.shields.io/npm/dm/crossroads.svg" align="right">](https://www.npmjs.com/package/crossroads) | ![Compat](https://img.shields.io/badge/cover-both-green.svg)  | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)
<a href="https://github.com/millermedeiros/hasher/" target="_blank">Hasher</a> | Set of functions to control browser history | ` npm i -S hasher` | [<img src="https://img.shields.io/npm/dm/hasher.svg" align="right">](https://www.npmjs.com/package/hasher) | ![Compat](https://img.shields.io/badge/cover-both-green.svg) | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)

## Communication
Name | Description | install | Trend | Compat | Authored
------------- | ------------- | ------------- | ------------- | ------------- | -------------
<a href="https://millermedeiros.github.io/js-signals/" target="_blank">Signals.js</a> | similar to an Event Emitter/Dispatcher or a Pub/Sub system | ` npm i -S signals` | [<img src="https://img.shields.io/npm/dm/signals.svg" align="right">](https://www.npmjs.com/package/signals) | ![Compat](https://img.shields.io/badge/cover-both-green.svg)  | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)
<a href="https://github.com/socketio/socket.io/" target="_blank">Socket.io/server</a> | Socket.IO enables real-time bidirectional event-based communication | ` npm i -S socket.io` | [<img src="https://img.shields.io/npm/dm/socket.io.svg" align="right">](https://www.npmjs.com/package/socket.io) | ![Compat](https://img.shields.io/badge/cover-both-green.svg)  | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)
<a href="https://github.com/socketio/socket.io/" target="_blank">Socket.io/client</a> | Socket.IO enables real-time bidirectional event-based communication | ` npm i -S socket.io-client` | [<img src="https://img.shields.io/npm/dm/socket.io.svg" align="right">](https://www.npmjs.com/package/socket.io) | ![Compat](https://img.shields.io/badge/cover-both-green.svg)  | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)
<a href="https://github.com/soixantecircuits/spacebro" target="_blank">Spacebro</a> | Server for broadcasting socket.io service | ` npm i -S spacebro` | [<img src="https://img.shields.io/npm/dm/spacebro.svg" align="right">](https://www.npmjs.com/package/spacebro) | ![Compat](https://img.shields.io/badge/cover-node-yellow.svg)  | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)
<a href="https://github.com/soixantecircuits/spacebro-client" target="_blank">Spacebro client</a> | Connect thru socket.io with ZeroConf | ` npm i -S spacebro-client` | [<img src="https://img.shields.io/npm/dm/spacebro-client.svg" align="right">](https://www.npmjs.com/package/spacebro-client) |![Compat](https://img.shields.io/badge/cover-node-yellow.svg)  | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)

## Request
Name | Description | install | Trend | Compat | Authored
------------- | ------------- | ------------- | ------------- | ------------- | -------------
<a href="https://github.com/visionmedia/superagent" target="_blank">Superagent</a> | small progressive client-side HTTP request library, and Node.js module with the same API, sporting many high-level HTTP client features | `npm i -S superagent` | | ![Compat](https://img.shields.io/badge/cover-both-green.svg) | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)

## Caching
Name | Description | install | Trend | Compat | Authored
------------- | ------------- | ------------- | ------------- | ------------- | -------------
<a href="https://github.com/soixantecircuits/bifrost" target="_blank">Bitfrost</a> | Bifrost cache and queue your POST request when internet is down. It will try to forward your query to the desired endpoint, if it fail it will save the POST data and try to update them periodically. It will forward the response as it is. | | | ![Compat](https://img.shields.io/badge/cover-node-yellow.svg) | ![Author](https://img.shields.io/badge/author-unidentified-lightgrey.svg)
<a href="https://github.com/jpodwys/superagent-cache" target="_blank">Superagent-cache</a> | Superagent with built-in, customizable caching |  npm i -S superagent-cache` | | ![Compat](https://img.shields.io/badge/cover-both-brightgreen.svg) | ![Author](https://img.shields.io/badge/author-yes-green.svg)

## Persistent data
Name | Description | install | Trend | Compat | Authored
------------- | ------------- | ------------- | ------------- | ------------- | -------------
<a href="https://developer.mozilla.org/en/docs/Web/API/Window/localStorage" target="_blank">Native LocalStorage</a> | | [RTFM](https://en.wikipedia.org/wiki/RTFM) | | ![Compat](https://img.shields.io/badge/cover-chrome-orange.svg) | ![Author](https://img.shields.io/badge/author-unidentified-lightgrey.svg)
<a href="https://github.com/brianleroux/lawnchair" target="_blank">Lawnchair</a> | simple json storage | ` npm i -S lawnchair` | | ![Compat](https://img.shields.io/badge/cover-both-green.svg) | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)
<a href="https://github.com/Ivshti/linvodb3" target="_blank">Linvodb3</a> | Model-oriented embedded database, inspired by Mongoose &amp; MongoDB, over LevelUP | ` npm i -S linvodb3` | | ![Compat](https://img.shields.io/badge/cover-both-green.svg) | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)

## State machine
Name | Description | install | Trend | Compat | Authored
------------- | ------------- | ------------- | ------------- | ------------- | -------------
<a href="http://machina-js.org/" target="_blank">Machina</a> | A library for creating powerful and flexible finite state machines | ` npm i -S machina` | | ![Compat](https://img.shields.io/badge/cover-both-green.svg) | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)

## Animation
Name | Description | install | Trend | Compat | Authored
------------- | ------------- | ------------- | ------------- | ------------- | -------------
<a href="https://github.com/greensock/GreenSock-JS" target="_blank">GSAP</a> | Think of GSAP as the Swiss Army Knife of web animation...but better | `npm i -S gsap` | | ![Compat](https://img.shields.io/badge/cover-both-green.svg) | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)
<a href="https://github.com/tweenjs/tween.js/" target="_blank">Tween</a> | Super simple, fast and easy to use tweening engine | ` npm i -S tween.js` | | ![Compat](https://img.shields.io/badge/cover-both-green.svg) | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)
<a href="https://github.com/dan-silver/ElementTransitions" target="_blank">elementTransitions</a> | Simple transitions for web pages | | | ![Compat](https://img.shields.io/badge/cover-chrome-orange.svg) | ![Author](https://img.shields.io/badge/author-unidentified-lightgrey.svg)

## Image manipulation
Name | Description | install | Trend | Compat | Authored
------------- | ------------- | ------------- | ------------- | ------------- | -------------
<a href="http://github.com/exine/fabric-browserify" target="_blank">Fabric.js</a> | Play with the canvas | `npm i -S fabric-browserify` | [<img src="https://img.shields.io/npm/dm/fabric-browserify.svg" align="right">](https://www.npmjs.com/package/fabric-browserify) | ![Compat](https://img.shields.io/badge/cover-both-green.svg) | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)
<a href="https://github.com/brunosimon/burno.js/blob/dev/src/tools/resizer.class.js" target="_blank">Resizer(burno.js)</a> | Resize elements inside containers according to many possible options | | | ![Compat](https://img.shields.io/badge/cover-chrome-orange.svg) | ![Author](https://img.shields.io/badge/author-unidentified-lightgrey.svg)
<a href="https://gist.github.com/thejefflarson/914435" target="_blank">Zooming</a> | Zooms | | | ![Compat](https://img.shields.io/badge/cover-chrome-orange.svg) | ![Author](https://img.shields.io/badge/author-unidentified-lightgrey.svg)
<a href="https://github.com/leeoniya/RgbQuant.js/tree/master" target="_blank">RgbQuant</a> | color quantization lib | ` npm i -S rgbquant` | | ![Compat](https://img.shields.io/badge/cover-both-green.svg) | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)
<a href="https://github.com/blueimp/JavaScript-Load-Image" target="_blank">Javascript-Load-Image</a> | JavaScript Load Image is a library to load images provided as File or Blob objects or via URL |  npm i -S blueimp-load-image | | ![Compat](https://img.shields.io/badge/cover-both-green.svg) | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)
<a href="https://github.com/gestixi/image-scale" target="_blank">Image-scale</a> needs to be made JQueryless | Scale images to fit or fill any target container via two simple properties: scale and align. | ` npm i -S image-scale` | | ![Compat](https://img.shields.io/badge/cover-both-green.svg)  | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)
<a href="https://github.com/imulus/retinajs" target="_blank">RetinaJS</a> | open source script that serves high-resolution images to devices with retina displays | ` npm i -S retina.js` | | ![Compat](https://img.shields.io/badge/cover-both-green.svg) | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)

## Video playback
Name | Description | install | Trend | Compat | Authored
------------- | ------------- | ------------- | ------------- | ------------- | -------------
<a href="https://github.com/videojs/video.js" target="_blank">VideoJS</a> | An HTML5 and Flash video player with a common API and skin for both | ` npm i -S videojs` | | ![Compat](https://img.shields.io/badge/cover-both-green.svg) | ![Author](https://img.shields.io/badge/author-unidentified-lightgrey.svg)

## Audio playback
Name | Description | install | Trend | Compat | Authored
------------- | ------------- | ------------- | ------------- | ------------- | -------------
<a href="https://github.com/zohararad/audio5js" target="_blank">audio5</a> | Audio5js a library-agnostic, cross-browser Javascript API for HTML5 Audio, with a Flash fallback for either older browsers or modern browsers without MP3 playback support. | ` npm i -S audio5` | | ![Compat](https://img.shields.io/badge/cover-both-green.svg) | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)

## Slider
Name | Description | install | Trend | Compat | Authored
------------- | ------------- | ------------- | ------------- | ------------- | -------------
<a href="https://www.npmjs.com/package/lory.js" target="_blank">Lory</a> | Touch enabled minimalistic slider written in vanilla JavaScript | ` npm i -S lory.js` | | ![Compat](https://img.shields.io/badge/cover-both-green.svg) | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)
<a href="https://github.com/dimsemenov/PhotoSwipe" target="_blank">PhotoSwipe</a> | JavaScript image gallery for mobile and desktop, modular, framework independent | ` npm i -S photoswipe` | | ![Compat](https://img.shields.io/badge/cover-both-green.svg) | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)
<a href="https://github.com/nolimits4web/swiper/" target="_blank">Swiper</a> | Most modern mobile touch slider with hardware accelerated transitions | ` npm i -S swiper` | | ![Compat](https://img.shields.io/badge/cover-both-green.svg) | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)

## Sprite animation
Name | Description | install | Trend | Compat | Authored
------------- | ------------- | ------------- | ------------- | ------------- | -------------
<a href="https://github.com/darsain/motio" target="_blank">Motio</a> | Small JavaScript library for sprite based animations and panning | | | ![Compat](https://img.shields.io/badge/cover-chrome-orange.svg) | ![Author](https://img.shields.io/badge/author-unidentified-lightgrey.svg)

## Template engine
Name | Description | install | Trend | Compat | Authored
------------- | ------------- | ------------- | ------------- | ------------- | -------------
<a href="https://github.com/vuejs/vue" target="_blank">Vue.js</a> | Simple, Fast &amp; Composable MVVM for building interactive interfaces | ` npm i -S vue` | | ![Compat](https://img.shields.io/badge/cover-both-green.svg)  | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)
<a href="https://github.com/facebook/react" target="_blank">React</a> | A declarative, efficient, and flexible JavaScript library for building user interfaces. | ` npm i -S react` | | ![Compat](https://img.shields.io/badge/cover-both-green.svg)  | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)

## DOM playing
Name | Description | install | Trend | Compat | Authored
------------- | ------------- | ------------- | ------------- | ------------- | -------------
<a href="https://github.com/feross/drag-drop" target="_blank">drag-drop</a> | HTML5 drag & drop for humans | `npm i -S drag-drop` | [<img src="https://img.shields.io/npm/dm/drag-drop.svg" align="right">](https://www.npmjs.com/package/drag-drop) | ![Compat](https://img.shields.io/badge/cover-chrome-orange.svg)  | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)
<a href="https://github.com/bevacqua/dragula" target="_blank">Dragula</a> | :ok_hand: Drag and drop so simple it hurts | `npm i -S dragula` | [<img src="https://img.shields.io/npm/dm/dragula.svg" align="right">](https://www.npmjs.com/package/dragula) | ![Compat](https://img.shields.io/badge/cover-chrome-orange.svg)  | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)

## Rendering
Name | Description | install | Trend | Compat | Authored
------------- | ------------- | ------------- | ------------- | ------------- | -------------
<a href="https://github.com/mrdoob/three.js/" target="_blank">Three</a> | JavaScript 3D library | ` npm i -S three` | | ![Compat](https://img.shields.io/badge/cover-chrome-orange.svg) | ![Author](https://img.shields.io/badge/author-yes-green.svg)
<a href="https://github.com/pixijs/pixi.js" target="_blank">Pixi</a> | Pixi.js is a fast lightweight 2D library that works across all devices | ` npm i -S pixi.js` | | ![Compat](https://img.shields.io/badge/cover-both-green.svg) | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)

## Effects
Name | Description | install | Trend | Compat | Authored
------------- | ------------- | ------------- | ------------- | ------------- | -------------
<a href="https://github.com/brianchirls/Seriously.js" target="_blank">Seriously</a> |  A real-time, node-based video effects compositor for the web built with HTML5, Javascript and WebGL |  | | ![Compat](https://img.shields.io/badge/cover-chrome-orange.svg) | ![Author](https://img.shields.io/badge/author-unidentified-lightgrey.svg)
<a href="https://github.com/flozz/StackBlur" target="_blank">StackBlur</a> | Fast and almost Gaussian blur | ` npm i -S stackblur-canvas` | | ![Compat](https://img.shields.io/badge/cover-both-green.svg) | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)

## Recording
Name | Description | install | Trend | Compat | Authored
------------- | ------------- | ------------- | ------------- | ------------- | -------------
<a href="https://github.com/niklasvh/html2canvas" target="_blank">Html2canvas</a> | The script allows you to take "screenshots" of webpages or parts of it, directly on the users browser | ` npm i -S html2canvas` | | ![Compat](https://img.shields.io/badge/cover-both-green.svg) | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)
<a href="https://github.com/sole/Animated_GIF" target="_blank">Animated_gif</a> | Javascript library for creating animated GIFs | ` npm i -S animated_gif` | | ![Compat](https://img.shields.io/badge/cover-both-green.svg) | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)
<a href="https://github.com/spite/ccapture.js/" target="_blank">CCapture</a> | A library to capture canvas-based animations at a fixed framerate | | | ![Compat](https://img.shields.io/badge/cover-chrome-orange.svg) | ![Author](https://img.shields.io/badge/author-unidentified-lightgrey.svg)
<a href="https://github.com/collab-project/videojs-record" target="_blank">Videojs-record</a> | video.js plugin for recording audio/video/image files | ` npm i -S videojs-record` | | ![Compat](https://img.shields.io/badge/cover-both-green.svg) | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)
<a href="http://jnordberg.github.io/gif.js/" target="_blank">Gif.js</a> | JavaScript GIF encoder that runs in your browser | ` npm i -S gif.js` | | ![Compat](https://img.shields.io/badge/cover-both-green.svg) | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)

## Inputs
Name | Description | install | Trend | Compat | Authored
------------- | ------------- | ------------- | ------------- | ------------- | -------------
<a href="https://github.com/hammerjs/hammer.js" target="_blank">Hammer</a> | A javascript library for multi-touch gestures :// You can touch this | ` npm i -S hammerjs` | | ![Compat](https://img.shields.io/badge/cover-both-green.svg) | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)
<a href="https://github.com/soixantecircuits/piano" target="_blank">Piano</a> | Virtual keyboard for touch devices | | | ![Compat](https://img.shields.io/badge/cover-chrome-orange.svg) | ![Author](https://img.shields.io/badge/author-unidentified-lightgrey.svg)
<a href="https://github.com/joeferner/node-serialport2" target="_blank">SerialPort2</a> | node.js serial port driver | ` npm i -S serialport2` | | ![Compat](https://img.shields.io/badge/cover-both-green.svg) | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)
<a href="https://github.com/nonolith/node-usb" target="_blank">USB</a> | Improved USB library for NodeJS | ` npm i -S usb` | | ![Compat](https://img.shields.io/badge/cover-both-green.svg) | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)
<a href="https://github.com/Benvie/Keyboard" target="_blank">Keyboard</a> | Keyboard as an object in the DOM | ` npm i -S keyboard` | | ![Compat](https://img.shields.io/badge/cover-both-green.svg) | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)
<a href="https://namuol.github.io/cheet.js/" target="_blank">Cheet</a> | easy easter eggs (konami code, etc) for your site | `npm i -S cheet.js` | | ![Compat](https://img.shields.io/badge/cover-both-green.svg)  | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)
<a href="https://craig.is/killing/mice" target="_blank">Mousetrap</a> | Simdle library for handling keyboard shortcuts | `npm i -S mousetrap` | | ![Compat](https://img.shields.io/badge/cover-both-green.svg) | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)
<a href="http://monospaced.github.io/hamster.js/" target="_blank">Hamsterjs</a> | standalone javascript library for cross-browser mouse wheel support | ` npm i -S hamsterjs` | | ![Compat](https://img.shields.io/badge/cover-both-green.svg)  | ![Author](https://img.shields.io/badge/author-no-red.svg)

## Camera
Name | Description | install | Trend | Compat | Authored
------------- | ------------- | ------------- | ------------- | ------------- | -------------
<a href="https://github.com/jhuckaby/webcamjs" target="_blank">WebcamJS</a> | HTML5 Webcam Image Capture Library with Flash Fallback | ` npm i -S webcamjs` | | ![Compat](https://img.shields.io/badge/cover-both-green.svg) | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)

## Signal processing
Name | Description | install | Trend | Compat | Authored
------------- | ------------- | ------------- | ------------- | ------------- | -------------
<a href="https://github.com/auduno/clmtrackr" target="_blank">Clmtrackr</a> | Javascript library for precise tracking of facial features via Constrained Local Models | | | ![Compat](https://img.shields.io/badge/cover-chrome-orange.svg) | ![Author](https://img.shields.io/badge/author-unidentified-lightgrey.svg)
<a href="https://github.com/inspirit/jsfeat" target="_blank">Jsfeat</a> | JavaScript Computer Vision library | | | ![Compat](https://img.shields.io/badge/cover-chrome-orange.svg) | ![Author](https://img.shields.io/badge/author-unidentified-lightgrey.svg)

## System
Name | Description | install | Trend | Compat | Authored
------------- | ------------- | ------------- | ------------- | ------------- | -------------
<a href="https://github.com/jprichardson/node-fs-extra" target="_blank">fs-extra</a> | extra methods for the fs object like copy(), remove(), mkdirs() | `npm i -S fs-extra` | [<img src="https://img.shields.io/npm/dm/fs-extra.svg" align="right">](https://www.npmjs.com/package/fs-extra) | ![Compat](https://img.shields.io/badge/cover-node-yellow.svg) | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)

## Emoji
Name | Description | install | Trend | Compat | Authored
------------- | ------------- | ------------- | ------------- | ------------- | -------------
<a href="https://github.com/Ranks/emojione" target="_blank">emojione</a> | EmojiOne™ is the open emoji standard. #iwantemojione http://www.emojione.com | `npm i -S emojione` | [<img src="https://img.shields.io/npm/dm/emojione.svg" align="right">](https://www.npmjs.com/package/emojione) | ![Compat](https://img.shields.io/badge/cover-chrome-orange.svg) | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)

## Tooling
Name | Description | install | Trend | Compat | Authored
------------- | ------------- | ------------- | ------------- | ------------- | -------------
<a href="https://github.com/lodash/lodash" target="_blank">lodash</a> | Rotates the elements of an array in place. | `npm i -S lodash` | [<img src="https://img.shields.io/npm/dm/lodash.svg" align="right">](https://www.npmjs.com/package/lodash) | ![Compat](https://img.shields.io/badge/cover-both-green.svg) | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)
<a href="https://github.com/CMTegner/rotate-array" target="_blank">lodash</a> | utility library delivering modularity, performance, & extras to play with Arrays, Collection and more | `npm i -S rotate-array` | [<img src="https://img.shields.io/npm/dm/rotate-array.svg" align="right">](https://www.npmjs.com/package/rotate-array) | ![Compat](https://img.shields.io/badge/cover-both-green.svg) | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)
<a href="https://github.com/soixantecircuits/Idle.js" target="_blank">Idle.js</a> | Script to create handlers for onIdle onActive onHidden onShow statuses, compatible with `<script>` tag and webpack | `npm i -S idle-js` | | ![Compat](https://img.shields.io/badge/cover-both-green.svg) | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)
<a href="http://www.stringjs.com/" target="_blank">StringJS</a> | JavaScript library for the browser or for Node.js that provides extra String methods | ` npm i -S string` | | ![Compat](https://img.shields.io/badge/cover-both-green.svg) | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)
<a href="https://github.com/hubspot/offline" target="_blank">Offline</a> | Automatically display online/offline indication to your users |  | | ![Compat](https://img.shields.io/badge/cover-chrome-orange.svg) | ![Author](https://img.shields.io/badge/author-unidentified-lightgrey.svg)
<a href="https://noraesae.github.io/perfect-scrollbar/" target="_blank">PerfectScroll</a> | minimalistic scrollbar plugin working with jQuery or vanilla JavaScript as well. | ` npm i -S perfect-scrollbar` | | ![Compat](https://img.shields.io/badge/cover-both-green.svg)  | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)
<a href="https://github.com/moment/moment" target="_blank">Moment</a> | Parse, validate, manipulate, and display dates in javascript | ` npm i -S moment` | | ![Compat](https://img.shields.io/badge/cover-both-green.svg)  | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)
<a href="https://github.com/szimek/signature_pad" target="_blank">Signature_pad</a> | HTML5 canvas based smooth signature drawing | ` npm i -S signature_pad` | | ![Compat](https://img.shields.io/badge/cover-both-green.svg)  | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)
<a href="https://code.google.com/archive/p/dat-gui/" target="_blank">Dat-Gui</a> | A lightweight graphical user interface for changing variables in JavaScript | ` npm i -S dat-gui` | | ![Compat](https://img.shields.io/badge/cover-both-green.svg)  | ![Author](https://img.shields.io/badge/author-no-red.svg)
<a href="http://wicky.nillia.ms/enquire.js" target="_blank">Enquire</a> | a lightweight, pure JavaScript library for responding to CSS media queries | ` npm i -S enquire.js` |  |![Compat](https://img.shields.io/badge/cover-both-green.svg)  | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)
<a href="https://modernizr.com/docs" target="_blank">Modernizr</a> | Automatically detects the availability of next-generation web technologies in your user's browsers | ` npm i -S -g modernizr` | | ![Compat](https://img.shields.io/badge/cover-both-green.svg)  | ![Author](https://img.shields.io/badge/author-unidentified-lightgrey.svg)
<a href="http://verge.airve.com/" target="_blank">Verge</a> | compact set of cross-browser viewport utilities written in native JavaScript | ` npm i -S verge` | | ![Compat](https://img.shields.io/badge/cover-both-green.svg) | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)
<a href="http://sizzlejs.com/" target="_blank">Sizzle</a> | A pure-JavaScript, bottom-up CSS selector engine designed to be easily dropped in to a host library |  ` npm i -S sizzle` (might not be same team) (to test if automatic css prefixing) | | ![Compat](https://img.shields.io/badge/cover-both-green.svg) | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)

## Pdf
Name | Description | install | Trend | Compat | Authored
------------- | ------------- | ------------- | ------------- | ------------- | -------------
<a href="https://github.com/bpampuch/pdfmake" target="_blank">Pdfmake</a> | A lightweight graphical user interface for changing variables in JavaScript | ` npm i -S pdfmake` | | ![Compat](https://img.shields.io/badge/cover-both-green.svg)  | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)

## Perf
Name | Description | install | Trend | Compat | Authored
------------- | ------------- | ------------- | ------------- | ------------- | -------------
<a href="https://github.com/lmacsen/rstats" target="_blank">Rstats.js</a> | rStats aims to provide a way of measuring and visualizing performance of your code, mainly in apps based on an update loop, like games or interactive experiences. | ` npm i -S rstats.js` | | ![Compat](https://img.shields.io/badge/cover-both-green.svg)  | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)
<a href="https://github.com/mrdoob/stats.js" target="_blank">Stats.js</a> | JavaScript Performance Monitor | ` npm i -S stats.js` | | ![Compat](https://img.shields.io/badge/cover-both-green.svg)  | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)

## Tracking
Name | Description | install | Trend | Compat | Authored
------------- | ------------- | ------------- | ------------- | ------------- | -------------
<a href="https://github.com/soixantecircuits/off" target="_blank">Off</a>[Off](https://github.com/soixantecircuits/off) | Allow to track clicks and touchend on a webapp | | | ![Compat](https://img.shields.io/badge/cover-chrome-orange.svg)  | ![Author](https://img.shields.io/badge/author-unidentified-lightgrey.svg)
<a href="https://github.com/crookedneighbor/amplitude" target="_blank">Amplitude</a> | A node wrapper for Amplitude analytics | ` npm i -S amplitude` | | ![Compat](https://img.shields.io/badge/cover-node-yellow.svg)  | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)
<a href="https://github.com/andjosh/gatrack.js" target="_blank">GATracks</a> | Easily track user events with Google Analytics | ` npm i -S gatrack` | | ![Compat](https://img.shields.io/badge/cover-both-green.svg)  | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)

## Social network
Name | Description | install | Trend | Compat | Authored
------------- | ------------- | ------------- | ------------- | ------------- | -------------
<a href="https://github.com/ttezel/twit" target="_blank">Twit</a> | Twitter API client for node (REST &amp; Streaming) | ` npm i -S twit` | | ![Compat](https://img.shields.io/badge/cover-node-yellow.svg)  | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)
<a href="https://github.com/totemstech/instagram-node" target="_blank">Instagram-node</a> | NodeJS driver for the instagram API | ` npm i -S instagram-node` | | ![Compat](https://img.shields.io/badge/cover-node-yellow.svg)  | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)
<a href="https://github.com/node-facebook/facebook-node-sdk" target="_blank">Fb</a> | With facebook-node-sdk you can now easily write the same code and share between your server (nodejs) and the client (Facebook Javascript SDK) | ` npm i -S fb` | | ![Compat](https://img.shields.io/badge/cover-both-green.svg)  | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)

## Tiers service
Name | Description | install | Trend | Compat | Authored
------------- | ------------- | ------------- | ------------- | ------------- | -------------
<a href="https://mandrillapp.com/api/docs/index.nodejs.html" target="_blank">Mandrill</a> | JS wrapper for mandrill API  | ` npm i -S mandrill-api` | [<img src="https://img.shields.io/npm/dm/mandrill-api.svg" align="right">](https://www.npmjs.com/package/mandrill-api) | ![Compat](https://img.shields.io/badge/cover-both-green.svg)  | ![Author](https://img.shields.io/badge/author-yes-brightgreen.svg)

## Translations
Name | Description | install | Trend | Compat | Authored
------------- | ------------- | ------------- | ------------- | ------------- | -------------
<a href="http://i18next.com/" target="_blank">i18next</a> | internationalization framework  | ` npm i -S i18next`
