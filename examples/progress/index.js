// use Sizzle for greater browser compatability
Revolver.setSelectorEngine($.find);

var mySlider = new Revolver({
  containerSelector: '.slider',
  slidesSelector: '.slide',
  onReady: function () {
    var $progressEl = $('.progress');
    // upon "play" and "transitionStart" events, do animation
    this.on('play transitionStart', function () {
      // start progress at zero
      $progressEl.css('width', 0)

      var duration = this.options.rotationSpeed;
      $progressEl.velocity({width: '100%'}, {
        duration: duration-100,
        easing: 'none'
      });
    });
  }
});
