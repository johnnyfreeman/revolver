/* =========================================================================================================
 *
 * "Y8888888b.                                     `Y88                                        ::
 *   888   Y88b                                     888
 *   888   dX8P   .d888b. `Y8b      d8P  .d8888b.   888 `Y8b      d8P  .d888b.  `Y88.d88b.    `Y88  .d8888b
 *   888888YK    d8P   Y8b  Y8b    d8P  d88P""Y88b  888   Y8b    d8P  d8P   Y8b  888P" "Y8b    888  88K
 *   888  "Y8b.  888888888   Y8b  d8P   88K    X88  888    Y8b  d8P   888888888  888           888  "Y8888b.
 *   888    88b  Y8b.         Y8bd8P    Y88b..d88P  888     Y8bd8P    Y8b.       888           888       X88
 * .d888    888   "Y888P"      Y88P      "Y8888P"   888.     Y88P      "Y888P"   888      ::   888   Y88888"
 *          Y88b.                                                                             .88P
 *                                                                                           d88"
 * =========================================================================================================
 * 
 * Revolver.js
 *
 * Revolver is a content slider built with no assumptions about your markup. Think of Revolver as a 
 * boilerplate or framework for making your own slider, exactly the way you want it. But don't let that 
 * scare you, it's really easy, I promise!
 * 
 * Documentation:   http://revolverjs.com
 * Support:         https://github.com/johnnyfreeman/revolver/issues
 * Bug Fixes:       https://github.com/johnnyfreeman/revolver/pulls
 * Author:          Johnny Freeman (http://johnnyfreeman.us)
 * 
 * Contribute:
 * 
 * If Revolver has been beneficial to you and you'd like to give back, there are a few ways you can 
 * contribute. You can answer questions on StackOverflow and our issue tracker. Or if you have a feature 
 * request or a bug fix you can submit a pull request on Github at http://github.com/johnnyfreeman/revolver.
 * 
 * License:
 * 
 * This software is open source and free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 */

;(function () {

  "use strict";

  // constructor
  var Revolver = function (slides, options) {
    // setup revolver
    this.options        = _.extend(this.defaults, options);
    this.currentSlide   = 0;

    // add slides
    _.each(slides, this.addSlide, this);

    this.previousSlide  = this.lastSlide;
    this.status         = { paused: false, playing: false, stopped: true };
    this.isAnimating    = false;

    // Completely disable Revolver
    // if there is only one slide
    if (this.numSlides <= 1) {
      this.disabled   = true;
      return;
    }

    // always disable isAnimating flag 
    // after transition is complete
    this.on('transitionComplete', function() {
      this.isAnimating = false;
    });

    // register all event handlers
    this.on('play', this.options.onPlay);
    this.on('stop', this.options.onStop);
    this.on('pause', this.options.onPause);
    this.on('restart', this.options.onRestart);
    this.on('transitionStart', this.options.transition.onStart);
    this.on('transitionComplete', this.options.transition.onComplete);

    // fire onReady event handler
    _.bind(this.options.onReady, this)();

    // begin auto play, if enabled
    if (this.options.autoPlay)
    {
      this.play({}, true);
    }

    return this;
  };
  
  // default options
  Revolver.prototype.defaults = {
    autoPlay:           true,           // whether or not to automatically begin playing the slides
    onReady:            function(){},   // gets called when revolver is setup and ready to go
    onPlay:             function(){},   // gets called when the play() method is called
    onStop:             function(){},   // gets called when the stop() method is called
    onPause:            function(){},   // gets called when the pause() method is called
    onRestart:          function(){},   // gets called when the restart() method is called
    rotationSpeed:      4000,           // how long (in milliseconds) to stay on each slide before going to the next
    transition: {
      easing:         'swing',        // default easing method
      onStart:        function(){},   // gets called when the transition animation begins
      onFinish:       false,          // deprecated
      onComplete:     function(){},   // gets called when the animation is done
      speed:          500,            // how long (in milliseconds) the transition should last
      name:           'fade'          // default transition
    }
  };

  Revolver.prototype.previousSlide = null;     // key for previous slide
  Revolver.prototype.currentSlide  = null;     // key for current slide
  Revolver.prototype.nextSlide     = null;     // key for next slide
  Revolver.prototype.numSlides     = 0;        // total number of slides
  Revolver.prototype.lastSlide     = null;     // key for last slide
  Revolver.prototype.container     = null;     // the wrapper element for all images
  Revolver.prototype.slides        = [];       // array of slides
  Revolver.prototype.iteration     = 0;        // keeps track of the number of transitions that have occured
  Revolver.prototype.intervalId    = null;     // id set by setInterval(), used for pause() method
  Revolver.prototype.status        = null;     // will contain the state of the slider
  Revolver.prototype.options       = null;     // will contain all options for the slider
  Revolver.prototype.dimensions    = null;     // contains width & height of the slider
  Revolver.prototype.isAnimating   = null;     // whethor revolver is currently in transition
  Revolver.prototype.disabled      = false;    // disables all functionality in a Revolver instance
  Revolver.prototype.VERSION       = '2.0';  // version info

  Revolver.prototype.addSlide = function(slide) {
    this.slides.push(slide);

    this.numSlides     = this.slides.length;
    this.lastSlide     = this.numSlides === 0 ? 0 : this.numSlides - 1;
    var currentPlusOne = this.currentSlide + 1;
    this.nextSlide     = currentPlusOne > this.lastSlide ? 0 : currentPlusOne;
  };

  // changes the status of the slider
  Revolver.prototype.changeStatus = function(newStatus) {
    // set all status' as false
    _.each(this.status, function(key, val) {
      this.status[key] = key === newStatus;
    }, this);

    return this;
  };

  // do transition
  Revolver.prototype.transition = function(options) {
    if (this.disabled === false && this.isAnimating === false)  {
      options             = _.extend(this.options.transition, options);
      var doTransition    = _.bind(this.transitions[options.type], this);
      this.isAnimating    = true;

      // do transition
      doTransition(options);

      // update slider position
      this.currentSlide   = this.nextSlide;
      this.previousSlide  = this.currentSlide === 0 ? this.lastSlide : this.currentSlide - 1;
      this.nextSlide      = this.currentSlide === this.lastSlide ? 0 : this.currentSlide + 1;
      this.iteration++;

      // fire onTransition event
      this.trigger('transitionStart');
    }

    return this;
  };

  // logic for transitions
  Revolver.prototype.transitions = {
    none: function(options) {
      this.slides.eq(this.currentSlide).hide();
      this.slides.eq(this.nextSlide).show();
      this.trigger('transitionComplete');
    }
  };

  // play the slider
  Revolver.prototype.play = function(options, firstTime) {
    if (this.disabled === false && !this.status.playing) {
      this.changeStatus('playing');
      this.trigger('play');

      // if this isn't the first run
      // then do transition immediately
      if (!firstTime)
      {
        this.transition(options);
      }

      this.intervalId = setInterval( _.bind(this.transition, this), parseFloat(this.options.rotationSpeed));
    }

    return this;
  };

  // pause the slider
  Revolver.prototype.pause = function() {
    if (this.disabled === false && !this.status.paused) {
      this.changeStatus('paused');
      this.trigger('pause');

      if (this.intervalId !== null) {
        clearInterval(this.intervalId);
        this.intervalId = null;
      }
    }

    return this;
  };

  // stop the slider
  Revolver.prototype.stop = function() {
    if (this.disabled === false && !this.status.stopped) {
      this.changeStatus('stopped');
      this.trigger('stop');

      if (this.intervalId !== null) {
        clearInterval(this.intervalId);
        this.intervalId = null;
      }
    }
    
    return this.reset();
  };

  // queues up the first slide
  Revolver.prototype.reset = function() {
    // reset only if not already on the first slide
    if (this.currentSlide !== 0)  {
      this.nextSlide = 0;
    }

    return this;
  };

  // restart the slider
  Revolver.prototype.restart = function(options) {
    if (this.disabled === true) {
      return this;
    }

    this.trigger('restart');
    return this.stop().play(options);
  };

  // go to the first slide
  Revolver.prototype.first = function(options) {
    return this.goTo(0, options);
  };

  // go to the previous slide
  Revolver.prototype.previous = function(options) {
    return this.goTo(this.previousSlide, options);
  };

  // go to a specific slide
  // most other methods use this one
  Revolver.prototype.goTo = function(i, options) {
    // keep transition arithmetic from breaking
    i = parseInt(i);

    // bail out if already
    // on the intended slide
    if (this.disabled === true || i === this.currentSlide) {
      return this;
    }

    this.nextSlide = i;

    return !this.status.playing ? this.transition(options) : this.pause().play(options);
  };

  // go to the next slide
  Revolver.prototype.next = function(options) {
    return this.goTo(this.nextSlide, options);
  };

  // go to the last slide
  Revolver.prototype.last = function(options) {
    return this.goTo(this.lastSlide, options);
  };

  // attaches event listeners
  Revolver.prototype.on = function(eventName, callback) {
    return bean.on(this.events, eventName, _.bind(callback, this));
  };

  // alias for on() except that the handler 
  // will removed after the first execution
  Revolver.prototype.one = function(eventName, callback) {
    return bean.one(this.events, eventName, _.bind(callback, this));
  };

  // removes event listeners
  Revolver.prototype.off = function(eventName, callback) {
    return bean.off(this.events, eventName, _.bind(callback, this));
  };

  // triggers an event
  Revolver.prototype.trigger = function(eventName) {
    return bean.fire(this.events, eventName);
  };

  // make Revolver globally available
  this.Revolver = Revolver;

})();