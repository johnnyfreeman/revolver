# restart

This event is triggered when [restart()](https://github.com/revolverjs/revolverjs/blob/master/docs/revolver.methods.restart.md) is executed. You can register a callback for this event by passing it to the constructor as the [transition.onRestart](https://github.com/revolverjs/revolverjs/blob/master/docs/revolver.options.transition.onrestart.md) option, or by passing it to the [on()](https://github.com/revolverjs/revolverjs/blob/master/docs/revolver.methods.on.md) method after instantiation.

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

**Source Refs**: [[50](https://github.com/revolverjs/revolverjs/blob/master/coffee/revolver.coffee#L50), [70](https://github.com/revolverjs/revolverjs/blob/master/coffee/revolver.coffee#L70), [208](https://github.com/revolverjs/revolverjs/blob/master/coffee/revolver.coffee#L208)]
