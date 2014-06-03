// use Sizzle for greater browser compatability
Revolver.setSelectorEngine($.find);

var $progressEl = $('.progress');
var startProgressBar = function () {
  // start progress at zero
  $progressEl.css('width', 0)

  var duration = this.options.rotationSpeed;
  $progressEl.velocity({width: '100%'}, {
    duration: duration-100,
    easing: 'none'
  });
};

// Start it up
var mySlider = new Revolver({
  containerSelector: '.slider',
  slidesSelector: '.slide',
  onReady: function () {
    if (!this.options.autoPlay) return;
    _.bind(startProgressBar, this)();
  }
});


var $progressEl = $('.progress');
mySlider.on('transitionStart', _.bind(startProgressBar, mySlider));
