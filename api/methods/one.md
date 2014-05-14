# one(event, callback)

**Type**: `Function`, **Returns**: `Object` (Instance of Revolver)

Alias for [on()](on.md), except that the handler will removed after the first execution.

```javascript
mySlider.one('play', function() {
  // do something once
});
```

For more information on how `one()` works, please see [Bean's documentation on it](https://github.com/fat/bean#one).
