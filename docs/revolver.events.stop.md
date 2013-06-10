# stop

This event is triggered when [stop()](https://github.com/revolverjs/revolverjs/blob/master/docs/revolver.methods.stop.md) is executed. You can register a callback for this event by passing it to the constructor as the [transition.onStart](https://github.com/revolverjs/revolverjs/blob/master/docs/revolver.options.transition.onstart.md) option, or by passing it to the [on()](https://github.com/revolverjs/revolverjs/blob/master/docs/revolver.methods.on.md) method after instantiation.

```javascript
var mySlider = new Revolver(mySlides, {
  onStop: function() {
    // do something when the slider is stopped
  }
});

mySlider.on('stop', function() {
  // do something else too
});
```

**Source Refs**: [[48](https://github.com/revolverjs/revolverjs/blob/master/coffee/revolver.coffee#L48), [68](https://github.com/revolverjs/revolverjs/blob/master/coffee/revolver.coffee#L68), [186](https://github.com/revolverjs/revolverjs/blob/master/coffee/revolver.coffee#L186)]
