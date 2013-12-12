define([
    'intern!object',
    'intern/chai!assert',
    'intern/order!../js/revolver.js'
], function (registerSuite, assert) {
  registerSuite({
    name: 'revolver',

    registerTransition: function () {
      assert.strictEqual(Revolver.registerTransition('test', function () {}), Revolver, 'Revolver.registerTransition should return the global Revolver object.');
    }
  });
});