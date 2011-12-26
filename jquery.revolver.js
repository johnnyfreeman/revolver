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
        this.status = $.extend({}, {
            paused:     false,  // is the slider paused
            playing:    false,  // is the slider playing
            stopped:    true   // is the slider stopped
        });
        
        // setup revolver
        this.container      = $(container);
        this.slides         = this.container.find('.' + this.options.slideClass);
        this.numSlides      = this.slides.length;
        this.currentSlide   = 0;
        this.nextSlide      = this.numSlides > 1 ? 1 : 0;
        this.lastSlide      = this.numSlides == 0 ? null : this.numSlides - 1;

        // Don't run if there's only one slide
        if (this.numSlides <= 1) {
            return;
        };

        // hide all slides except the first
        this.slides.not(':first').hide();

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
    Revolver.prototype.firstRun     = true;   // keeps track of whethor or not revolver has transitioned yet
    Revolver.prototype.intervalId   = null;   // id set by setInterval(), used for pause() method
    Revolver.prototype.state        = null;   // will contain the state of the slider
    Revolver.prototype.options      = null;   // will contain all options for the slider

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

        // it's not the first run anymore, is it.
        if (this.firstRun)
        {
            this.firstRun = false;
        }
    };

    // logic for transitions
    Revolver.prototype.transitions = {

        // no transition, just show and hide
        none: function(revolver)
        {
            revolver.slides.eq(revolver.currentSlide).hide();
            revolver.slides.eq(revolver.nextSlide).show();

            return this;
        },

        // fade in and out
        fade: function(revolver)
        {
            revolver.slides.eq(revolver.currentSlide).fadeOut(revolver.options.transition.speed);
            revolver.slides.eq(revolver.nextSlide).fadeIn(revolver.options.transition.speed);

            return this;
        },

        // slide in and out of the container
        slide: function(revolver)
        {
            var currentSlide = revolver.slides.eq(revolver.currentSlide),
                nextSlide = revolver.slides.eq(revolver.nextSlide),
                newCurrentSlidePosition = {}, 
                newNextSlidePosition = {};
            
            // build animation object based on the transition direction
            switch(revolver.options.transition.direction)
            {
                case 'up':
                    newCurrentSlidePosition.top = 0 - currentSlide.height();
                    newNextSlidePosition.top = nextSlide.height();
                    break;
                case 'right':
                    newCurrentSlidePosition.left = currentSlide.width();
                    newNextSlidePosition.left = 0 - nextSlide.width();
                    break;
                case 'down':
                    newCurrentSlidePosition.top = currentSlide.height();
                    newNextSlidePosition.top = 0 - nextSlide.height();
                    break;
                case 'left':
                    newCurrentSlidePosition.left = 0 - currentSlide.width();
                    newNextSlidePosition.left = nextSlide.width();
                    break;
            }

            // slide current out of the container and the next in
            currentSlide.animate(newCurrentSlidePosition, revolver.options.transition.speed, function(){ $(this).hide() });
            nextSlide.show().css(newNextSlidePosition).animate({top: 0, left: 0}, revolver.options.transition.speed);

            return this;
        },

        // slide in and out of the container
        halfSlide: function(revolver)
        {
            var currentSlide = revolver.slides.eq(revolver.currentSlide),
                nextSlide = revolver.slides.eq(revolver.nextSlide),
                newCurrentSlidePosition = {}, 
                newNextSlidePosition = {};
            
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
        }
    };

    Revolver.prototype.play = function()
    {
        if (!this.status.playing)
        {
            this.changeStatus('playing');

            // if this isn't the first run
            // then do transition immediately 
            if (!this.firstRun)
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