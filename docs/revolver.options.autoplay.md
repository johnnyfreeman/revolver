# autoPlay

**Default**: `true` 

**Type**: `Boolean`

This option it passed through the options object to the constructor. If `true`, the slider will begin playback as soon as it is [ready](https://github.com/revolverjs/revolverjs/blob/master/docs/revolver.events.ready.md). If `false`, it will not, and you will have to call the [play](https://github.com/revolverjs/revolverjs/edit/master/docs/revolver.methods.play.md) method manually. 

```javascript
var slider = new Revolver(slides, { autoPlay: false });
```
