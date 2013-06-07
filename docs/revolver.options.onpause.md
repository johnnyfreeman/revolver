# onPause

Default: `function(){}` Type: `Function`

This callback will be registered to the [pause](https://github.com/revolverjs/revolverjs/blob/master/docs/revolver.events.pause.md) event.

```javascript
var slider =  new Revolver($('.slides'), {
    onPause: function() {
        // this == slider
    }
});
```

**Note**: The `this` variable inside the callback is equal to the Revolver instance. So you may call instance methods