/* revolver.js v1.03. (c) 2011 Johnny Freeman. MIT License. http://johnnyfreeman.github.com/revolver/ */
(function ($) {
    
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
            lastSlide     = $images.length;

        // Don't run if there's only one slide
        if ($images.length <= 1) {
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
            $images
            .eq(previousSlide)
            .fadeOut(self.options.fade, function ()
            {
                $(this).hide();
            })
            .end()
            .eq(currentSlide)
            .fadeIn(self.options.fade, function ()
            {
                $(this).show();
            });

            previousSlide = currentSlide;
            currentSlide = currentSlide == (lastSlide-1) ? 0 : currentSlide+1;
        },
        parseFloat(this.options.speed));

    }

    // default settings
    revolver.prototype.options = {
        'speed' : 3000,
        'fade' : 1000,
        'auto' : true,
        'maxwidth' : 'none'
    };
})(jQuery);