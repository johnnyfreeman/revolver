# name

**Type**: `String`, **Default**: `"default"` 

This option dictates what method will handle the transition from one slide to the next. Each time Revolver is about to perform the transition, this option is accessed.

It can be passed to the constructor (under the [transition](revolver.options.transition.md) namespace).

```javascript
var slider = new Revolver(slides, { 
  transition: {
    name: 'myCustomTransition'
  }
});
```

It can also be passed to a few instance methods ([play](revolver.methods.play.md), [restart](revolver.methods.restart.md), [goTo](revolver.methods.goto.md), [first](revolver.methods.first.md), [previous](revolver.methods.previous.md), [next](revolver.methods.next.md), [last](revolver.methods.last.md)) to temporarily overide what is stored under the [transition](revolver.options.transition.md) namespace.

```javascript
slider.next({ name: 'someOtherTransition' });
```

**Source Refs**: [[75](../coffee/revolver.coffee#L75), [122](../coffee/revolver.coffee#L122)]
