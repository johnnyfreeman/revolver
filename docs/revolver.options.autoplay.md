# autoPlay

Default: `true` Type: `Boolean`

This option dictates whether the slider will begin playing when the [ready](https://github.com/revolverjs/revolverjs/blob/master/docs/revolver.events.ready.md) event is fired. Set to false if you do not want Revolver to begin playing immediately.

```javascript
// turn off autoPlay
$('#my_slider').revolver({autoPlay: false});
```