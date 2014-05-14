# transitionStart

This event is triggered when the transition animation has begun. You can register a callback for this event by passing it to the constructor as the [transition.onStart](../options/transition.onstart.md) option, or by passing it to the [on()](../methods/on.md) method after instantiation.

```javascript
var mySlider = new Revolver(mySlides, {
  transition: {
    onStart: function() {
      // do something at the start of every transition
    }
  }
});

mySlider.on('transitionStart', function() {
  // do something else too
});
```