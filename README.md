# Revolver.js

Revolver.js is a modular and unopinionated javascript library to help you build your own content slider from scratch. It offers a robust API that helps you get from mockup to reality with less friction than other cookie cutter sliders. But don't let that scare you, it's pretty easy!

## Getting Started

If you are planning on building your own content slider completely from scratch, all you need to do is [install Revolver](https://github.com/revolverjs/revolverjs#installation) and [start extending](http://revolverjs.com/docs.html#extending_revolver). However, if you are new to Revolver, it is highly recommended you take a look and some of the [transitions we have already made](http://revolverjs.com/examples.html) to help you get started.

## Installation

The recommended way to install Revolver is with [Bower](http://bower.io/).

```
bower install revolverjs
```

It will resolve all of Revolver's dependencies for you, no need to go and download those separately. If you are unfamiliar with it, I highly recommend you take a look!

Of course, you can still take the ol' fashioned approach and [download](https://github.com/revolverjs/revolverjs/archive/master.zip) and unzip it anywhere in your project. Just make sure you also do the same for Revolver's hard dependencies: [Lodash](http://lodash.com/) and [Bean](https://github.com/fat/bean).

## Usage

The only thing that is required to instantiate Revolver is an array of DOM elements.

```javascript
// using raw javascript
var mySlides = document.getElementById('slidesContainer').getElementsByClassName('slide');

// using jQuery
var mySlides = $('#slidesContainer .slide'); // <-- returns an array-like object

// using Mootools
var mySlides = $$('#slidesContainer .slide'); // <-- returns an array-like object
```

Once you have your slides array, just pass it to the Revolver constructor.

```javascript
var mySlider = new Revolver(mySlides);
```

You can optionally pass options.

```javascript
var mySlider = new Revolver(mySlides, {autoplay: false, rotationSpeed: 2000});
```

For more information [head over to the documentation](https://github.com/revolverjs/revolverjs/tree/master/docs/README.md).

## Plugins

Because of Revolver's modular architecture, it does very little out of the box and usually requires a plugin or two to hit the sweet spot. Here's the list:

* [revolver-jquery](https://github.com/revolverjs/revolver-jquery/tree/development): Instantiate Revolver the jQuery way.
* [revolver-jquery-fade](https://github.com/revolverjs/revolver-jquery-fade): Fade transition using jQuery.
* revolver-jquery-slide: Coming soon.
* revolver-jquery-reveal: Coming soon.
* [revolver-mootools](https://github.com/revolverjs/revolver-mootools/tree/development): Instantiate Revolver the Mootools way.
* revolver-mootools-fade: Coming soon.
* revolver-mootools-slide: Coming soon.
* revolver-mootools-reveal: Coming soon.

If you would like to add your own plugin to the list feel free fork and pull.

## Contributing

Revolver uses [Grunt](http://gruntjs.com/) and a few [Grunt plugins](http://gruntjs.com/plugins) to automatically compile the CoffeeScript to JS, minify, and create a source map for each JS file. To install these tools you must have [Node.js](http://nodejs.org/) and [NPM](https://npmjs.org/) installed on your machine.

To install Grunt and plugins, open Terminal (*nix or Mac) or Powershell (Windows) and run:

```
npm install
```

To start the Grunt watch server, run:

```
grunt
```

Now leave the terminal window running in the background while you make your changes.

**Note**: If you plan to make a pull request of your changes, make sure you only edit the coffee file ([/coffee/revolver.coffee](https://github.com/revolverjs/revolverjs/blob/master/coffee/revolver.coffee)) and never the js files directly. Grunt will take care of the js files for you.
