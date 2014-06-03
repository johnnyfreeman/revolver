# container

**Type**: `Object` ([Element](https://developer.mozilla.org/en-US/docs/Web/API/element)), **Default**: `document`

Use this option if you already have a reference to your slider container element. Use [containerSelector](containerselector.md) otherwise.

```javascript
var containerEl = document.querySelector('#myslider');
var slideEls = containerEl.querySelectorAll('.slides');

var mySlider = new Revolver({
  container: containerEl,
  slides: slideEls
});
```