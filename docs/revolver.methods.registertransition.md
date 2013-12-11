# registerTransition(name, handler)

**Type**: `Function`, **Returns**: `Object` (Revolver global)

Registers a new transition with `Revolver`.

```javascript
// register new transition with revolver that uses jQuery to fade slides in and out
Revolver.registerTransition('fade', function() {

  // save reference to the current and next slides
  var $nextSlide    = $(this.slides[this.nextSlide]);
  var $currentSlide = $(this.slides[this.currentSlide]);

  // move current slide above the next slide
  // so that when the current is faded out
  // the next slide beneath it will be revealed
  $currentSlide.css('z-index', this.numSlides);
  $nextSlide.css('z-index', this.nextSlide);

  // gonna need this
  var inst = this;

  // all slides except the current are hidden
  // so we must unhide the next slide before 
  // we can begin the transition
  $nextSlide.show(0, function(){
    // on complete start fading...
    $currentSlide.fadeOut(500, 'swing', function() { 
      inst.trigger('transitionComplete'); 
    });
  });

});
```

To use your new transition, just pass the `name` along as the [transition.name](revolver.options.transition.name.md) option.