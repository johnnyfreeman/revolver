# Revolver.js Documentation

For the time being, this is where the docs will be kept for the new version 2.0.

## Options

Although most plugins add their own set of options, Revolver comes with a few options built in that can be overwritten upon instantiation through the constructor or at any time there-after through the `setOptions()` method.

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

```
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