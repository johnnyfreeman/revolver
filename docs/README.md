# Revolver.js Documentation

For the time being, this is where the docs will be kept for the new version 2.0.

## Options

Although most plugins add their own set of options, Revolver comes with a few options built in that can be overwritten upon instantiation [through the constructor](#setting-options-through-the-constructor) or at any time there-after [through the `setOptions()` method](#setting-options-through-the-setoptions-method).

* **autoPlay**: Dictates whethor or not Revolver will begin playing immediately.
* **onPause()**: A callback that is executed every time the pause() method is called.
* **onPlay()**: A callback that is executed every time the play() method is called.
* **onReady()**: A callback that is executed as soon as Revolver is completely setup and ready to go.
* **onRestart()**: A callback that is executed every time the restart() method is called.
* **onStop()**: A callback that is executed every time the stop() method is called.
* **rotationSpeed**: The number of milliseconds to stay on each slide before transitioning to the next.
* **transition**: The transition option is just a namespace for the options that are specific to the transition itself.
  * **name**: The type of transition to use for all transitions. See here for the full list of available transitions.
  * **onComplete()**: A callback that is executed every time the transition's animation has completed.
  * **onStart()**: A callback that is executed every time the transition's animation has started.
  * **speed**: The number of milliseconds the transition (animation) should last.

#### Setting options through the constructor

```
var mySlider = new Revolver(mySlides, {
	autoPlay: false,
	onStop: function() {
		aleft('The slider has been stopped.');	
	}
});
```

#### Setting options through the `setOptions()` method

```
// sometime after you have the Revolver instance...
mySlider.setOptions({rotationSpeed: 1500});
```

## Events

Revolver emits important events and exposes an event api so that you can hook into the core without actually having to hardcode your changes directly into the core. 

* pause
* play
* ready
* restart
* stop
* transitionStart
* transitionComplete

## Instance Methods

* first()
* goTo()
* last()
* next()
* pause()
* play()
* previous()
* reset()
* restart()
* on()
* one()
* off()
* setOptions()
* stop()
* trigger()

## Instance Properties

* currentSlide
* disabled
* intervalId
* isAnimating
* iteration
* lastSlide
* nextSlide
* numSlides
* options
* previousSlide
* slides
* status