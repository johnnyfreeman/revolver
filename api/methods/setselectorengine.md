# setSelectorEngine

**Type**: `Function`, **Returns**: `Object` (Revolver global)

Revolver uses it's [$]($.md) method to traverse the DOM, which should work great on all modern browsers. If you are concerned about cross-browser compatability, you may want Revolver to delegate all DOM traversal to a selector engine of your choice. 

The selector engine simply needs to be a function that takes two arguments: a selector string and a root element, it should return an array of matched DOM elements. [Qwery](https://github.com/ded/qwery), [Sel](https://github.com/amccollum/sel), [Sizzle](http://sizzlejs.com/), [NWMatcher](https://github.com/dperini/nwmatcher/) and other selector engines should all be compatible.

##### Using jQuery

```javascript
Revolver.setSelectorEngine(jQuery.find);
```

##### Using Qwery

```javascript
Revolver.setSelectorEngine(Qwery);
```
