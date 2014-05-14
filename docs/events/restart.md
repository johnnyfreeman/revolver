# restart

This event is triggered when [restart()](../methods/restart.md) is executed. You can register a callback for this event by passing it to the constructor as the [onRestart](../options/onrestart.md) option, or by passing it to the [on()](../methods/on.md) method after instantiation.

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