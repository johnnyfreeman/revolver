define([
    'intern!object',
    'intern/chai!assert',
    'revolver/revolver'
], function (registerSuite, assert, Revolver) {

  registerSuite({
    name: 'revolver.js',

    setup: function () {

    },

    registerTransition: function () {
      var handler = function () {};
      var result = Revolver.registerTransition('test', handler);
      assert.strictEqual(Revolver.transitions['test'], handler, 'Revolver.registerTransition should save the handler in the Revolver.transitions namespace.');
      assert.strictEqual(result, Revolver, 'Revolver.registerTransition should return the Revolver global object.');
    }
  });
});