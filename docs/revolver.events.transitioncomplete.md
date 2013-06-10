# transitionComplete

This event is triggered when the transition animation has finished. You can register a callback for this event by passing it to the constructor as the [transition.onComplete](https://github.com/revolverjs/revolverjs/blob/master/docs/revolver.options.transition.oncomplete.md) option, or by passing it to the [on()](https://github.com/revolverjs/revolverjs/blob/master/docs/revolver.methods.on.md) method after instantiation.

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

**Source Refs**: [[45](https://github.com/revolverjs/revolverjs/blob/master/coffee/revolver.coffee#L45), [52](https://github.com/revolverjs/revolverjs/blob/master/coffee/revolver.coffee#L52), [272](https://github.com/revolverjs/revolverjs/blob/master/coffee/revolver.coffee#L272)]
