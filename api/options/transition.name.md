# name

**Type**: `String`, **Default**: `"default"` 

This option dictates what method will handle the transition from one slide to the next. Each time Revolver is about to perform the transition, this option is accessed.

It can be passed to the constructor (under the [transition](transition.md) namespace).

```javascript
var slider = new Revolver({ 
  transition: {
    name: 'myCustomTransition'
  }
  // ...
});
```

It can also be passed to a few instance methods ([play](../methods/play.md), [restart](../methods/restart.md), [goTo](../methods/goto.md), [first](../methods/first.md), [previous](../methods/previous.md), [next](../methods/next.md), [last](../methods/last.md)) to temporarily overide what is stored under the [transition](transition.md) namespace.

```javascript
slider.next({ name: 'someOtherTransition' });
```