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
[Crossroads](https://millermedeiros.github.io/crossroads.js/) | It parses a string input and decides which action should | `npm i --save crossroads` | [<img src="https://img.shields.io/npm/dm/crossroads.svg" align="right">](https://www.npmjs.com/package/crossroads) | ![Compatibility](https://img.shields.io/badge/cover-both-green.svg)  | ![Author](https://img.shields.io/badge/Author-Yes-brightgreen.svg)
[Hasher](https://github.com/millermedeiros/hasher/)  | Set of functions to control browser history | `npm i --save hasher` | [<img src="https://img.shields.io/npm/dm/hasher.svg" align="right">](https://www.npmjs.com/package/hasher) | ![Compatibility](https://img.shields.io/badge/cover-both-green.svg) | ![Author](https://img.shields.io/badge/Author-Yes-brightgreen.svg) 

## Communication
Name | Description | npm command | Trend | Compatibility | Published By
------------- | ------------- | ------------- | ------------- | ------------- | -------------
[Signals.js](https://millermedeiros.github.io/signals.js/) | similar to an Event Emitter/Dispatcher or a Pub/Sub system | `npm i --save signals` | [<img src="https://img.shields.io/npm/dm/signals.svg" align="right">](https://www.npmjs.com/package/signals) | ![Compatibility](https://img.shields.io/badge/cover-both-green.svg)  | ![Author](https://img.shields.io/badge/Author-Yes-brightgreen.svg) 
[Socket.io](http://socket.io/) | Socket.IO enables real-time bidirectional event-based communication | `npm i --save socket.io` | [<img src="https://img.shields.io/npm/dm/socket.io.svg" align="right">](https://www.npmjs.com/package/socket.io) | ![Compatibility](https://img.shields.io/badge/cover-both-green.svg)  | ![Author](https://img.shields.io/badge/Author-Yes-brightgreen.svg) 
[Spacebro](https://github.com/soixantecircuits/spacebro) | Server for broadcasting socket.io service | `npm i --save spacebro` | [<img src="https://img.shields.io/npm/dm/spacebro.svg" align="right">](https://www.npmjs.com/package/spacebro) | ![Compatibility](https://img.shields.io/badge/cover-node-yellow.svg)  | ![Author](https://img.shields.io/badge/Author-Yes-brightgreen.svg) 
[Spacebro client](https://github.com/soixantecircuits/spacebro-client) | Connect thru socket.io with ZeroConf | `npm i --save spacebro-client` | [<img src="https://img.shields.io/npm/dm/spacebro-client.svg" align="right">](https://www.npmjs.com/package/spacebro-client) |![Compatibility](https://img.shields.io/badge/cover-node-yellow.svg)  | ![Author](https://img.shields.io/badge/Author-Yes-brightgreen.svg) 

## Breakpoint
Name | Description | npm command | Trend | Compatibility | Published By
------------- | ------------- | ------------- | ------------- | ------------- | -------------
[Enquire](http://wicky.nillia.ms/enquire.js) | a lightweight, pure JavaScript library for responding to CSS media queries | git clone git://github.com/WickyNilliams/enquire.js.git && cd enquire.js && npm install && grunt |  |![Compatibility](https://img.shields.io/badge/cover-chrome-orange.svg)  | ![Author](https://img.shields.io/badge/Author-Unidentified-lightgrey.svg) 

## Modernizr
Name | Description | npm command | Trend | Compatibility | Published By
------------- | ------------- | ------------- | ------------- | ------------- | -------------
[Modernizr](https://modernizr.com/docs) | Automatically detects the availability of next-generation web technologies in your user's browsers | 'npm install -g modernizr' | | ![Compatibility](https://img.shields.io/badge/cover-both-green.svg)  | ![Author](https://img.shields.io/badge/Author-Unidentified-lightgrey.svg)

## Analytics
Name | Description | npm command | Trend | Compatibility | Published By
------------- | ------------- | ------------- | ------------- | ------------- | -------------
[GATracks](https://github.com/andjosh/gatrack.js) | Easily track user events with Google Analytics | 'npm install gatrack' | | ![Compatibility](https://img.shields.io/badge/cover-both-green.svg)  | ![Author](https://img.shields.io/badge/Author-Yes-brightgreen.svg) 

## KonamiCode
Name | Description | npm command | Trend | Compatibility | Published By
------------- | ------------- | ------------- | ------------- | ------------- | -------------
[Cheet](https://namuol.github.io/cheet.js/) | easy easter eggs (konami code, etc) for your site | 'npm install cheet.js' | | ![Compatibility](https://img.shields.io/badge/cover-both-green.svg)  | ![Author](https://img.shields.io/badge/Author-Yes-brightgreen.svg)

## Keyboard Keypress
Name | Description | npm command | Trend | Compatibility | Published By
------------- | ------------- | ------------- | ------------- | ------------- | -------------
[Mousetrap](https://craig.is/killing/mice) | Simple library for handling keyboard shortcuts | 'npm install mousetrap' | | ![Compatibility](https://img.shields.io/badge/cover-both-green.svg) | ![Author](https://img.shields.io/badge/Author-Yes-brightgreen.svg)

## Mouse Wheel
Name | Description | npm command | Trend | Compatibility | Published By
------------- | ------------- | ------------- | ------------- | ------------- | -------------
[Hamsterjs](http://monospaced.github.io/hamster.js/) | standalone javascript library for cross-browser mouse wheel support | 'https://www.npmjs.com/package/hamsterjs' | | ![Compatibility](https://img.shields.io/badge/cover-both-green.svg)  | ![Author](https://img.shields.io/badge/Author-No-red.svg)

## Custom Scrollbar
Name | Description | npm command | Trend | Compatibility | Published By
------------- | ------------- | ------------- | ------------- | ------------- | -------------
[Gemini](http://noeldelgado.github.io/gemini-scrollbar/) | Custom overlay-scrollbars with native scrolling mechanism for web applications (Too be replaced) | 'npm i gemini-scrollbar --save' | | ![Compatibility](https://img.shields.io/badge/cover-both-green.svg)  | ![Author](https://img.shields.io/badge/Author-Unidentified-lightgrey.svg)

## Resizer 
Name | Description | npm command | Trend | Compatibility | Published By
------------- | ------------- | ------------- | ------------- | ------------- | -------------
[Image-scale](https://github.com/gestixi/image-scale) needs to be made JQueryless | Scale images to fit or fill any target container via two simple properties: scale and align. | npm install image-scale | | ![Compatibility](https://img.shields.io/badge/cover-both-green.svg)  | ![Author](https://img.shields.io/badge/Author-Yes-brightgreen.svg) 

## Viewport
Name | Description | npm command | Trend | Compatibility | Published By
------------- | ------------- | ------------- | ------------- | ------------- | -------------
[Verge](http://verge.airve.com/) | compact set of cross-browser viewport utilities written in native JavaScript | `npm install verge` | | ![Compatibility](https://img.shields.io/badge/cover-both-green.svg) | ![Author](https://img.shields.io/badge/Author-Yes-brightgreen.svg)

## StringJS
Name | Description | npm command | Trend | Compatibility | Published By
------------- | ------------- | ------------- | ------------- | ------------- | -------------
[StringJS](http://www.stringjs.com/) | JavaScript library for the browser or for Node.js that provides extra String methods | `npm install string` | | ![Compatibility](https://img.shields.io/badge/cover-both-green.svg) | ![Author](https://img.shields.io/badge/Author-Yes-brightgreen.svg)

## RetinaJS
Name | Description | npm command | Trend | Compatibility | Published By
------------- | ------------- | ------------- | ------------- | ------------- | -------------
[RetinaJS](https://github.com/imulus/retinajs) | open source script that serves high-resolution images to devices with retina displays | npm install retina.js (might not be same team) | | ![Compatibility](https://img.shields.io/badge/cover-both-green.svg) | ![Author](https://img.shields.io/badge/Author-No-red.svg)

## CSS Selector Engine
Name | Description | npm command | Trend | Compatibility | Published By
------------- | ------------- | ------------- | ------------- | ------------- | -------------
[Sizzle](http://sizzlejs.com/) | A pure-JavaScript, bottom-up CSS selector engine designed to be easily dropped in to a host library |  npm install sizzle (might not be same team) (to test if automatic css prefixing) | | ![Compatibility](https://img.shields.io/badge/cover-both-green.svg) | ![Author](https://img.shields.io/badge/Author-Yes-brightgreen.svg)


## Request
https://github.com/visionmedia/superagent

## Caching
https://github.com/jpodwys/superagent-cache
Bifrost: https://github.com/soixantecircuits/bifrost

## Persistent data
native localstorage (RTFM)
lawnchair
Linvodb3 - https://github.com/Ivshti/linvodb3

## State machine
Machina.js

## Animation
GSAP
tween.js
elementTransitions.js

## Image manipulation
Reisze: https://github.com/brunosimon/burno.js/blob/dev/src/tools/resizer.class.js
zooming
https://github.com/leeoniya/RgbQuant.js/tree/master
https://github.com/blueimp/JavaScript-Load-Image

## Video playback
https://github.com/videojs/video.js

## Slider
https://github.com/meandmax/lory
https://github.com/dimsemenov/PhotoSwipe
https://github.com/nolimits4web/swiper/

## Sprite animation
motio

## Rendering
three.js
pixi.js

## Effects
Seriously
https://github.com/flozz/StackBlur

## Recording
html2canvas.js
https://github.com/sole/Animated_GIF
https://github.com/spite/ccapture.js/
https://github.com/collab-project/videojs-record

## Inputs
Hammer
Piano
serialport2
USB
Keyboard

## Camera
https://github.com/jhuckaby/webcamjs

## Signal processing
https://github.com/auduno/clmtrackr
https://inspirit.github.io/jsfeat/

## Tooling
Idle.js
String
https://github.com/hubspot/offline
gemini-scrollbar
moment
signature_pad.js
dat-gui

## Pdf
pdfmake

## Template
Vue.js
React

## Perf
rstats.js
stats.js

## Tracking
https://github.com/soixantecircuits/off
amplitude

## Social network
https://github.com/ttezel/twit
https://github.com/totemstech/instagram-node
https://github.com/node-facebook/facebook-node-sdk
