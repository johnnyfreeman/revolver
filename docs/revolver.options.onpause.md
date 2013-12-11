# onPause

**Type**: `Function`, **Default**: `function(){}`

This is a callback that you can pass through the options object to the constructor. Internally, it is registered as a listener to the [pause](revolver.events.pause.md) event using the [on](revolver.methods.on.md) method. The `this` variable inside the callback is equal to the Revolver instance.

```javascript
var slider =  new Revolver($('.slides'), {
  onPause: function() {
    // this == slider
  }
});
```

**Source Refs**: [[49](../coffee/revolver.coffee#L49), [69](../coffee/revolver.coffee#L69)]
