# stop

This event is triggered when [stop()](../methods/stop.md) is executed. You can register a callback for this event by passing it to the constructor as the [onStop](../options/onstop.md) option, or by passing it to the [on()](../methods/on.md) method after instantiation.

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