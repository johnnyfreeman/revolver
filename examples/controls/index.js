// use Sizzle for greater browser compatability
Revolver.setSelectorEngine($.find);

// Start it up
var mySlider = new Revolver({containerSelector: '.slider', slidesSelector: '.slide', transition: {name: 'fade'}});

/*************************************
 * Slider Controls
 ************************************/
$(document).on('click', '.control', function (e) {
  e.preventDefault();
  var $el = $(this);
  var method = $el.data('method');
  var argument = $el.data('argument');
  mySlider[method](argument);
});

// change bullet state upon transition
var $bullets = $('.bullet');
mySlider.on('transitionStart', function () {
  $bullets.removeClass('active');
  $bullets.filter('[data-argument='+this.currentSlide+']').addClass('active');
});
