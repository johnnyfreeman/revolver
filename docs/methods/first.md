# first(options)

**Type**: `Function`, **Returns**: `Object` (Instance of Revolver)

Transition immediately to the first slide.

```javascript
mySlider.first();
```

You may also temporarily overide [transition options](../options/transition.md) by passing them as the first argument.

```javascript
mySlider.first({
  onComplete: function() {
    // this == mySlider
    console.log('Hey, we are back at one!');
  }
});
```
