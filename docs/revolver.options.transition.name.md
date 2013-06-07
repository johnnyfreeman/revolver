# name

**Type**: `String`, **Default**: `"default"` 

This option dictates what method will handle the transition from one slide to the next. Each time Revolver is about to perform the transition, this option is accessed.

It can be passed to the constructor (under the [transition](https://github.com/revolverjs/revolverjs/blob/master/docs/revolver.options.transition.md) namespace).

```javascript
var slider = new Revolver(slides, { 
  transition: {
    name: 'myCustomTransition'
  }
});
```

It can also be passed to these instance methods to temporarily overide what is stored under the [transition](https://github.com/revolverjs/revolverjs/blob/master/docs/revolver.options.transition.md) namespace.

```javascript
slider.next({ name: 'someOtherTransition' });
```

**Source Refs**: [[75](https://github.com/revolverjs/revolverjs/blob/master/coffee/revolver.coffee#L75), [122](https://github.com/revolverjs/revolverjs/blob/master/coffee/revolver.coffee#L122)]
