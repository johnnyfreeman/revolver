# onStart

**Type**: `Function`, **Default**: `function(){}`

This is a callback that you can pass through the options object to the constructor. Internally, it is registered as a listener to the [transitionStart](https://github.com/revolverjs/revolverjs/blob/master/docs/revolver.events.transitionstart.md) event using the [on](https://github.com/revolverjs/revolverjs/blob/master/docs/revolver.methods.on.md) method. The `this` variable inside the callback is equal to the Revolver instance.

```javascript
var slider =  new Revolver($('.slides'), {
  transition: {
    onStart: function() {
      // this == slider
    }
  }
});
```

**Source Refs**: [[51](https://github.com/revolverjs/revolverjs/blob/master/coffee/revolver.coffee#L51), [73](https://github.com/revolverjs/revolverjs/blob/master/coffee/revolver.coffee#L73), [132](https://github.com/revolverjs/revolverjs/blob/master/coffee/revolver.coffee#L132)]
