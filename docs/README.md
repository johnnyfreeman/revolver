# Revolver.js Documentation

For the time being, this is where the docs will be kept for the new version 2.0.

## Options

* **autoPlay**: Set to false if you do not want Revolver to begin playing immediately.
* **onPause()**: This is called everytime the pause() method is called.
* **onPlay()**: This is called everytime the play() method is called.
* **onReady()**: This is called as soon as Revolver is completely setup and ready to go.
* **onRestart()**: This is called everytime the restart() method is called.
* **onStop()**: This is called everytime the stop() method is called.
* **rotationSpeed**: The number of milliseconds to stay on each slide before transitioning to the next.
* **transition**: The transition option is just a namespace for the options that are specific to the transition itself.
** **name**: The type of transition to use for all transitions. See here for the full list of available transitions.
** **onFinish()**: This is called when the transition's animation is done.
** **onStart()**: This is called when the transition's animation has started.
** **speed**: The number of milliseconds the transition (animation) should last.

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