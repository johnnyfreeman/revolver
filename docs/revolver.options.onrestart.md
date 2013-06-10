# onRestart

**Type**: `Function`, **Default**: `function(){}`

This is a callback that you can pass through the options object to the constructor. Internally, it is registered as a listener to the [restart](https://github.com/revolverjs/revolverjs/blob/master/docs/revolver.events.restart.md) event using the [on](https://github.com/revolverjs/revolverjs/blob/master/docs/revolver.methods.on.md) method. The `this` variable inside the callback is equal to the Revolver instance.

```javascript
var slider =  new Revolver($('.slides'), {
  onRestart: function() {
    // this == slider
  }
});
```

**Source Refs**: [[50](https://github.com/revolverjs/revolverjs/blob/master/coffee/revolver.coffee#L50), [70](https://github.com/revolverjs/revolverjs/blob/master/coffee/revolver.coffee#L70)]
