// use Sizzle for greater browser compatability
Revolver.setSelectorEngine($.find);

// Start it up
var mySlider = new Revolver({
  containerSelector: '.slider',
  slidesSelector: '.slide'
});

// upon "play" and "transitionStart" events, do animation
var $progressEl = $('.progress');
mySlider.on('play transitionStart', function () {
  // start progress at zero
  $progressEl.css('width', 0)

  var duration = this.options.rotationSpeed;
  $progressEl.velocity({width: '100%'}, {
    duration: duration-100,
    easing: 'none'
  });
});
