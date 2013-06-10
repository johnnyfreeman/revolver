# onComplete

**Type**: `Function`, **Default**: `function(){}`

This is a callback that you can pass through the options object to the constructor. Internally, it is registered as a listener to the [transitionComplete](https://github.com/revolverjs/revolverjs/blob/master/docs/revolver.events.transitioncomplete.md) event using the [on](https://github.com/revolverjs/revolverjs/blob/master/docs/revolver.methods.on.md) method. The `this` variable inside the callback is equal to the Revolver instance.

```javascript
var slider =  new Revolver($('.slides'), {
  transition: {
    onComplete: function() {
      // this == slider
    }
  }
});
```

**Source Refs**: [[45](https://github.com/revolverjs/revolverjs/blob/master/coffee/revolver.coffee#L45), [52](https://github.com/revolverjs/revolverjs/blob/master/coffee/revolver.coffee#L52), [74](https://github.com/revolverjs/revolverjs/blob/master/coffee/revolver.coffee#L74), [272](https://github.com/revolverjs/revolverjs/blob/master/coffee/revolver.coffee#L272)]
