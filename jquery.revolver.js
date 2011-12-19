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
    $.fn.revolver = function(options) {
        return this.each(function() {
            return new revolver(this, options);
        });
    };

    // constructor
    var revolver = function(container, options)
    {
        // merge options with defaults
        $.extend(this.options, options);

        var $container    = $(container),
            $images       = $container.find('img'),
            self          = this,
            previousSlide = 0,
            currentSlide  = 1,
            numSlides     = $images.length,
            lastSlide     = numSlides - 1;

        // Don't run if there's only one slide
        if (numSlides <= 1) {
            return;
        };

        // apply basic styling to container and images
        $container.css({
            'position': 'relative'
        });

        $images.css({
            'top': 0,
            'left': 0,
            'position': 'absolute'
        });

        // hide all images except the first
        $images.not(':first').hide();

        setInterval(function ()
        {
            // fadeout previous, fadein current
            $images.eq(previousSlide).fadeOut(self.options.fadeSpeed);
            $images.eq(currentSlide).fadeIn(self.options.fadeSpeed);

            // update vars
            previousSlide = currentSlide;
            currentSlide = currentSlide == lastSlide ? 0 : currentSlide+1;
        },
        parseFloat(this.options.rotationSpeed));

    }

    // default settings
    revolver.prototype.options = {
        'rotationSpeed' : 4000,
        'fadeSpeed' : 1500
    };

})(jQuery);