# registerTransition(name, handler(options, done))

**Type**: `Function`, **Returns**: `Object` (Revolver global)

Registers a new transition with `Revolver`. The handler is passed two arguments: `options` and `done`. The options object is a blend of `this.options.transition` and the options object that was passed to the method that initiated the transition.

```javascript
Revolver.registerTransition('my_custom_transition', function(options, done) {
  // do some animation (or not)
  done(); // <-- this triggers the transitionComplete event
});
```

To utilize your new transition, just pass the `name` along as the [transition.name](../options/transition.name.md) option.
