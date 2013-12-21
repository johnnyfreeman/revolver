# pause

This event is triggered when [pause()](../methods/pause.md) is executed. You can register a callback for this event by passing it to the constructor as the [onPause](../options/onpause.md) option, or by passing it to the [on()](../methods/on.md) method after instantiation.

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

**Source Refs**: [[49](../../../coffee/revolver.coffee#L49), [69](../../../coffee/revolver.coffee#L69), [172](../../../coffee/revolver.coffee#L172)]
