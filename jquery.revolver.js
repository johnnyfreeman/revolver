/* =========================================================================================================
 *
 * "Y8888888b.                                     `Y88                                        ::
 *   888   Y88b                                     888
 *   888   dX8P   .d888b. `Y8b      d8P  .d8888b.   888 `Y8b      d8P  .d888b.  `Y88.d88b.    `Y88  .d8888b
 *   888888YK    d8P   Y8b  Y8b    d8P  d88P""Y88b  888   Y8b    d8P  d8P   Y8b  888P" "Y8b    888  88K
 *   888  "Y8b.  888888888   Y8b  d8P   88K    X88  888    Y8b  d8P   888888888  888           888  "Y8888b.
 *   888    88b  Y8b.         Y8bd8P    Y88b..d88P  888     Y8bd8P    Y8b.       888           888       X88
 * .d888    888   "Y888P"      Y88P      "Y8888P"   888.     Y88P      "Y888P"   888      ::   888   Y88888"
 *          Y88b.                                                                             .88P
 *                                                                                           d88"
 * =========================================================================================================
 * 
 * Revolver.js
 *
 * Revolver is a content slider built with no assumptions about your markup. Think of Revolver as a 
 * boilerplate or framework for making your own slider, exactly the way you want it. But don't let that 
 * scare you, it's really easy, I promise!
 * 
 * Documentation:   http://revolverjs.com
 * Support:         https://github.com/johnnyfreeman/revolver/issues
 * Bug Fixes:       https://github.com/johnnyfreeman/revolver/pulls
 * Author:          Johnny Freeman (http://johnnyfreeman.us)
 * 
 * Contribute:
 * 
 * If Revolver has been beneficial to you and you'd like to give back, there are a few ways you can 
 * contribute. You can answer questions on StackOverflow and our issue tracker. Or if you have a feature 
 * request or a bug fix you can submit a pull request on Github at http://github.com/johnnyfreeman/revolver.
 * 
 * License:
 * 
 * This software is open source and free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 */
 
;(function ($, window) {

    "use strict";

    // constructor
    var Revolver = function (container, options)
    {
        // merge new options (recursively) with defaults
        this.options = $.extend(true, {}, this.defaults, options);

        // setup revolver
        this.container      = container;
        this.dimensions     = { height: this.container.height(), width: this.container.width() };
        this.slides         = this.container.find('.'+this.options.slideClass).each( $.proxy(function(){ this.addSlide(this); }, this) );
        this.numSlides      = this.slides.length;
        this.currentSlide   = 0;
        this.nextSlide      = this.numSlides > 1 ? 1 : 0;
        this.lastSlide      = this.numSlides === 0 ? null : this.numSlides - 1;
        this.previousSlide  = this.lastSlide;
        this.status         = { paused: false, playing: false, stopped: true };
        this.isAnimating    = false;

        // Completely disable Revolver
        // if there is only one slide
        if (this.numSlides <= 1) {
            this.disabled = true;
            return;
        }

        // fire onReady event handler
        $.proxy(this.options.onReady, this)();

        // begin auto play, if enabled
        if (this.options.autoPlay)
        {
            this.play({}, true);
        }

        return this;
    };
    
    // default options
    Revolver.prototype.defaults = {
        autoPlay:           true,           // whether or not to automatically begin playing the slides
        onReady:            function(){},   // gets called when revolver is setup and ready to go
        onPlay:             function(){},   // gets called when the play() method is called
        onStop:             function(){},   // gets called when the stop() method is called
        onPause:            function(){},   // gets called when the pause() method is called
        onRestart:          function(){},   // gets called when the restart() method is called
        rotationSpeed:      4000,           // how long (in milliseconds) to stay on each slide before going to the next
        slideClass:         'slide',        // this is what revolver will look for to determin what is a slide
        transition: {
            direction:      'left',         // which way to slide each slide. used for the 'slide' transition type only.
            easing:         'swing',        // default easing method
            onStart:        function(){},   // gets called when the transition animation begins
            onFinish:       function(){},   // gets called when the animation is done
            speed:          500,            // how long (in milliseconds) the transition should last
            type:           'fade'          // choose between none, fade, or slide
        }
    };

    Revolver.prototype.previousSlide = null;     // key for previous slide
    Revolver.prototype.currentSlide  = null;     // key for current slide
    Revolver.prototype.nextSlide     = null;     // key for next slide
    Revolver.prototype.numSlides     = 0;        // total number of slides
    Revolver.prototype.lastSlide     = null;     // key for last slide
    Revolver.prototype.container     = null;     // the wrapper element for all images
    Revolver.prototype.slides        = [];       // array of slides
    Revolver.prototype.iteration     = 0;        // keeps track of the number of transitions that have occured
    Revolver.prototype.intervalId    = null;     // id set by setInterval(), used for pause() method
    Revolver.prototype.status        = null;     // will contain the state of the slider
    Revolver.prototype.options       = null;     // will contain all options for the slider
    Revolver.prototype.dimensions    = null;     // contains width & height of the slider
    Revolver.prototype.isAnimating   = null;     // whethor revolver is currently in transition
    Revolver.prototype.disabled      = false;    // disables all functionality in a Revolver instance
    Revolver.prototype.VERSION       = '1.0.3';  // version info

    Revolver.prototype.addSlide = function(slide)
    {
        this.slides.push(slide);
    };

    Revolver.prototype.changeStatus = function(newStatus)
    {
        // set all status' as false
        var Revolver = this;
        $.each(this.status, function(key, val)
        {
            Revolver.status[key] = key === newStatus;
        });

        return this;
    };

    // do transition
    Revolver.prototype.transition = function(options)
    {
        if (this.disabled === false && this.isAnimating === false)
        {
            options             = $.extend(true, {}, this.options.transition, options);
            var doTransition    = $.proxy(this.transitions[options.type], this);
            this.isAnimating    = true;

            // do transition
            doTransition(options);

            // update slider position
            this.previousSlide  = this.currentSlide;
            this.currentSlide   = this.nextSlide;
            this.nextSlide      = this.currentSlide === this.lastSlide ? 0 : this.currentSlide + 1;
            this.iteration++;

            // fire onTransition event
            $.proxy(options.onStart, this)();
        }

        return this;
    };

    // logic for transitions
    Revolver.prototype.transitions = {

        // no transition, just show and hide
        none: function(options)
        {
            this.slides.eq(this.currentSlide).hide();
            this.slides.eq(this.nextSlide).show();

            // since this transitions is instantaneous we'll go
            // ahead and trigger the transitionComplete event
            $.proxy(options.onFinish, this);
            this.isAnimating = false;
        },

        // fade in and out
        fade: function(options)
        {
            var Revolver = this;
                
            this.slides.eq(this.currentSlide).fadeOut(options.speed);
            this.slides.eq(this.nextSlide).fadeIn(
                options.speed,
                // after the next slide is finished fading in,
                // trigger the onTransitionComplete event
                function(){
                    $.proxy(options.onFinish, Revolver)();
                    Revolver.isAnimating = false;
                }
            );
        },

        // slide in and out of the container
        slide: function(options)
        {
            var Revolver = this,
                currentSlide = this.slides.eq(this.currentSlide),
                nextSlide = this.slides.eq(this.nextSlide),
                currentSlidePosition = {},
                nextSlidePosition = {},
                resetPosition = {top: 0, left: 0};

            // make sure next slide is on top of current slide
            this.slides.eq(this.nextSlide).css('z-index', this.iteration + 1);

            // build animation object based on the transition direction
            if (options.direction === "up")
            {
                currentSlidePosition = {top: this.dimensions.height, left: 0};
                nextSlidePosition = {top: 0 - this.dimensions.height, left: 0};
            }
            else if (options.direction === "right")
            {
                currentSlidePosition = {top: 0, left: this.dimensions.width};
                nextSlidePosition = {top: 0, left: 0 - this.dimensions.width};
            }
            else if (options.direction === "down")
            {
                currentSlidePosition = {top: 0 - this.dimensions.height, left: 0};
                nextSlidePosition = {top: this.dimensions.height, left: 0};
            }
            else if (options.direction === "left")
            {
                currentSlidePosition = {left: 0 - this.dimensions.width, top: 0};
                nextSlidePosition = {left: this.dimensions.width, top: 0};
            }

            // slide current out of the container
            currentSlide.stop(true).animate(
                currentSlidePosition,
                options.speed,
                function() {
                    $(this).hide();
                }
            );

            // slide next out of the container
            nextSlide
                .show()
                .css(nextSlidePosition)
                .stop(true)
                .animate(
                    resetPosition,
                    options.speed,
                    // after the next slide is finished sliding in,
                    // trigger the onTransitionComplete event
                    function(){
                        $.proxy(options.onFinish, Revolver)();
                        Revolver.isAnimating = false;
                    }
                );
        },

        // reveal
        reveal: function(options)
        {
            var Revolver = this;

            this.slides.eq(this.nextSlide)
                .css({width: 0, height: this.dimensions.height, 'z-index': this.iteration+1})
                .show()
                .animate(
                    {width: this.dimensions.width},
                    options.speed,
                    // after the next slide is finished revealing itself,
                    // trigger the onTransitionComplete event
                    function(){
                        $.proxy(options.onFinish, Revolver)();
                        Revolver.isAnimating = false;
                    }
                );

            return this;
        }
    };

    Revolver.prototype.play = function(options, firstTime)
    {
        if (this.disabled === false && !this.status.playing)
        {
            this.changeStatus('playing');
            $.proxy(this.options.onPlay, this)();

            // if this isn't the first run
            // then do transition immediately
            if (!firstTime)
            {
                this.transition(options);
            }

            this.intervalId = setInterval( $.proxy(this.transition, this), parseFloat(this.options.rotationSpeed));
        }

        return this;
    };

    Revolver.prototype.pause = function()
    {
        if (this.disabled === false && !this.status.paused)
        {
            this.changeStatus('paused');
            $.proxy(this.options.onPause, this)();

            if (this.intervalId !== null)
            {
                clearInterval(this.intervalId);
                this.intervalId = null;
            }
        }

        return this;
    };

    Revolver.prototype.stop = function()
    {
        if (this.disabled === false && !this.status.stopped)
        {
            this.changeStatus('stopped');
            $.proxy(this.options.onStop, this)();

            if (this.intervalId !== null)
            {
                clearInterval(this.intervalId);
                this.intervalId = null;
            }
        }
        
        return this.reset();
    };

    Revolver.prototype.reset = function()
    {
        // reset only if not already on the first slide
        if (this.currentSlide !== 0)
        {
            this.nextSlide = 0;
        }

        return this;
    };

    Revolver.prototype.restart = function(options)
    {
        if (this.disabled === true)
        {
            return this;
        }

        $.proxy(this.options.onRestart, this)();
        return this.stop().play(options);
    };

    Revolver.prototype.first = function(options)
    {
        return this.goTo(0, options);
    };

    Revolver.prototype.previous = function(options)
    {
        return this.goTo(this.previousSlide, options);
    };

    Revolver.prototype.goTo = function(i, options)
    {
        // bail out if already
        // on the intended slide
        if (this.disabled === true || i === this.currentSlide)
        {
            return this;
        }

        this.nextSlide = i;

        return !this.status.playing ? this.transition(options) : this.pause().play(options);
    };

    Revolver.prototype.next = function(options)
    {
        return this.goTo(this.nextSlide, options);
    };

    Revolver.prototype.last = function(options)
    {
        return this.goTo(this.lastSlide, options);
    };

    // make Revolver globally available
    window.Revolver = Revolver;
    
    // jquery plugin
    $.fn.revolver = function(options)
    {
        return this.each(function()
        {
            // store the revolver object using jquery's data method
            if (!$.data(this, 'revolver'))
            {
                $.data(this, 'revolver', new Revolver($(this), options));
            }
        });
    };

})(jQuery, this);