# onPause

Default: `function(){}` Type: `Function`

This callback will be registered to the [pause](https://github.com/revolverjs/revolverjs/blob/master/docs/revolver.events.pause.md) event.

```javascript
$('#my_slider').revolver({
    onPause: function() {
        // your code here
    }
});
```

**Note**: The `this` variable is equal to the Revolver object.