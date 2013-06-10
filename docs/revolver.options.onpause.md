# onPause

**Type**: `Function`, **Default**: `function(){}`

This is a callback that you can pass through the options object to the constructor. Internally, it is registered as a listener to the [pause](https://github.com/revolverjs/revolverjs/blob/master/docs/revolver.events.pause.md) event using the [on](https://github.com/revolverjs/revolverjs/blob/master/docs/revolver.methods.on.md) method. The `this` variable inside the callback is equal to the Revolver instance.

```javascript
var slider =  new Revolver($('.slides'), {
  onPause: function() {
    // this == slider
  }
});
```

**Source Refs**: [[49](https://github.com/revolverjs/revolverjs/blob/master/coffee/revolver.coffee#L49), [69](https://github.com/revolverjs/revolverjs/blob/master/coffee/revolver.coffee#L69)]
