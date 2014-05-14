# slides

**Type**: `Object` ([NodeList](https://developer.mozilla.org/en-US/docs/Web/API/NodeList)), **Default**: `null`

Use this option if you already have a reference to your slide elements. Use [slidesSelector](slidesselector.md) otherwise.

```javascript
var containerEl = document.querySelector('#myslider');
var slideEls = containerEl.querySelectorAll('.slides');

var mySlider = new Revolver({
  container: containerEl,
  slides: slideEls
});
```