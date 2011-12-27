/**
 * jQuery Revolver Plugin 1.0
 *
 * http://johnnyfreeman.github.com/revolver/
 * Copyright 2011, Johnny Freeman
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 */
 
;(function ($) {
    
    // plugin
    $.fn.revolver = function(options)
    {
        return this.each(function()
        {
            // store the revolver object using jquery's data method
            if (!$.data(this, 'revolver'))
            {
                $.data(this, 'revolver', new Revolver(this, options));
            }
        });
    };

    // constructor
    var Revolver = function(container, options)
    {
        // merge new options (recursively) with defaults
        this.options = $.extend(true, {}, this.defaults, options);
        
        // setup revolver
        this.container      = $(container);
        this.slides         = this.container.find('.' + this.options.slideClass);
        this.numSlides      = this.slides.length;
        this.currentSlide   = 0;
        this.nextSlide      = this.numSlides > 1 ? 1 : 0;
        this.lastSlide      = this.numSlides == 0 ? null : this.numSlides - 1;
        this.status         = { paused: false, playing: false, stopped: true };
        this.dimensions     = { height: this.container.height(), width: this.container.width() };

        // Don't run if there's only one slide
        if (this.numSlides <= 1) {
            return;
        };

        // begin auto play, if enabled
        if (this.options.autoPlay)
        {
            this.play();
        }

        return this;
    }

    // default options
    Revolver.prototype.defaults = {
        rotationSpeed:      4000,     // how long (in milliseconds) to stay on each slide before going to the next
        autoPlay:           true,     // whether or not to automatically begin playing the slides
        transition: {
            speed:          1000,     // how long (in milliseconds) the transition should last
            type:           'fade',   // choose between none, fade, or slide,
            direction:      'left'    // which way to slide each slide. used for the 'slide' transition type only.
        },
        slideClass:         'slide'   // this is what revolver will look for to determin what is a slide 
    };

    Revolver.prototype.currentSlide = null;   // key for current slide
    Revolver.prototype.nextSlide    = null;   // key for next slide
    Revolver.prototype.numSlides    = 0;      // total number of slides
    Revolver.prototype.lastSlide    = null;   // key for last slide
    Revolver.prototype.container    = null;   // the wrapper element for all images
    Revolver.prototype.slides       = [];     // array of slides
    Revolver.prototype.iteration    = 0;      // keeps track of the number of transitions that have occured
    Revolver.prototype.intervalId   = null;   // id set by setInterval(), used for pause() method
    Revolver.prototype.state        = null;   // will contain the state of the slider
    Revolver.prototype.options      = null;   // will contain all options for the slider
    Revolver.prototype.dimensions   = null;   // contains width & height of the slider

    Revolver.prototype.changeStatus = function(newStatus)
    {
        // set all status' as false
        var Revolver = this;
        $.each(this.status, function(key, val)
        {
            Revolver.status[key] = key == newStatus;
        });

        return this;
    };

    // do transition
    Revolver.prototype.transition = function()
    {
        // do transition, and pass the revolver object to it
        this.transitions[this.options.transition.type](this);

        // update slider position
        this.currentSlide   = this.nextSlide;
        this.nextSlide      = this.currentSlide == this.lastSlide ? 0 : this.currentSlide + 1;

        this.iteration++;
    };

    // logic for transitions
    Revolver.prototype.transitions = {

        // no transition, just show and hide
        none: function(revolver)
        {
            // hide all slides except the first on first run
            if (revolver.iteration === 0)
            {
                revolver.slides.not(':first').hide();
            }

            revolver.slides.eq(revolver.currentSlide).hide();
            revolver.slides.eq(revolver.nextSlide).show();

            return this;
        },

        // fade in and out
        fade: function(revolver)
        {
            // hide all slides except the first
            if (revolver.iteration === 0)
            {
                revolver.slides.not(':first').hide();
            }

            revolver.slides.eq(revolver.currentSlide).fadeOut(revolver.options.transition.speed);
            revolver.slides.eq(revolver.nextSlide).fadeIn(revolver.options.transition.speed);

            return this;
        },

        // slide in and out of the container
        slide: function(revolver)
        {
            var currentSlide = revolver.slides.eq(revolver.currentSlide),
                nextSlide = revolver.slides.eq(revolver.nextSlide),
                currentSlidePosition = {}, 
                nextSlidePosition = {};

            // make sure next slide is on top of current slide
            revolver.slides.eq(revolver.nextSlide).css('z-index', revolver.iteration + 1);

            // build animation object based on the transition direction
            switch(revolver.options.transition.direction)
            {
                case 'up':
                    currentSlidePosition.top = 0 - currentSlide.height();
                    nextSlidePosition.top = nextSlide.height();
                    break;
                case 'right':
                    currentSlidePosition.left = currentSlide.width();
                    nextSlidePosition.left = 0 - nextSlide.width();
                    break;
                case 'down':
                    currentSlidePosition.top = currentSlide.height();
                    nextSlidePosition.top = 0 - nextSlide.height();
                    break;
                case 'left':
                    currentSlidePosition.left = 0 - currentSlide.width();
                    nextSlidePosition.left = nextSlide.width();
                    break;
            }
            // slide current out of the container and the next in
            currentSlide.animate(currentSlidePosition, revolver.options.transition.speed, function(){ $(this).hide() });
            nextSlide.show().css(nextSlidePosition).animate({top: 0, left: 0}, revolver.options.transition.speed);

            return this;
        },

        // slide in and out of the container
        halfSlide: function(revolver)
        {
            // hide all slides except the first
            if (revolver.iteration === 0)
            {
                revolver.slides.not(':first').hide();
            }

            var currentSlide = revolver.slides.eq(revolver.currentSlide),
                nextSlide = revolver.slides.eq(revolver.nextSlide),
                newCurrentSlidePosition = {}, 
                newNextSlidePosition = {};

            // make sure next slide is on top of current slide
            revolver.slides.eq(revolver.nextSlide).css('z-index', revolver.iteration + 1);
            
            // build animation object based on the transition direction
            switch(revolver.options.transition.direction)
            {
                case 'up':
                    newCurrentSlidePosition.top = 0 - currentSlide.height()/2;
                    newNextSlidePosition.top = nextSlide.height();
                    break;
                case 'right':
                    newCurrentSlidePosition.left = currentSlide.width()/2;
                    newNextSlidePosition.left = 0 - nextSlide.width();
                    break;
                case 'down':
                    newCurrentSlidePosition.top = currentSlide.height()/2;
                    newNextSlidePosition.top = 0 - nextSlide.height();
                    break;
                case 'left':
                    newCurrentSlidePosition.left = 0 - currentSlide.width()/2;
                    newNextSlidePosition.left = nextSlide.width();
                    break;
            }

            // slide current out of the container and the next in
            currentSlide.animate(newCurrentSlidePosition, revolver.options.transition.speed, function(){ $(this).hide() });
            nextSlide.show().css(newNextSlidePosition).animate({top: 0, left: 0}, revolver.options.transition.speed);

            return this;
        },

        // reveal
        reveal: function(revolver)
        {
            // make sure next slide is on top of current slide
            revolver.slides.eq(revolver.nextSlide).css('z-index', revolver.iteration + 1);

            revolver.slides.eq(revolver.nextSlide).css('width', 0).animate({width: revolver.dimensions.width}, revolver.options.transition.speed);

            return this;
        }
    };

    Revolver.prototype.play = function()
    {
        if (!this.status.playing)
        {
            this.changeStatus('playing');

            // if this isn't the first run
            // then do transition immediately 
            if (this.iteration > 0)
            {
                this.transition();
            }

            this.intervalId = setInterval(this.transition.bind(this), parseFloat(this.options.rotationSpeed));
        }

        return this;
    };

    Revolver.prototype.pause = function()
    {
        this.changeStatus('paused');

        if (this.intervalId !== null)
        {
            clearInterval(this.intervalId);
            this.intervalId = null;
        };

        return this;
    };

    Revolver.prototype.stop = function()
    {
        this.changeStatus('stopped');

        if (this.intervalId !== null)
        {
            clearInterval(this.intervalId);
            this.intervalId = null;
        };
        
        return this.reset();
    };

    Revolver.prototype.reset = function()
    {
        // reset only if not already on the first slide
        if (this.currentSlide != 0)
        {
            this.nextSlide = 0;
        }

        return this;
    };

    Revolver.prototype.restart = function()
    {
        return this.stop().play();
    };

    Revolver.prototype.first = function()
    {
        return this.goTo(0);
    };

    Revolver.prototype.previous = function()
    {
        return this.goTo(this.currentSlide == 0 ? this.lastSlide : this.currentSlide - 1);
    };

    Revolver.prototype.previous = function()
    {
        return this.goTo(this.currentSlide == 0 ? this.lastSlide : this.currentSlide - 1);
    };

    Revolver.prototype.goTo = function(i)
    {
        // bail out if already 
        // on the intended slide
        if (i == this.currentSlide)
        {
            return this;
        }

        this.nextSlide = i;

        return !this.status.playing ? this.transition() : this.pause().play();
    };

    Revolver.prototype.next = function()
    {
        return this.goTo(this.nextSlide);
    };

    Revolver.prototype.last = function()
    {
        return this.goTo(this.lastSlide);
    };

})(jQuery);