# play

This event is triggered when [play()](revolver.methods.play.md) is executed. You can register a callback for this event by passing it to the constructor as the [onPlay](revolver.options.onplay.md) option, or by passing it to the [on()](revolver.methods.on.md) method after instantiation.

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

**Source Refs**: [[47](../coffee/revolver.coffee#L47), [144](../coffee/revolver.coffee#L144)]
