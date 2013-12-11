# transitionStart

This event is triggered when the transition animation has begun. You can register a callback for this event by passing it to the constructor as the [transition.onStart](revolver.options.transition.onstart.md) option, or by passing it to the [on()](revolver.methods.on.md) method after instantiation.

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

**Source Refs**: [[51](../coffee/revolver.coffee#L51), [132](../coffee/revolver.coffee#L132)]
