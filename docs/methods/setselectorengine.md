# setSelectorEngine

**Type**: `Function`, **Returns**: `Object` (Revolver global)

Revolver uses `querySelectorAll` to traverse the dom, but you may delegate that work to a selector engine. The selector engine simply needs to be a function that takes two arguments: a selector string and a root element, it should return an array of matched DOM elements. [Qwery](https://github.com/ded/qwery), [Sel](https://github.com/amccollum/sel), [Sizzle](http://sizzlejs.com/), [NWMatcher](https://github.com/dperini/nwmatcher/) and other selector engines should all be compatible with Revolver.

##### Using jQuery

```javascript
Revolver.setSelectorEngine(jQuery.find);
```

##### Using Qwery

```javascript
Revolver.setSelectorEngine(Qwery);
```
