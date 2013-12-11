# onReady

**Type**: `Function`, **Default**: `function(){}`

This is a callback that you can pass through the options object to the constructor. Internally, it is registered as a listener to the [ready](revolver.events.ready.md) event using the [on](revolver.methods.on.md) method. The `this` variable inside the callback is equal to the Revolver instance.

```javascript
var slider =  new Revolver($('.slides'), {
  onReady: function() {
    // this == slider
  }
});
```

**Source Refs**: [[54](../coffee/revolver.coffee#L54), [66](../coffee/revolver.coffee#L66)]
