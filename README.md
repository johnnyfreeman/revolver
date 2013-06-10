# Revolver.js

Revolver.js is a modular, unopinionated javascript library to help you build your own content slider from scratch. It has a sensable API that helps you get from mockup to reality with less friction than the other cookie-cutter sliders out there. But don't let any of that scare you, it's pretty easy!

**THIS README FILE IS IN HEAVY DEVELOPMENT AND CONTAINS A CRAP LOAD OF BROKEN LINKS**

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

* [**autoPlay**](https://github.com/revolverjs/revolverjs/blob/master/docs/revolver.options.autoplay.md): Dictates whethor or not Revolver will begin playing immediately.
* [**onPause()**](https://github.com/revolverjs/revolverjs/blob/master/docs/revolver.options.onpause.md): A callback that is executed every time the pause() method is called.
* [**onPlay()**](https://github.com/revolverjs/revolverjs/blob/master/docs/revolver.options.onplay.md): A callback that is executed every time the play() method is called.
* [**onReady()**](https://github.com/revolverjs/revolverjs/blob/master/docs/revolver.options.onready.md): A callback that is executed as soon as Revolver is completely setup and ready to go.
* [**onRestart()**](https://github.com/revolverjs/revolverjs/blob/master/docs/revolver.options.onrestart.md): A callback that is executed every time the restart() method is called.
* [**onStop()**](https://github.com/revolverjs/revolverjs/blob/master/docs/revolver.options.onstop.md): A callback that is executed every time the stop() method is called.
* [**rotationSpeed**](https://github.com/revolverjs/revolverjs/blob/master/docs/revolver.options.rotationspeed.md): The number of milliseconds to stay on each slide before transitioning to the next.
* [**transition**](https://github.com/revolverjs/revolverjs/blob/master/docs/revolver.options.transition.md): The transition option is just a namespace for the options that are specific to the transition itself.
  * [**name**](https://github.com/revolverjs/revolverjs/blob/master/docs/revolver.options.transition.name.md): The type of transition to use for all transitions. See here for the full list of available transitions.
  * [**onComplete()**](https://github.com/revolverjs/revolverjs/blob/master/docs/revolver.options.transition.oncomplete.md): A callback that is executed every time the transition's animation has completed.
  * [**onStart()**](https://github.com/revolverjs/revolverjs/blob/master/docs/revolver.options.transition.onstart.md): A callback that is executed every time the transition's animation has started.
  * [**speed**](https://github.com/revolverjs/revolverjs/blob/master/docs/revolver.options.transition.speed.md): The number of milliseconds the transition (animation) should last.

## Events

Revolver emits important events and exposes an event api so that you can hook into the core without actually having to hardcode your changes directly into the core.

* [**pause**](#): Fired every time the pause() method is called.
* [**play**](#): Fired every time the play() method is called.
* [**ready**](#): Fired after instantiation as soon as Revolver is completely setup and ready to go.
* [**restart**](#): Fired every time the restart() method is called.
* [**stop**](#): Fired every time the stop() method is called.
* [**transitionStart**](#): Fired every time the transition's animation has started.
* [**transitionComplete**](#): Fired every time the transition's animation has completed.

## Instance Methods

Once you have instantiated Revolver, as shown [here](#usage), you then have access to all these methods.

* [**addSlide()**](#): Add a new slide to the [slides](#) array.
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

Once you have instantiated Revolver, as shown [here](#usage), you then have access to all these properties.

* [**currentSlide**](#): Holds the index number for the current slide.
* [**disabled**](#): Used internally to disable all functionality within a Revolver instance.
* [**intervalId**](#): The ID that Revolver uses to when stopping or pausing playback.
* [**isAnimating**](#): Equal to true if Revolver is currently animating, false if not.
* [**iteration**](#): A running count of how many times Revolver has transitioned.
* [**lastSlide**](#): Holds the index key of the last (not previous) slide in the slider.
* [**nextSlide**](#): Holds the index key of the next slide in the slider.
* [**numSlides**](#): A count of the total number of slides that Revolver is acting upon.
* [**options**](#): A congegation of all user-defined options, plugin-defined options, and Revolver's defaults.
* [**previousSlide**](#): Holds the index key of the slide that was last in transition (before the current one).
* [**slides**](#): Houses all the individual slides that Revolver is acting upon.
* [**status**](#): The current status of the Revolver instance, whether it is "stopped", "paused", or "playing".

## Plugins

Because of Revolver's modular architecture, it does very little out of the box and usually requires a plugin or two to hit the sweet spot. Here's the list:

* [**revolver-jquery**](https://github.com/revolverjs/revolver-jquery/tree/development): Instantiate Revolver the jQuery way.
* [**revolver-jquery-fade**](https://github.com/revolverjs/revolver-jquery-fade): Fade transition using jQuery.
* [**revolver-jquery-slide**](#): Slide transition using jQuery.
* [**revolver-jquery-reveal**](#): Reveal transition using jQuery.
* [**revolver-mootools**](https://github.com/revolverjs/revolver-mootools/tree/development): Instantiate Revolver the Mootools way.
* [**revolver-mootools-fade**](#): Fade transition using Mootools.
* [**revolver-mootools-slide**](#): Slide transition using Mootools.
* [**revolver-mootools-reveal**](#): Reveal transition using Mootools.

If you would like to add your own plugin to the list feel free to fork and pull.

## Contributing

Revolver uses [Grunt](http://gruntjs.com/) and a few Grunt plugins to automatically compile the CoffeeScript to JS, minify, and create a source map for each JS file. To install these tools you must have [Node](http://nodejs.org/) and [NPM](https://npmjs.org/) installed on your machine.

To install Grunt and plugins, open Terminal (*nix or Mac) or Powershell (Windows), and run:

```shell
npm install
```

To run the coffee compilation and minification tasks once, run:

```shell
grunt
```

Or, if you would rather run both tasks upon every save (usually preferred), run:

```shell
grunt regarde
```

Now leave the terminal window running in the background while you make your changes.

**Note**: If you plan to make a pull request of your changes, make sure you only edit the coffee file (`/coffee/revolver.coffee`) and never the js files directly. Grunt will take care of the js files for you.
