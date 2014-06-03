// use Sizzle for greater browser compatability
Revolver.setSelectorEngine($.find);

// Start it up
var mySlider = new Revolver({containerSelector: '.slider', slidesSelector: '.slide', transition: {name: 'slide'}});

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

/*************************************
 * Event log
 ************************************/
var $events = $('.events');
var events = _(['pause', 'play', 'start', 'stop', 'ready', 'restart', 'transitionStart', 'transitionComplete']);
events.each(function (eventName) {
  mySlider.on(eventName, function () {
    $events.prepend('<li class="event"><span class="datetime">'+new Date()+':</span> <a href="https://github.com/johnnyfreeman/revolver/blob/master/api/events/'+eventName.toLowerCase()+'.md">'+eventName+'</a> fired</li>');
  });
});
