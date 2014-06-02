# addSlide

**Type**: `Function`, **Returns**: `Object` (Instance of Revolver)

The `addSlide` method is used internally to populate the slides array. You may use this same method to make your revolver slider aware of a new slide that you may have injected into the dom after instantiation.

```javascript
// using jquery
myNewSlide = $('#my-new-slide')[0]; // <-- returns the actual dom element, not the jquery object

mySlider.addSlide(myNewSlide);
```
