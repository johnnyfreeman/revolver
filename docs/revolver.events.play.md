# play

This event is triggered when [play()](https://github.com/revolverjs/revolverjs/blob/master/docs/revolver.methods.play.md) is executed. You can register a callback for this event by passing it to the constructor as the [transition.onPlay](https://github.com/revolverjs/revolverjs/blob/master/docs/revolver.options.transition.onplay.md) option, or by passing it to the [on()](https://github.com/revolverjs/revolverjs/blob/master/docs/revolver.methods.on.md) method after instantiation.

```javascript
var mySlider = new Revolver(mySlides, {
  onPlay: function() {
    // do something when the slider starts
  }
});

mySlider.on('play', function() {
  // do something else too
});
```

**Source Refs**: [[47](https://github.com/revolverjs/revolverjs/blob/master/coffee/revolver.coffee#L47), [144](https://github.com/revolverjs/revolverjs/blob/master/coffee/revolver.coffee#L144)]
