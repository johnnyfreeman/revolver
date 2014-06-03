# ready

This event is triggered as soon as Revolver is completely setup and ready to go. It is somewhat unique from the other events as you can only register a callback for this event one way; by passing it to the constructor as the [onReady](../options/onready.md) option.

```javascript
var mySlider = new Revolver(mySlides, {
  onReady: function() {
    // do something when the slider is ready
  }
});
```