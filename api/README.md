# API

## Options

Revolver's defaults can be overwritten upon instantiation (as the second argument to the constructor) or at any time there-after (through the [setOptions()](methods/setoptions.md) method).

* [**autoPlay**](options/autoplay.md): Dictates whethor or not Revolver will begin playing immediately.
* [**container**](options/container.md): Dom element that wraps all slide elements.
* [**containerSelector**](options/containerselector.md): String selector used to find the container element.
* [**slides**](options/slides.md): Array of dom elements (slides).
* [**slidesSelector**](options/slidesselector.md): String selector used to find slides dom elements.
* [**onPause()**](options/onpause.md): A callback that is executed every time the pause() method is called.
* [**onPlay()**](options/onplay.md): A callback that is executed every time the play() method is called.
* [**onReady()**](options/onready.md): A callback that is executed as soon as Revolver is completely setup and ready to go.
* [**onRestart()**](options/onrestart.md): A callback that is executed every time the restart() method is called.
* [**onStop()**](options/onstop.md): A callback that is executed every time the stop() method is called.
* [**rotationSpeed**](options/rotationspeed.md): The number of milliseconds to stay on each slide before transitioning to the next.
* [**transition**](options/transition.md): The transition option is just a namespace for the options that are specific to the transition itself.
  * [**name**](options/transition.name.md): The type of transition to use for all transitions. See here for the full list of available transitions.
  * [**onComplete()**](options/transition.oncomplete.md): A callback that is executed every time the transition's animation has completed.
  * [**onStart()**](options/transition.onstart.md): A callback that is executed every time the transition's animation has started.

## Events

Revolver emits important events and exposes an event api so that you can hook into the core without actually having to hardcode your changes directly into the core.

* [**pause**](events/pause.md): Fired every time the pause() method is called.
* [**play**](events/play.md): Fired every time the play() method is called.
* [**ready**](events/ready.md): Fired after instantiation as soon as Revolver is completely setup and ready to go.
* [**restart**](events/restart.md): Fired every time the restart() method is called.
* [**stop**](events/stop.md): Fired every time the stop() method is called.
* [**transitionStart**](events/transitionstart.md): Fired every time the transition's animation has started.
* [**transitionComplete**](events/transitioncomplete.md): Fired every time the transition's animation has completed.

## Instance Methods

Once you have instantiated Revolver, as shown [here](#usage), you then have access to all these methods.

* [**addSlide()**](methods/addslide.md): Add a new slide to the [slides](props/slides.md) array.
* [**first()**](methods/first.md): Transition immediately to the first slide.
* [**goTo()**](methods/goto.md): Transition immediately to any given slide.
* [**last()**](methods/last.md): Transition immediately to the last (not previous) slide.
* [**next()**](methods/next.md): Transition immediately to the next slide.
* [**pause()**](methods/pause.md): Stops the slider but remembers it's position.
* [**play()**](methods/play.md): Creates a continuous loop where the slider transitions to the next slide at the given interval.
* [**previous()**](methods/previous.md): Transition immediately to the previous slide.
* [**reset()**](methods/reset.md): Queues up the first slide to be next without forcing the transition to happen immediately.
* [**restart()**](methods/restart.md): This is the functional equivalent to calling stop() and then play() consecutively.
* [**off()**](methods/off.md): Removes a previously registered event listener.
* [**on()**](methods/on.md): Registers an event listener.
* [**one()**](methods/one.md): Alias for `on()` except that the handler will removed after the first execution.
* [**setOptions()**](methods/setoptions.md): Merge new options with the existing options object.
* [**stop()**](methods/stop.md): Stops the slider from transitioning to the next slide, and resets the slider.
* [**trigger()**](methods/trigger.md): Executes all listeners for the given event.

## Instance Properties

Once you have instantiated Revolver, as shown [here](#usage), you then have access to all these properties.

* [**currentSlide**](props/currentslide.md): Holds the index number for the current slide.
* [**disabled**](props/disabled.md): Used internally to disable all functionality within a Revolver instance.
* [**intervalId**](props/intervalid.md): The ID that Revolver uses to when stopping or pausing playback.
* [**isAnimating**](props/isanimating.md): Equal to true if Revolver is currently animating, false if not.
* [**iteration**](props/iteration.md): A running count of how many times Revolver has transitioned.
* [**lastSlide**](props/lastslide.md): Holds the index key of the last (not previous) slide in the slider.
* [**nextSlide**](props/nextslide.md): Holds the index key of the next slide in the slider.
* [**numSlides**](props/numslides.md): A count of the total number of slides that Revolver is acting upon.
* [**options**](props/options.md): A congegation of all user-defined options, plugin-defined options, and Revolver's defaults.
* [**previousSlide**](props/previousslide.md): Holds the index key of the slide that was last in transition (before the current one).
* [**slides**](props/slides.md): Houses all the individual slides that Revolver is acting upon.
* [**status**](props/status.md): The current status of the Revolver instance, whether it is "stopped", "paused", or "playing".

## Static Methods

Certain methods do not need access to a specific instance of Revolver and can be called on the `Revolver` object itself.

* [**$()**](methods/$.md): Internally used for DOM traversal.
* [**setSelectorEngine()**](methods/setselectorengine.md): Make Revolver use a third-party selector engine.
* [**registerTransition()**](methods/registertransition.md): Register a custom transition with Revolver.
