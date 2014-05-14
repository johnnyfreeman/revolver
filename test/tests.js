(function() {
  suite('Instance Methods', function() {
    var originalSlider, slider;
    slider = void 0;
    originalSlider = void 0;
    setup(function() {
      slider = new Revolver({
        containerSelector: '#myslider',
        slidesSelector: '.slide'
      });
      return originalSlider = _.clone(slider);
    });
    suiteTeardown(function() {
      return slider = originalSlider = null;
    });
    suite('#addSlide()', function() {
      test('adds one more to this.slides array', function() {
        var numSlides;
        numSlides = slider.slides.length;
        slider.addSlide(document.createElement('div'));
        return assert.strictEqual(slider.slides.length, numSlides + 1);
      });
      test('recalculates this.numSlides correctly', function() {
        slider.addSlide(document.createElement('div'));
        return assert.strictEqual(slider.numSlides, slider.slides.length);
      });
      return test('recalculates this.nextSlide correctly', function() {
        var nextSlide;
        nextSlide = (slider.currentSlide === slider.lastSlide ? 0 : slider.currentSlide + 1);
        slider.addSlide(document.createElement('div'));
        return assert.strictEqual(slider.nextSlide, nextSlide);
      });
    });
    suite('#changeStatus()', function() {
      test('plays', function() {
        slider.changeStatus('playing');
        assert.strictEqual(slider.status.playing, true);
        assert.strictEqual(slider.status.paused, false);
        return assert.strictEqual(slider.status.stopped, false);
      });
      test('pauses', function() {
        slider.changeStatus('paused');
        assert.strictEqual(slider.status.playing, false);
        assert.strictEqual(slider.status.paused, true);
        return assert.strictEqual(slider.status.stopped, false);
      });
      return test('stops', function() {
        slider.changeStatus('stopped');
        assert.strictEqual(slider.status.playing, false);
        assert.strictEqual(slider.status.paused, false);
        return assert.strictEqual(slider.status.stopped, true);
      });
    });
    suite('#pause()', function() {
      test('changes status to paused if playing or stopped', function() {
        slider.stop();
        slider.pause();
        assert.strictEqual(slider.status.paused, true);
        slider.play();
        slider.pause();
        return assert.strictEqual(slider.status.paused, true);
      });
      return test('this.intervalId is null', function() {
        slider.pause();
        return assert.strictEqual(slider.intervalId, null);
      });
    });
    suite('#play()', function() {
      test('changes status to playing if paused or stopped', function() {
        slider.stop();
        slider.play();
        assert.strictEqual(slider.status.playing, true);
        slider.pause();
        slider.play();
        return assert.strictEqual(slider.status.playing, true);
      });
      return test('this.intervalId isnt null', function() {
        slider.play();
        return assert.notStrictEqual(slider.intervalId, null);
      });
    });
    suite('#reset()', function() {
      return test('only sets this.nextSlide to 0 if this.currentSlide doesnt equal 0', function() {
        slider.pause();
        slider.reset();
        assert.notStrictEqual(slider.nextSlide, 0);
        slider.goTo(1);
        slider.reset();
        return assert.strictEqual(slider.nextSlide, 0);
      });
    });
    suite('#restart()', function() {
      setup(function() {
        return slider.restart();
      });
      return test('slider is playing', function() {
        assert.strictEqual(slider.status.playing, true);
        assert.strictEqual(slider.status.paused, false);
        return assert.strictEqual(slider.status.stopped, false);
      });
    });
    suite('#setOptions()', function() {
      test('sets a new option', function() {
        slider.setOptions({
          foo: 'bar'
        });
        return assert.strictEqual(slider.options.foo, 'bar');
      });
      return test('overrides existing options', function() {
        slider.setOptions({
          slidesSelector: '.mySlides'
        });
        return assert.strictEqual(slider.options.slidesSelector, '.mySlides');
      });
    });
    suite('#stop()', function() {
      test('changes status to stopped if paused or playing', function() {
        slider.play();
        slider.stop();
        assert.strictEqual(slider.status.stopped, true);
        slider.pause();
        slider.stop();
        return assert.strictEqual(slider.status.stopped, true);
      });
      return test('this.intervalId is null', function() {
        slider.stop();
        return assert.strictEqual(slider.intervalId, null);
      });
    });
    return suite('#goTo()', function() {
      test('does nothing if disabled', function() {
        slider.goTo(0);
        slider.disabled = true;
        slider.goTo(slider.lastSlide);
        return assert.strictEqual(slider.currentSlide, 0);
      });
      return test('goes to intended slide', function() {
        var nextSlide;
        nextSlide = slider.nextSlide;
        slider.goTo(nextSlide);
        return assert.strictEqual(slider.currentSlide, nextSlide);
      });
    });
  });

  suite('Static Methods', function() {
    return suite('#registerTransition()', function() {
      var handler, result;
      handler = function() {};
      result = Revolver.registerTransition('test', handler);
      test('saves the handler in the transitions namespace', function() {
        return assert.strictEqual(Revolver.transitions.test, handler);
      });
      return test('returns the Revolver global object', function() {
        return assert.strictEqual(result, Revolver);
      });
    });
  });

}).call(this);
