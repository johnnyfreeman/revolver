# Revolver.js

Revolver is a javascript library to help you build your own content slider. It has a sensable API that helps you get from mockup to reality with less friction than the other "cookie-cutter" sliders out there. 

In fact, Revolver is a much lower component than most others. It's more of a framework than it is a complete solution. So, naturally, hand-writing a little javascript comes with the terratory. But don't let any of that scare you, it's pretty easy to get started!

[![Build Status](https://travis-ci.org/johnnyfreeman/revolverjs.png?branch=master)](https://travis-ci.org/johnnyfreeman/revolverjs) [![Selenium Test Status](https://saucelabs.com/buildstatus/revolverjs)](https://saucelabs.com/u/revolverjs) [![Code Climate](https://codeclimate.com/github/johnnyfreeman/revolverjs.png)](https://codeclimate.com/github/johnnyfreeman/revolverjs)

## Getting Started

For veterans, all you need to do is [install](#installation) Revolver and start customizing. However, if you are new to Revolver, it is highly recommended you study the documentation and check out a few of the [examples](#examples).

## Installation

The recommended way to install Revolver is with [Bower](http://bower.io/).

```shell
bower install revolverjs
```

It will resolve all of Revolver's dependencies for you, no need to go and download those separately. If you are unfamiliar with it, I highly recommend you take a look!

Of course, you can still take the ol' fashioned approach and [download](https://github.com/johnnyfreeman/revolverjs/archive/master.zip) and unzip it anywhere in your project. Just make sure you also do the same for Revolver's hard dependencies: [Lodash](http://lodash.com/) and [Bean](https://github.com/fat/bean).

## Usage

There are only two things that are required to instantiate Revolver: The css selectors to the container and slides.

```javascript
var mySlider = new Revolver({containerSelector: '#slidesContainer', slideSelector: '.slide'});
```

Or, the actual container and slides themselves.

```javascript
var mySlideContainer = document.getElementById('slidesContainer');
var mySlides = mySlideContainer.getElementsByClassName('slide');
var mySlider = new Revolver({container: mySlideContainer, slides: mySlides});
```

## Options

Revolver's defaults can be overwritten upon instantiation (as the second argument to the constructor) or at any time there-after (through the [setOptions()](docs/revolver.methods.setoptions.md) method).

* [**autoPlay**](docs/revolver.options.autoplay.md): Dictates whethor or not Revolver will begin playing immediately.
* [**container**](docs/revolver.options.container.md): Dom element that wraps all slide elements.
* [**containerSelector**](docs/revolver.options.containerselector.md): String selector used to find the container element.
* [**slides**](docs/revolver.options.slides.md): Array of dom elements (slides).
* [**slidesSelector**](docs/revolver.options.slidesselector.md): String selector used to find slides dom elements.
* [**onPause()**](docs/revolver.options.onpause.md): A callback that is executed every time the pause() method is called.
* [**onPlay()**](docs/revolver.options.onplay.md): A callback that is executed every time the play() method is called.
* [**onReady()**](docs/revolver.options.onready.md): A callback that is executed as soon as Revolver is completely setup and ready to go.
* [**onRestart()**](docs/revolver.options.onrestart.md): A callback that is executed every time the restart() method is called.
* [**onStop()**](docs/revolver.options.onstop.md): A callback that is executed every time the stop() method is called.
* [**rotationSpeed**](docs/revolver.options.rotationspeed.md): The number of milliseconds to stay on each slide before transitioning to the next.
* [**transition**](docs/revolver.options.transition.md): The transition option is just a namespace for the options that are specific to the transition itself.
  * [**name**](docs/revolver.options.transition.name.md): The type of transition to use for all transitions. See here for the full list of available transitions.
  * [**onComplete()**](docs/revolver.options.transition.oncomplete.md): A callback that is executed every time the transition's animation has completed.
  * [**onStart()**](docs/revolver.options.transition.onstart.md): A callback that is executed every time the transition's animation has started.

## Events

Revolver emits important events and exposes an event api so that you can hook into the core without actually having to hardcode your changes directly into the core.

* [**pause**](docs/revolver.events.pause.md): Fired every time the pause() method is called.
* [**play**](docs/revolver.events.play.md): Fired every time the play() method is called.
* [**ready**](docs/revolver.events.ready.md): Fired after instantiation as soon as Revolver is completely setup and ready to go.
* [**restart**](docs/revolver.events.restart.md): Fired every time the restart() method is called.
* [**stop**](docs/revolver.events.stop.md): Fired every time the stop() method is called.
* [**transitionStart**](docs/revolver.events.transitionstart.md): Fired every time the transition's animation has started.
* [**transitionComplete**](docs/revolver.events.transitioncomplete.md): Fired every time the transition's animation has completed.

## Instance Methods

Once you have instantiated Revolver, as shown [here](#usage), you then have access to all these methods.

* [**addSlide()**](docs/revolver.methods.addslide.md): Add a new slide to the [slides](docs/revolver.props.slides.md) array.
* [**first()**](docs/revolver.methods.first.md): Transition immediately to the first slide.
* [**goTo()**](docs/revolver.methods.goto.md): Transition immediately to any given slide.
* [**last()**](docs/revolver.methods.last.md): Transition immediately to the last (not previous) slide.
* [**next()**](docs/revolver.methods.next.md): Transition immediately to the next slide.
* [**pause()**](docs/revolver.methods.pause.md): Stops the slider but remembers it's position.
* [**play()**](docs/revolver.methods.play.md): Creates a continuous loop where the slider transitions to the next slide at the given interval.
* [**previous()**](docs/revolver.methods.previous.md): Transition immediately to the previous slide.
* [**reset()**](docs/revolver.methods.reset.md): Queues up the first slide to be next without forcing the transition to happen immediately.
* [**restart()**](docs/revolver.methods.restart.md): This is the functional equivalent to calling stop() and then play() consecutively.
* [**off()**](docs/revolver.methods.off.md): Removes a previously registered event listener.
* [**on()**](docs/revolver.methods.on.md): Registers an event listener.
* [**one()**](docs/revolver.methods.one.md): Alias for `on()` except that the handler will removed after the first execution.
* [**setOptions()**](docs/revolver.methods.setoptions.md): Merge new options with the existing options object.
* [**stop()**](docs/revolver.methods.stop.md): Stops the slider from transitioning to the next slide, and resets the slider.
* [**trigger()**](docs/revolver.methods.trigger.md): Executes all listeners for the given event.

## Instance Properties

Once you have instantiated Revolver, as shown [here](#usage), you then have access to all these properties.

* [**currentSlide**](docs/revolver.props.currentslide.md): Holds the index number for the current slide.
* [**disabled**](docs/revolver.props.disabled.md): Used internally to disable all functionality within a Revolver instance.
* [**intervalId**](docs/revolver.props.intervalid.md): The ID that Revolver uses to when stopping or pausing playback.
* [**isAnimating**](docs/revolver.props.isanimating.md): Equal to true if Revolver is currently animating, false if not.
* [**iteration**](docs/revolver.props.iteration.md): A running count of how many times Revolver has transitioned.
* [**lastSlide**](docs/revolver.props.lastslide.md): Holds the index key of the last (not previous) slide in the slider.
* [**nextSlide**](docs/revolver.props.nextslide.md): Holds the index key of the next slide in the slider.
* [**numSlides**](docs/revolver.props.numslides.md): A count of the total number of slides that Revolver is acting upon.
* [**options**](docs/revolver.props.options.md): A congegation of all user-defined options, plugin-defined options, and Revolver's defaults.
* [**previousSlide**](docs/revolver.props.previousslide.md): Holds the index key of the slide that was last in transition (before the current one).
* [**slides**](docs/revolver.props.slides.md): Houses all the individual slides that Revolver is acting upon.
* [**status**](docs/revolver.props.status.md): The current status of the Revolver instance, whether it is "stopped", "paused", or "playing".

## Static Methods

Certiain methods do not need access to a specific instance of Revolver and can be called on the `Revolver` object itself.

* [**setSelectorEngine()**](docs/revolver.methods.setselectorengine.md): Revolver uses `querySelectorAll` be default, which should work great on all modern browsers. If you need support for old browsers you can make Revolver us a third-party selector engine such as Qwery, Sel, Sizzle, NWMatcher, etc.
* [**registerTransition()**](docs/revolver.methods.registertransition.md): Register a custom transition with Revolver.

## Examples

Because of Revolver's unopinionated philosophy, it does very little out of the box and usually requires some small amount of customization to hit the sweet spot. And because of it's modular and event-driven architecture, it is pretty easy to bend it to your will. Here are a few really basic ideas to get you started:

* [**barebones-example**](https://github.com/johnnyfreeman/revolverjs-barebones-example): An out-of-the-box example.
* [**fade-example**](https://github.com/johnnyfreeman/revolverjs-fade-example): Slides fade in and out from each other using jQuery.
* [**reveal-example**](https://github.com/johnnyfreeman/revolverjs-reveal-example): A Curtain transition using Qwery and Greensock.
* [**inception-example**](https://github.com/johnnyfreeman/revolverjs-inception-example): A slider within a slider using Mootools.

## Contributing

Please review the [guidelines for contributing](CONTRIBUTING.md) before opening a pull request.
