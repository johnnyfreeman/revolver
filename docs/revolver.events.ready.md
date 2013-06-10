# ready

This event is triggered as soon as Revolver is completely setup and ready to go. It is somewhat unique from the other events as you can only register a callback for this event one way; by passing it to the constructor as the [transition.onReady](https://github.com/revolverjs/revolverjs/blob/master/docs/revolver.options.transition.onready.md) option.

```javascript
var mySlider = new Revolver(mySlides, {
  onReady: function() {
    // do something when the slider is ready
  }
});
```

**Source Refs**: [[54](https://github.com/revolverjs/revolverjs/blob/master/coffee/revolver.coffee#L54), [66](https://github.com/revolverjs/revolverjs/blob/master/coffee/revolver.coffee#L66)]
