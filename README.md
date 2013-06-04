# Revolver.js

Revolver.js is a modular and unopinionated javascript library to help you build your own content slider from scratch. It offers a robust API that helps you get from mockup to reality with less friction than other cookie cutter sliders. But don't let that scare you, it's pretty easy!

## Getting Started

If you are planning on building your own content slider completely from scratch, all you need to do is [install Revolver](https://github.com/revolverjs/revolverjs#installation) and [start extending](http://revolverjs.com/docs.html#extending_revolver). However, if you are new to Revolver, it is highly recommended you take a look at the [documentation](https://github.com/revolverjs/revolverjs/tree/master/docs/README.md) to help get you started.

## Installation

The recommended way to install Revolver is with [Bower](http://bower.io/).

```shell
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

For more information [head over to the documentation](https://github.com/revolverjs/revolverjs/tree/master/docs/README.md).

## Options

Options are defaults that can be overwritten upon instantiation (through the constructor) or at any time there-after (through the [setOptions()](https://github.com/revolverjs/revolverjs/blob/master/docs/instance-methods/setoptions.md) method).

* [**autoPlay**](https://github.com/revolverjs/revolverjs/blob/master/docs/options/autoplay.md): Dictates whethor or not Revolver will begin playing immediately.
* [**onPause()**](https://github.com/revolverjs/revolverjs/blob/master/docs/options/onpause.md): A callback that is executed every time the pause() method is called.
* [**onPlay()**](https://github.com/revolverjs/revolverjs/blob/master/docs/options/onplay.md): A callback that is executed every time the play() method is called.
* [**onReady()**](https://github.com/revolverjs/revolverjs/blob/master/docs/options/onready.md): A callback that is executed as soon as Revolver is completely setup and ready to go.
* [**onRestart()**](https://github.com/revolverjs/revolverjs/blob/master/docs/options/onrestart.md): A callback that is executed every time the restart() method is called.
* [**onStop()**](https://github.com/revolverjs/revolverjs/blob/master/docs/options/onstop.md): A callback that is executed every time the stop() method is called.
* [**rotationSpeed**](https://github.com/revolverjs/revolverjs/blob/master/docs/options/rotationspeed.md): The number of milliseconds to stay on each slide before transitioning to the next.
* **transition**: The transition option is just a namespace for the options that are specific to the transition itself.
  * [**name**](https://github.com/revolverjs/revolverjs/blob/master/docs/options/transition/name.md): The type of transition to use for all transitions. See here for the full list of available transitions.
  * [**onComplete()**](https://github.com/revolverjs/revolverjs/blob/master/docs/options/transition/oncomplete.md): A callback that is executed every time the transition's animation has completed.
  * [**onStart()**](https://github.com/revolverjs/revolverjs/blob/master/docs/options/transition/onstart.md): A callback that is executed every time the transition's animation has started.
  * [**speed**](https://github.com/revolverjs/revolverjs/blob/master/docs/options/transition/speed.md): The number of milliseconds the transition (animation) should last.

```javascript
// passing options through the constructor
var mySlider = new Revolver(mySlides, {
  autoPlay: false,
  onStop: function() {
    aleft('The slider has been stopped.');
  }
});

// then again, sometime later...
mySlider.setOptions({rotationSpeed: 1500});
```

## Events

Revolver emits important events and exposes an event api so that you can hook into the core without actually having to hardcode your changes directly into the core.

* [**pause**](#): Fired every time the pause() method is called.
* [**play**](#): Fired every time the play() method is called.
* [**ready**](#): Fired after instantiation as soon as Revolver is completely setup and ready to go.
* [**restart**](#): Fired every time the restart() method is called.
* [**stop**](#): Fired every time the stop() method is called.
* [**transitionStart**](#): Fired every time the transition's animation has started.
* [**transitionComplete**](#): Fired every time the transition's animation has completed.

```javascript
mySlider.on('pause', function() {
  // show paused indicator
});
```

## Instance Methods

* [**first()**](#): Transition immediately to the first slide.
* [**goTo()**](#): Transition immediately to any given slide.
* [**last()**](#): Transition immediately to the last (not previous) slide.
* [**next()**](#): Transition immediately to the next slide.
* [**pause()**](#): Stops the slider but remembers it's position.
* [**play()**](#): Creates a continuous loop where the slider transitions to the next slide at the given interval.
* [**previous()**](#): Transition immediately to the previous slide.
* [**reset()**](#): Queues up the first slide to be next without forcing the transition to happen immediately.
* [**restart()**](#): This is the functional equivalent to calling stop() and then play() consecutively.
* [**on()**](#): Registers an event listener.
* [**one()**](#): Alias for `on()` except that the handler will removed after the first execution.
* [**off()**](#): Removes a previously registered event listener.
* [**setOptions()**](#): Merge new options with the existing options object.
* [**stop()**](#): Stops the slider from transitioning to the next slide, and resets the slider.
* [**trigger()**](#): Executes all listeners for the given event.

## Instance Properties

* [**currentSlide**](#): (not documented yet)
* [**disabled**](#): (not documented yet)
* [**intervalId**](#): (not documented yet)
* [**isAnimating**](#): (not documented yet)
* [**iteration**](#): (not documented yet)
* [**lastSlide**](#): (not documented yet)
* [**nextSlide**](#): (not documented yet)
* [**numSlides**](#): (not documented yet)
* [**options**](#): (not documented yet)
* [**previousSlide**](#): (not documented yet)
* [**slides**](#): (not documented yet)
* [**status**](#): (not documented yet)

## Plugins

Because of Revolver's modular architecture, it does very little out of the box and usually requires a plugin or two to hit the sweet spot. Here's the list:

* [**revolver-jquery**](https://github.com/revolverjs/revolver-jquery/tree/development): Instantiate Revolver the jQuery way.
* [**revolver-jquery-fade**](https://github.com/revolverjs/revolver-jquery-fade): Fade transition using jQuery.
* [**revolver-jquery-slide**](#): Coming soon.
* [**revolver-jquery-reveal**](#): Coming soon.
* [**revolver-mootools**](https://github.com/revolverjs/revolver-mootools/tree/development): Instantiate Revolver the Mootools way.
* [**revolver-mootools-fade**](#): Coming soon.
* [**revolver-mootools-slide**](#): Coming soon.
* [**revolver-mootools-reveal**](#): Coming soon.

If you would like to add your own plugin to the list feel free fork and pull.

## Contributing

Revolver uses [Grunt](http://gruntjs.com/) and a few Grunt plugins to automatically compile the CoffeeScript to JS, minify, and create a source map for each JS file. To install these tools you must have [Node](http://nodejs.org/) and [NPM](https://npmjs.org/) installed on your machine.

To install Grunt and plugins, open Terminal (*nix or Mac) or Powershell (Windows) and run:

```shell
npm install
```

To start the Grunt watch server, run:

```shell
grunt
```

Now leave the terminal window running in the background while you make your changes.

**Note**: If you plan to make a pull request of your changes, make sure you only edit the coffee file ([/coffee/revolver.coffee](https://github.com/revolverjs/revolverjs/blob/master/coffee/revolver.coffee)) and never the js files directly. Grunt will take care of the js files for you.
