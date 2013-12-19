suite('Revolver', function() {

  var slider;

  suite('#play()', function() {

    setup(function() {
      slider = new Revolver({containerSelector: '#myslider', slidesSelector: '.slide'});
    });

    suiteTeardown(function () {
      slider = null;
    });

    test('do nothing if already playing', function () {
      var previousSlider = _.clone(slider);
      slider.play();

      assert.strictEqual(previousSlider.currentSlide, slider.currentSlide);
      assert.strictEqual(previousSlider.nextSlide, slider.nextSlide);
      assert.strictEqual(previousSlider.previousSlide, slider.previousSlide);
    });

    // do nothing if slider is disabled

    // change status to playing if paused

    // change status to playing if stopped

  });

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
