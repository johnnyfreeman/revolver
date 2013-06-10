# pause

This event is triggered when [pause()](https://github.com/revolverjs/revolverjs/blob/master/docs/revolver.methods.pause.md) is executed. You can register a callback for this event by passing it to the constructor as the [transition.onPause](https://github.com/revolverjs/revolverjs/blob/master/docs/revolver.options.transition.onpause.md) option, or by passing it to the [on()](https://github.com/revolverjs/revolverjs/blob/master/docs/revolver.methods.on.md) method after instantiation.

```javascript
var mySlider = new Revolver(mySlides, {
  onPause: function() {
    // do something when the slider starts
  }
});

mySlider.on('pause', function() {
  // do something else too
});
```

**Source Refs**: [[49](https://github.com/revolverjs/revolverjs/blob/master/coffee/revolver.coffee#L49), [69](https://github.com/revolverjs/revolverjs/blob/master/coffee/revolver.coffee#L69), [172](https://github.com/revolverjs/revolverjs/blob/master/coffee/revolver.coffee#L172)]
