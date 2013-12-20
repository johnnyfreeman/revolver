suite('Instance Methods', function () {
  
  // revolver instance
  var slider, originalSlider;
  setup(function() {
    slider = new Revolver({containerSelector: '#myslider', slidesSelector: '.slide'});
    originalSlider = _.clone(slider);
  });
  suiteTeardown(function () {
    slider = originalSlider = null;
  });
  
  // addSlide
  suite('#addSlide()', function() {
    test('adds one more to this.slides array', function () {
      numSlides = slider.slides.length;
      slider.addSlide(document.createElement("div"));
      assert.strictEqual(slider.slides.length, numSlides + 1);
    });
    
    test('recalculates this.numSlides correctly', function () {
      slider.addSlide(document.createElement("div"));
      assert.strictEqual(slider.numSlides, slider.slides.length);
    });
    
    test('recalculates this.nextSlide correctly', function () {
      nextSlide = slider.currentSlide === slider.lastSlide ? 0 : slider.currentSlide + 1;
      slider.addSlide(document.createElement("div"));
      assert.strictEqual(slider.nextSlide, nextSlide);
    });
  });
  
  // changeStatus
  suite('#changeStatus()', function() {
    test('plays', function () {
      slider.changeStatus('playing');
      assert.strictEqual(slider.status.playing, true);
      assert.strictEqual(slider.status.paused, false);
      assert.strictEqual(slider.status.stopped, false);
    });
    
    test('pauses', function () {
      slider.changeStatus('paused');
      assert.strictEqual(slider.status.playing, false);
      assert.strictEqual(slider.status.paused, true);
      assert.strictEqual(slider.status.stopped, false);
    });
    
    test('stops', function () {
      slider.changeStatus('stopped');
      assert.strictEqual(slider.status.playing, false);
      assert.strictEqual(slider.status.paused, false);
      assert.strictEqual(slider.status.stopped, true);
    });
  });
  
  // pause
  suite('#pause()', function() {
    test('changes status to paused if playing or stopped', function () {
      // from stopped
      slider.stop();
      slider.pause();
      assert.strictEqual(slider.status.paused, true);
      
      // from playing
      slider.play();
      slider.pause();
      assert.strictEqual(slider.status.paused, true);
    });
    
    test('this.intervalId is null', function () {
      slider.pause();
      assert.strictEqual(slider.intervalId, null);
    });
  });
  
  // play
  suite('#play()', function() {
    test('changes status to playing if paused or stopped', function () {
      // from stopped
      slider.stop();
      slider.play();
      assert.strictEqual(slider.status.playing, true);
      
      // from paused
      slider.pause();
      slider.play();
      assert.strictEqual(slider.status.playing, true);
    });
    
    test('this.intervalId isnt null', function () {
      slider.play();
      assert.notStrictEqual(slider.intervalId, null);
    });
  });
  
  // reset
  suite('#reset()', function() {
    test('only sets this.nextSlide to 0 if this.currentSlide doesnt equal 0', function () {
      slider.pause();
      slider.reset();
      assert.notStrictEqual(slider.nextSlide, 0);
      slider.goTo(1);
      slider.reset();
      assert.strictEqual(slider.nextSlide, 0);
    });
  });
  
  // restart
  suite('#restart()', function() {
    setup(function() {
      slider.restart();
    });
    
//    test('this.currentSlide equals 0', function () {
//      assert.strictEqual(slider.currentSlide, 0);
//    });
    
    test('slider is playing', function () {
      assert.strictEqual(slider.status.playing, true);
      assert.strictEqual(slider.status.paused, false);
      assert.strictEqual(slider.status.stopped, false);
    });
  });
  
  // setOptions
  suite('#setOptions()', function() {
    test('sets a new option', function () {
      slider.setOptions({foo: 'bar'});
      assert.strictEqual(slider.options.foo, 'bar');
    });
    
    test('overrides existing options', function () {
      slider.setOptions({slidesSelector: '.mySlides'});
      assert.strictEqual(slider.options.slidesSelector, '.mySlides');
    });
  });
  
  // stop
  suite('#stop()', function() {
    test('changes status to stopped if paused or playing', function () {
      // from playing
      slider.play();
      slider.stop();
      assert.strictEqual(slider.status.stopped, true);
      
      // from paused
      slider.pause();
      slider.stop();
      assert.strictEqual(slider.status.stopped, true);
    });
    
    test('this.intervalId is null', function () {
      slider.stop();
      assert.strictEqual(slider.intervalId, null);
    });
  });
  
});

// Static Methods
suite('Static Methods', function () {
  
  // registerTranistion
  suite('#registerTransition()', function() {
    var handler = function () {};
    var result = Revolver.registerTransition('test', handler);

    test('saves the handler in the transitions namespace', function () {
      assert.strictEqual(Revolver.transitions.test, handler);
    });

    test('returns the Revolver global object', function () {
      assert.strictEqual(result, Revolver);
    });
  });
  
});