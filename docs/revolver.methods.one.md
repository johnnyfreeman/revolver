# one(event, callback)

**Type**: `Function`, **Returns**: `Object` (Instance of Revolver)

Alias for [on()](https://github.com/revolverjs/revolverjs/blob/master/docs/revolver.methods.on.md), except that the handler will removed after the first execution.

```javascript
mySlider.one('play', function() {
  // do something once
});
```
