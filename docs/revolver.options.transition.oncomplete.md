# onComplete

**Type**: `Function`, **Default**: `function(){}`

This is a callback that you can pass through the options object to the constructor. Internally, it is registered as a listener to the [transitionComplete](revolver.events.transitioncomplete.md) event using the [on](revolver.methods.on.md) method. The `this` variable inside the callback is equal to the Revolver instance.

```javascript
var slider =  new Revolver($('.slides'), {
  transition: {
    onComplete: function() {
      // this == slider
    }
  }
});
```

**Source Refs**: [[45](../coffee/revolver.coffee#L45), [52](../coffee/revolver.coffee#L52), [74](../coffee/revolver.coffee#L74), [272](../coffee/revolver.coffee#L272)]
