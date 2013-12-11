# restart

This event is triggered when [restart()](revolver.methods.restart.md) is executed. You can register a callback for this event by passing it to the constructor as the [onRestart](revolver.options.onrestart.md) option, or by passing it to the [on()](revolver.methods.on.md) method after instantiation.

```javascript
var mySlider = new Revolver(mySlides, {
  onRestart: function() {
    // do something when the slider is restarted
  }
});

mySlider.on('restart', function() {
  // do something else too
});
```

**Source Refs**: [[50](../coffee/revolver.coffee#L50), [70](../coffee/revolver.coffee#L70), [208](../coffee/revolver.coffee#L208)]
