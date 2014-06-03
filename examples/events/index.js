// use Sizzle for greater browser compatability
Revolver.setSelectorEngine($.find);

var $events = $('.events');
var events = _(['pause', 'play', 'start', 'stop', 'ready', 'restart', 'transitionStart', 'transitionComplete']);
var logEvent = function (eventName) {
  $events.prepend('<li class="event"><span class="datetime">'+new Date()+':</span> <a href="https://github.com/johnnyfreeman/revolver/blob/master/api/events/'+eventName.toLowerCase()+'.md">'+eventName+'</a> fired</li>');
};

// Start it up
var mySlider = new Revolver({
  containerSelector: '.slider',
  onReady: logEvent.bind(this, 'ready'),
  slidesSelector: '.slide',
  transition: {name: 'slide'}
});

// regist event handlers for each event
events.each(function (eventName) {
  mySlider.on(eventName, logEvent.bind(this, eventName));
});

/*************************************
 * API Controls
 ************************************/
$(document).on('click', '.call', function (e) {
  e.preventDefault();
  var $el = $(this);
  var method = $el.data('method');
  var argument = $el.data('argument');
  mySlider[method](argument);
});
