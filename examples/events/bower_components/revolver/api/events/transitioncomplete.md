# transitionComplete

This event is triggered when the transition animation has finished. You can register a callback for this event by passing it to the constructor as the [transition.onComplete](../options/transition.oncomplete.md) option, or by passing it to the [on()](../methods/on.md) method after instantiation.

```javascript
var mySlider = new Revolver(mySlides, {
  transition: {
    onComplete: function() {
      // do something at the end of every transition
    }
  }
});

mySlider.on('transitionComplete', function() {
  // do something else too
});
```