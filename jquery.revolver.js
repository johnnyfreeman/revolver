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
            if (!$.data(this, 'revolver'))
            {
                $.data(this, 'revolver', new revolver(this, options));
            }
        });
    };

    // setup constructor
    var revolver = function(container, options)
    {
        return this.init(container, options);
    }

    // default settings
    revolver.prototype.options = {
        rotationSpeed: 4000,
        transitionSpeed: 1500,
        autoPlay: true
    };

    // revolver state
    revolver.prototype.previousSlide = null;    // key for previous slide
    revolver.prototype.currentSlide = null;     // key for current slide
    revolver.prototype.numSlides = 0;           // total number of slides
    revolver.prototype.lastSlide = null;        // key for last slide

    // dom elements
    revolver.prototype.container = null;        // the wrapper element for all images
    revolver.prototype.images = null;           // array of images

    // misc
    revolver.prototype.status = null;           // will either be equal to "stopped" or "playing"
    revolver.prototype.intervalId = null;       // id set by setInterval(), used for pause() method

    // constructor
    revolver.prototype.init = function(container, options)
    {
        // merge options with defaults
        $.extend(this.options, options);
        
        // setup revolver
        this.container      = $(container);
        this.images         = this.container.find('img');
        this.numSlides      = this.images.length;
        this.previousSlide  = 0;
        this.currentSlide   = this.numSlides > 1 ? 1 : 0;
        this.lastSlide      = this.numSlides == 0 ? null : this.numSlides - 1;

        // Don't run if there's only one slide
        if (this.numSlides <= 1) {
            return;
        };

        // apply basic styling to container and images
        this.container.css({
            'position': 'relative'
        });

        this.images.css({
            'top': 0,
            'left': 0,
            'position': 'absolute'
        });

        // hide all images except the first
        this.images.not(':first').hide();

        // begin auto play, if enabled
        if (this.options.autoPlay)
        {
            this.play();
        }
        else
        {
            this.status = 'stopped';
        }

        return this;
    }

    revolver.prototype.transition = function()
    {
        // fadeout previous, fadein current
        this.images.eq(this.previousSlide).fadeOut(this.options.transitionSpeed);
        this.images.eq(this.currentSlide).fadeIn(this.options.transitionSpeed);

        // update vars
        this.previousSlide = this.currentSlide;
        this.currentSlide = this.currentSlide == this.lastSlide ? 0 : this.currentSlide+1;
    };

    revolver.prototype.play = function()
    {
        // transition immediately only if revolver has been stopped or paused
        if (this.status == 'stopped')
        {
            this.transition();
        };
        
        this.status = 'playing';
        this.intervalId = setInterval(this.transition.bind(this), parseFloat(this.options.rotationSpeed));

        return this;
    };

    revolver.prototype.pause = function()
    {
        this.status = 'stopped';
        clearInterval(this.intervalId);
        return this;
    };

    revolver.prototype.stop = function()
    {
        this.pause().reset();
        return this;
    };

    revolver.prototype.reset = function()
    {
        this.currentSlide = 0;
        return this;
    };

    revolver.prototype.restart = function()
    {
        this.stop().play();
        return this;
    };

})(jQuery);