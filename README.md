# Revolver.js

Revolver.js is a modular javascript library to help you build your own content slider. It has a sensable, unopinionated API that helps you get from mockup to reality with less friction than the other cookie-cutter sliders out there. In fact, Revolver is a much lower component than most of the other content slider libraries out there. In other words, Revolver could be used to mimick another slider, but most other sliders could not do some of what Revolver is capable of. But don't let any of that scare you, it's pretty easy to get started!

## Getting Started

If you are planning on building your own content slider completely from scratch, all you need to do is [install](https://github.com/revolverjs/revolverjs#installation) Revolver and start [customizing](#customizing-revolver). However, if you are new to Revolver, it is highly recommended you keep reading.

## Installation

The recommended way to install Revolver is with [Bower](http://bower.io/).

```shell
bower install revolverjs
```

It will resolve all of Revolver's dependencies for you, no need to go and download those separately. If you are unfamiliar with it, I highly recommend you take a look!

Of course, you can still take the ol' fashioned approach and [download](https://github.com/revolverjs/revolverjs/archive/master.zip) and unzip it anywhere in your project. Just make sure you also do the same for Revolver's hard dependencies: [Lodash](http://lodash.com/) and [Bean](https://github.com/fat/bean).

## Usage

The only thing that is required to instantiate Revolver is an array of DOM elements (usually `<li>` elements).

```javascript
// using raw javascript
var mySlides = document.getElementById('slidesContainer').getElementsByClassName('slide');

// using jQuery
var mySlides = $('#slidesContainer .slide');

// using Mootools
var mySlides = $$('#slidesContainer .slide');
```

As you _might_ have already guessed. It doesn't have to be of the `Array` type. It can be an Array-like object (like what jQuery produces). Anyways, once you have your slides "array", just pass it as the first argument to Revolver.

```javascript
var mySlider = new Revolver(mySlides);
```

## Options

Revolver's defaults can be overwritten upon instantiation (as the second argument to the constructor) or at any time there-after (through the [setOptions()](https://github.com/revolverjs/revolverjs/blob/master/docs/instance-methods/setoptions.md) method).

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

## Events

Revolver emits important events and exposes an event api so that you can hook into the core without actually having to hardcode your changes directly into the core.

* [**pause**](https://github.com/revolverjs/revolverjs/blob/master/docs/revolver.events.pause.md): Fired every time the pause() method is called.
* [**play**](https://github.com/revolverjs/revolverjs/blob/master/docs/revolver.events.play.md): Fired every time the play() method is called.
* [**ready**](https://github.com/revolverjs/revolverjs/blob/master/docs/revolver.events.ready.md): Fired after instantiation as soon as Revolver is completely setup and ready to go.
* [**restart**](https://github.com/revolverjs/revolverjs/blob/master/docs/revolver.events.restart.md): Fired every time the restart() method is called.
* [**stop**](https://github.com/revolverjs/revolverjs/blob/master/docs/revolver.events.stop.md): Fired every time the stop() method is called.
* [**transitionStart**](https://github.com/revolverjs/revolverjs/blob/master/docs/revolver.events.transitionstart.md): Fired every time the transition's animation has started.
* [**transitionComplete**](https://github.com/revolverjs/revolverjs/blob/master/docs/revolver.events.transitioncomplete.md): Fired every time the transition's animation has completed.

## Instance Methods

Once you have instantiated Revolver, as shown [here](#usage), you then have access to all these methods.

* [**addSlide()**](https://github.com/revolverjs/revolverjs/blob/master/docs/revolver.methods.addslide.md): Add a new slide to the [slides](#) array.
* [**first()**](https://github.com/revolverjs/revolverjs/blob/master/docs/revolver.methods.first.md): Transition immediately to the first slide.
* [**goTo()**](https://github.com/revolverjs/revolverjs/blob/master/docs/revolver.methods.goto.md): Transition immediately to any given slide.
* [**last()**](https://github.com/revolverjs/revolverjs/blob/master/docs/revolver.methods.last.md): Transition immediately to the last (not previous) slide.
* [**next()**](https://github.com/revolverjs/revolverjs/blob/master/docs/revolver.methods.next.md): Transition immediately to the next slide.
* [**pause()**](https://github.com/revolverjs/revolverjs/blob/master/docs/revolver.methods.pause.md): Stops the slider but remembers it's position.
* [**play()**](https://github.com/revolverjs/revolverjs/blob/master/docs/revolver.methods.play.md): Creates a continuous loop where the slider transitions to the next slide at the given interval.
* [**previous()**](https://github.com/revolverjs/revolverjs/blob/master/docs/revolver.methods.previous.md): Transition immediately to the previous slide.
* [**reset()**](https://github.com/revolverjs/revolverjs/blob/master/docs/revolver.methods.reset.md): Queues up the first slide to be next without forcing the transition to happen immediately.
* [**restart()**](https://github.com/revolverjs/revolverjs/blob/master/docs/revolver.methods.restart.md): This is the functional equivalent to calling stop() and then play() consecutively.
* [**off()**](https://github.com/revolverjs/revolverjs/blob/master/docs/revolver.methods.off.md): Removes a previously registered event listener.
* [**on()**](https://github.com/revolverjs/revolverjs/blob/master/docs/revolver.methods.on.md): Registers an event listener.
* [**one()**](https://github.com/revolverjs/revolverjs/blob/master/docs/revolver.methods.one.md): Alias for `on()` except that the handler will removed after the first execution.
* [**setOptions()**](https://github.com/revolverjs/revolverjs/blob/master/docs/revolver.methods.setoptions.md): Merge new options with the existing options object.
* [**stop()**](https://github.com/revolverjs/revolverjs/blob/master/docs/revolver.methods.stop.md): Stops the slider from transitioning to the next slide, and resets the slider.
* [**trigger()**](https://github.com/revolverjs/revolverjs/blob/master/docs/revolver.methods.trigger.md): Executes all listeners for the given event.

## Instance Properties

Once you have instantiated Revolver, as shown [here](#usage), you then have access to all these properties.

* [**currentSlide**](https://github.com/revolverjs/revolverjs/blob/master/docs/revolver.props.currentslide.md): Holds the index number for the current slide.
* [**disabled**](https://github.com/revolverjs/revolverjs/blob/master/docs/revolver.props.disabled.md): Used internally to disable all functionality within a Revolver instance.
* [**intervalId**](https://github.com/revolverjs/revolverjs/blob/master/docs/revolver.props.intervalid.md): The ID that Revolver uses to when stopping or pausing playback.
* [**isAnimating**](https://github.com/revolverjs/revolverjs/blob/master/docs/revolver.props.isanimating.md): Equal to true if Revolver is currently animating, false if not.
* [**iteration**](https://github.com/revolverjs/revolverjs/blob/master/docs/revolver.props.iteration.md): A running count of how many times Revolver has transitioned.
* [**lastSlide**](https://github.com/revolverjs/revolverjs/blob/master/docs/revolver.props.lastslide.md): Holds the index key of the last (not previous) slide in the slider.
* [**nextSlide**](https://github.com/revolverjs/revolverjs/blob/master/docs/revolver.props.nextslide.md): Holds the index key of the next slide in the slider.
* [**numSlides**](https://github.com/revolverjs/revolverjs/blob/master/docs/revolver.props.numslides.md): A count of the total number of slides that Revolver is acting upon.
* [**options**](https://github.com/revolverjs/revolverjs/blob/master/docs/revolver.props.options.md): A congegation of all user-defined options, plugin-defined options, and Revolver's defaults.
* [**previousSlide**](https://github.com/revolverjs/revolverjs/blob/master/docs/revolver.props.previousslide.md): Holds the index key of the slide that was last in transition (before the current one).
* [**slides**](https://github.com/revolverjs/revolverjs/blob/master/docs/revolver.props.slides.md): Houses all the individual slides that Revolver is acting upon.
* [**status**](https://github.com/revolverjs/revolverjs/blob/master/docs/revolver.props.status.md): The current status of the Revolver instance, whether it is "stopped", "paused", or "playing".

## Customizing

Because of Revolver's unopinionated philosophy, it does very little out of the box and usually requires some small amount of customization, or even an extension or two to hit the sweet spot. And because of it's modular and event-driven architecture, it is pretty easy to bend it to your will. Here are a few really basic ideas to get you started:

* [**revolver-fade**](https://github.com/revolverjs/revolver-fade): Slides fade in and out from each other using jQuery.
* [**revolver-slide**](https://github.com/revolverjs/revolver-slide): The traditional sliding doors effect using Mootools.
* [**revolver-reveal**](https://github.com/revolverjs/revolver-reveal): A curtain effect using Query and GreenSock.
* [**revolver-inception**](https://github.com/revolverjs/revolver-inception): A slider within a slider.

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
