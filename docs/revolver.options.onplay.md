# onPlay

**Type**: `Function`, **Default**: `function(){}`

This is a callback that you can pass through the options object to the constructor. Internally, it is registered as a listener to the [play](revolver.events.play.md) event using the [on](revolver.methods.on.md) method. The `this` variable inside the callback is equal to the Revolver instance.

```javascript
var slider =  new Revolver($('.slides'), {
  onPlay: function() {
    // this == slider
  }
});
```

**Source Refs**: [[47](../coffee/revolver.coffee#L47), [67](../coffee/revolver.coffee#L67)]
