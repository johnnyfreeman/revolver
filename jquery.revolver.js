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

    // set constructor
    var revolver = function(container, options)
    {
        return this.init(container, options);
    }

    // default settings
    revolver.prototype.options = {
        'rotationSpeed' : 4000,
        'fadeSpeed' : 1500
    };

    // revolver state
    revolver.prototype.previousSlide = null;
    revolver.prototype.currentSlide = null;
    revolver.prototype.numSlides = 0;
    revolver.prototype.lastSlide = null;

    // dom elements
    revolver.prototype.container = null;
    revolver.prototype.images = null;

    // 
    revolver.prototype.intId = null;

    // constructor
    revolver.prototype.init = function(container, options)
    {
        // merge options with defaults
        $.extend(this.options, options);
        
        // setup revolver
        this.container     = $(container);
        this.images        = this.container.find('img');
        this.numSlides      = this.images.length;
        this.lastSlide      = this.numSlides == 0 ? null : this.numSlides - 1;
        this.reset();

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

        // play
        this.play();

        return this;
    }

    revolver.prototype.transition = function()
    {
        // fadeout previous, fadein current
        this.images.eq(this.previousSlide).fadeOut(this.options.fadeSpeed);
        this.images.eq(this.currentSlide).fadeIn(this.options.fadeSpeed);

        // update vars
        this.previousSlide = this.currentSlide;
        this.currentSlide = this.currentSlide == this.lastSlide ? 0 : this.currentSlide+1;
    };

    revolver.prototype.play = function()
    {
        this.transition();
        this.intId = setInterval(this.transition.bind(this), parseFloat(this.options.rotationSpeed));
        return this;
    };

    revolver.prototype.pause = function()
    {
        clearInterval(this.intId);
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