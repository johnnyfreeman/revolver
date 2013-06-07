# onPause

Default: `function(){}` Type: `Function`

This is a callback that you can pass to the constructor through the options object. It will be registered to the [pause](https://github.com/revolverjs/revolverjs/blob/master/docs/revolver.events.pause.md) event.

```javascript
var slider =  new Revolver($('.slides'), {
  onPause: function() {
    // this == slider
  }
});
```

It is effectively the same as passing a callback straight to the [on](https://github.com/revolverjs/revolverjs/edit/master/docs/revolver.methods.on.md) method.

**Note**: The `this` variable inside the callback is equal to the Revolver instance.
