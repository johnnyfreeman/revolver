# transitionStart

This event is triggered when the transition animation has begun. You can register a callback for this event by passing it to the constructor as the [transition.onStart](https://github.com/revolverjs/revolverjs/blob/master/docs/revolver.options.transition.onstart.md) option, or by passing it to the [on()](https://github.com/revolverjs/revolverjs/blob/master/docs/revolver.methods.on.md) method after instantiation.

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

**Source Refs**: [[51](https://github.com/revolverjs/revolverjs/blob/master/coffee/revolver.coffee#L51), [132](https://github.com/revolverjs/revolverjs/blob/master/coffee/revolver.coffee#L132)]
