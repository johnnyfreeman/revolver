# autoPlay

**Type**: `Boolean`, **Default**: `true`

This option is passed through the options object to the constructor. If `true`, the slider will begin playback as soon as it is [ready](../events/ready.md). If `false`, it will not, and you will have to call the [play](../methods/play.md) method manually.

```javascript

var slider = new Revolver({
  autoPlay: false
  // ...
});
```