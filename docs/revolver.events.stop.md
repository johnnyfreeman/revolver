# stop

This event is triggered when [stop()](docs/revolver.methods.stop.md) is executed. You can register a callback for this event by passing it to the constructor as the [onStart](docs/revolver.options.onstart.md) option, or by passing it to the [on()](docs/revolver.methods.on.md) method after instantiation.

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

**Source Refs**: [[48](coffee/revolver.coffee#L48), [68](coffee/revolver.coffee#L68), [186](coffee/revolver.coffee#L186)]
