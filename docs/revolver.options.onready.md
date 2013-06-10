# onReady

**Type**: `Function`, **Default**: `function(){}`

This is a callback that you can pass through the options object to the constructor. Internally, it is registered as a listener to the [ready](https://github.com/revolverjs/revolverjs/blob/master/docs/revolver.events.ready.md) event using the [on](https://github.com/revolverjs/revolverjs/blob/master/docs/revolver.methods.on.md) method. The `this` variable inside the callback is equal to the Revolver instance.

```javascript
var slider =  new Revolver($('.slides'), {
  onReady: function() {
    // this == slider
  }
});
```

**Source Refs**: [[54](https://github.com/revolverjs/revolverjs/blob/master/coffee/revolver.coffee#L54), [66](https://github.com/revolverjs/revolverjs/blob/master/coffee/revolver.coffee#L66)]
