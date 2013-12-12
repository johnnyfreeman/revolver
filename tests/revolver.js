define([
    'intern!object',
    'intern/chai!assert',
    'revolver/revolver',
    'lodash/dist/lodash'
], function (registerSuite, assert, Revolver, _) {

  registerSuite({
    name: 'revolver.js',

    setup: function () {
      // container
      var container = document.createElement("div");
      container.id  = 'myslider';

      // 3 slides
      var s1 = document.createElement("div");
      s1.className = 'slide';
      container.appendChild(s1);

      var s2 = document.createElement("div");
      s2.className = 'slide';
      container.appendChild(s2);

      var s3 = document.createElement("div");
      s3.className = 'slide';
      container.appendChild(s3);

      // attach to document
      document.body.appendChild(container);
    },

    play: function () {
      var slider = new Revolver({containerSelector: '#myslider', slidesSelector: '.slide'});

      // do nothing if slider already playing
      var before = JSON.stringify(slider);
      slider.play();
      var after = JSON.stringify(slider);
      assert.strictEqual(before, after, 'play() should do nothing if already playing.');

      // do nothing if slider is disabled

      // change status to playing if paused

      // change status to playing if stopped
    },

    registerTransition: function () {
      var handler = function () {};
      var result = Revolver.registerTransition('test', handler);
      assert.strictEqual(Revolver.transitions['test'], handler, 'Revolver.registerTransition should save the handler in the Revolver.transitions namespace.');
      assert.strictEqual(result, Revolver, 'Revolver.registerTransition should return the Revolver global object.');
    }
  });
});