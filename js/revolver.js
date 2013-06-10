(function() {
  'use strict';
  var Revolver;

  Revolver = function(slides, options) {
    this.currentSlide = 0;
    this.nextSlide = 0;
    this.numSlides = 0;
    this.lastSlide = 0;
    this.slides = [];
    this.iteration = 0;
    this.intervalId = null;
    this.disabled = false;
    this.options = _.merge({}, Revolver.defaults, options);
    _.each(slides, this.addSlide, this);
    this.previousSlide = this.lastSlide;
    this.status = {
      paused: false,
      playing: false,
      stopped: true
    };
    this.isAnimating = false;
    if (this.numSlides <= 1) {
      this.disabled = true;
      return;
    }
    this.on('transitionComplete', function() {
      return this.isAnimating = false;
    });
    this.on('play', this.options.onPlay);
    this.on('stop', this.options.onStop);
    this.on('pause', this.options.onPause);
    this.on('restart', this.options.onRestart);
    this.on('transitionStart', this.options.transition.onStart);
    this.on('transitionComplete', this.options.transition.onComplete);
    _.bind(this.options.onReady, this)();
    if (this.options.autoPlay) {
      this.play({}, true);
    }
    return this;
  };

  Revolver.defaults = {
    autoPlay: true,
    onReady: function() {},
    onPlay: function() {},
    onStop: function() {},
    onPause: function() {},
    onRestart: function() {},
    rotationSpeed: 4000,
    transition: {
      onStart: function() {},
      onComplete: function() {},
      name: 'default'
    }
  };

  Revolver.VERSION = '2.0';

  Revolver.prototype.addSlide = function(slide) {
    var currentPlusOne;
    this.slides.push(slide);
    this.numSlides = this.slides.length;
    this.lastSlide = (this.numSlides === 0 ? 0 : this.numSlides - 1);
    currentPlusOne = this.currentSlide + 1;
    this.nextSlide = (currentPlusOne > this.lastSlide ? 0 : currentPlusOne);
    return this;
  };

  Revolver.prototype.setOptions = function(options) {
    _.merge(this.options, options);
    return this;
  };

  Revolver.prototype.changeStatus = function(newStatus) {
    _.each(this.status, (function(status) {
      return this.status[status] = status === newStatus;
    }), this);
    return this;
  };

  Revolver.prototype.transition = function(options) {
    if (this.disabled === false && this.isAnimating === false) {
      options = _.merge({}, this.options.transition, options);
      this.isAnimating = true;
      _.bind(Revolver.transitions[options.name], this)(options);
      this.currentSlide = this.nextSlide;
      this.previousSlide = (this.currentSlide === 0 ? this.lastSlide : this.currentSlide - 1);
      this.nextSlide = (this.currentSlide === this.lastSlide ? 0 : this.currentSlide + 1);
      this.iteration++;
      this.trigger('transitionStart');
    }
    return this;
  };

  Revolver.prototype.play = function(options, firstTime) {
    if (this.disabled === false && !this.status.playing) {
      this.changeStatus('playing');
      this.trigger('play');
      if (!firstTime) {
        this.transition(options);
      }
      this.intervalId = setInterval(_.bind(this.transition, this), parseFloat(this.options.rotationSpeed));
    }
    return this;
  };

  Revolver.prototype._clearInterval = function() {
    if (this.intervalId !== null) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
    return this;
  };

  Revolver.prototype.pause = function() {
    if (this.disabled === false && !this.status.paused) {
      this.changeStatus('paused');
      this.trigger('pause');
      this._clearInterval();
    }
    return this;
  };

  Revolver.prototype.stop = function() {
    if (this.disabled === false && !this.status.stopped) {
      this.changeStatus('stopped');
      this.trigger('stop');
      this._clearInterval();
      this.reset();
    }
    return this;
  };

  Revolver.prototype.reset = function() {
    if (this.currentSlide !== 0) {
      this.nextSlide = 0;
    }
    return this;
  };

  Revolver.prototype.restart = function(options) {
    if (this.disabled === true) {
      return this;
    }
    this.trigger('restart');
    this.stop().play(options);
    return this;
  };

  Revolver.prototype.goTo = function(i, options) {
    i = parseInt(i);
    if (this.disabled === true || i === this.currentSlide) {
      return this;
    }
    this.nextSlide = i;
    if (!this.status.playing) {
      return this.transition(options);
    } else {
      return this.pause().play(options);
    }
  };

  Revolver.prototype.first = function(options) {
    return this.goTo(0, options);
  };

  Revolver.prototype.previous = function(options) {
    return this.goTo(this.previousSlide, options);
  };

  Revolver.prototype.next = function(options) {
    return this.goTo(this.nextSlide, options);
  };

  Revolver.prototype.last = function(options) {
    return this.goTo(this.lastSlide, options);
  };

  Revolver.prototype.on = function(eventName, callback) {
    bean.on(this, 'revolver.' + eventName, _.bind(callback, this));
    return this;
  };

  Revolver.prototype.one = function(eventName, callback) {
    bean.one(this, 'revolver.' + eventName, _.bind(callback, this));
    return this;
  };

  Revolver.prototype.off = function(eventName, callback) {
    bean.off(this, 'revolver.' + eventName, _.bind(callback, this));
    return this;
  };

  Revolver.prototype.trigger = function(eventName) {
    bean.fire(this, 'revolver.' + eventName);
    return this;
  };

  Revolver.transitions = {};

  Revolver.transitions['default'] = function(options) {
    this.slides[this.currentSlide].setAttribute('style', 'display: none');
    this.slides[this.nextSlide].setAttribute('style', 'display: block');
    this.trigger('transitionComplete');
    return this;
  };

  window.Revolver = Revolver;

}).call(this);

/*
//@ sourceMappingURL=../source-maps/revolver.js.map
*/