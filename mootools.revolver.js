var Revolver, RevolverSlide;

Revolver = new Class({

	Implements: Events,

    defaults: {
	    rotationSpeed:      4000,     		// how long (in milliseconds) to stay on each slide before going to the next
	    autoPlay:           true,     		// whether or not to automatically begin playing the slides
	    transition: {
	        direction:      'left',   		// which way to slide each slide. used for the 'slide' transition type only.
	        easing: 		'sine:in:out', 	// default easing method
	        speed:          1000,     		// how long (in milliseconds) the transition should last
	        type:           'fade'   		// choose between none, fade, or slide,
	    },
	    slideClass:         'slide'   		// this is what revolver will look for to determin what is a slide 
	},

	currentSlide: null,		// key for current slide
	nextSlide: null,   		// key for next slide
	numSlides: 0,      		// total number of slides
	lastSlide: null,   		// key for last slide
	container: null,   		// the wrapper element for all slides
	slides: [],     		// array of slides
	iteration: 0,      		// keeps track of the number of transitions that have occured
	intervalId: null,   	// id set by setInterval(), used for pause() method
	state: null,   			// will contain the state of the slider
	options: null,   		// will contain all options for the slider
	dimensions: null,   	// contains width & height of the slider

	// constructor
    initialize: function(container, options)
    {
        // setOptions is a method provided by the Options mixin
	    // it merges the options passed in with the defaults
	    // this.setOptions(options);
	    this.options = Object.merge(this.defaults, options);
	    
	    // get container and it's slides
	    this.container      = container;
	    this.dimensions     = this.container.getSize();
	    this.container.getChildren('.' + this.options.slideClass).each(function(slide){ this.addSlide(slide)}.bind(this) );

	    this.numSlides      = this.slides.length;
	    this.currentSlide   = 0;
	    this.nextSlide      = this.numSlides > 1 ? 1 : 0;
	    this.lastSlide      = this.numSlides == 0 ? null : this.numSlides - 1;
	    this.status         = { paused: false, playing: false, stopped: true };

	    // Don't run if there's only one slide
	    if (this.numSlides <= 1) {
	    	console.log('no slides... bailing out');
	        return;
	    };

	    // begin auto play, if enabled
	    if (this.options.autoPlay)
	    {
	        this.play({}, true);
	    }

	    return this;
    },

    addSlide: function(slide)
    {
    	this.slides.push( new RevolverSlide(slide, this) );
    },

    changeStatus: function(newStatus)
	{
	    // set all status' as false
	    Object.each(this.status, function(val, key)
	    {
	        this.status[key] = key == newStatus;
	    }, this);

	    return this;
	},
    
    transition: function(options)
	{
		// merge options with the defaults
		var options = Object.merge( Object.clone(this.options.transition), options );

	    // do transition, and pass the transition options to it
	    this.transitions[options.type].bind(this)(options);

	    // update slider position
	    this.currentSlide   = this.nextSlide;
	    this.nextSlide      = this.currentSlide == this.lastSlide ? 0 : this.currentSlide + 1;
	    this.iteration++;

	    // fire onTransition event
	    this.fireEvent('transition');

	    return this;
	},

	transitions: {

	    // no transition, just show and hide
	    none: function(options)
	    {
	        this.slides[revolver.currentSlide].hide(options);
	        this.slides[revolver.nextSlide].show(options);
	    },

	    // fade in and out
	    fade: function(options)
	    {
	        this.slides[this.currentSlide].fadeOut(options);
	        this.slides[this.nextSlide].fadeIn(options);
	    },

	    // slide in and out of the container
	    slide: function(options)
	    {
	        this.slides[this.currentSlide].slideOut(options);
	    	this.slides[this.nextSlide].slideIn(options);
	    },

	    // reveal
	    reveal: function(options)
	    {
	        // make sure next slide is on top of current slide
	        this.slides[this.nextSlide].container.setStyle('z-index', this.iteration + 1);

	        this.slides[this.nextSlide].container.setStyle('width', 0).morph({width: this.dimensions.width});
	    }
	},

	play: function(options, firstTime)
	{
	    if (!this.status.playing)
	    {
	        this.changeStatus('playing');

	        // transition immediately?
	        if (!firstTime)
	        {
	            this.transition(options);
	        }

	        this.intervalId = setInterval(this.transition.bind(this), parseFloat(this.options.rotationSpeed));
	    }

	    return this;
	},

	pause: function()
	{
	    this.changeStatus('paused');

	    if (this.intervalId !== null)
	    {
	        clearInterval(this.intervalId);
	        this.intervalId = null;
	    };

	    return this;
	},

	stop: function()
	{
	    this.changeStatus('stopped');

	    if (this.intervalId !== null)
	    {
	        clearInterval(this.intervalId);
	        this.intervalId = null;
	    };
	    
	    return this.reset();
	},

	reset: function()
	{
	    // reset only if not already on the first slide
	    if (this.currentSlide != 0)
	    {
	        this.nextSlide = 0;
	    }

	    return this;
	},

	restart: function()
	{
	    return this.stop().play();
	},

	first: function()
	{
	    return this.goTo(0);
	},

	previous: function()
	{
		var currentDirection = this.options.transition.direction,
			newDirection;

		switch(currentDirection)
        {
            case 'up':
                newDirection = 'down';
                break;
            case 'right':
                newDirection = 'left';
                break;
            case 'down':
                newDirection = 'up';
                break;
            case 'left':
                newDirection = 'right';
                break;
        }

	    return this.goTo(this.currentSlide === 0 ? this.lastSlide : this.currentSlide - 1, {direction: newDirection});
	},

	goTo: function(i, options)
	{
		// bail out if already 
	    // on the intended slide
	    if (i == this.currentSlide)
	    {
	        return this;
	    }

	    this.nextSlide = i;

	    return this.status.playing ? this.pause().play(options) : this.transition(options);
	},

	next: function()
	{
	    return this.goTo(this.nextSlide);
	},

	last: function()
	{
	    return this.goTo(this.lastSlide);
	}
});

RevolverSlide = new Class({

	container: null, 	// key for current slide
	size: null, 		// dimensions for this slide

	// constructor
    initialize: function(container, Revolver)
    {
	    this.container 	= container;
	    this.size 		= Revolver.dimensions;

	    // set morph defaults
	    this.container.set('morph', { duration: Revolver.options.transition.speed });

	    return this;
    },

    show: function(options)
    {
    	this.container.setStyles({display: 'block'});

    	return this;
    },

    hide: function(options)
    {
    	this.container.setStyles({display: 'none'});

    	return this;
    },

    fadeIn: function(options)
    {
    	var fadeIn = new Fx.Morph(this.container, {
		    duration: options.speed,
		    transition: options.easing
		});

		this.show().container.setStyle('opacity', 0);
    	fadeIn.start({opacity: 1});
    },

    fadeOut: function(options)
    {
    	var fadeOut = new Fx.Morph(this.container, {
		    duration: options.speed,
		    transition: options.easing
		});

		this.show().container.setStyle('opacity', 1);
    	fadeOut.start({opacity: 0});
    },

    slideIn: function(options)
    {
    	var self = this,
    		slideIn = new Fx.Morph(this.container, {
			    duration: options.speed,
			    transition: options.easing,
			    onComplete: function(){ }
			}),
    		resetPosition = {top: 0, left: 0};

    	this.show();

    	if (options.direction == "up")
    	{
    		this.container.setStyle('top', this.size.y);
    	}
    	else if (options.direction == "right")
    	{
    		this.container.setStyle('left', 0 - this.size.x);
    	}
    	else if (options.direction == "down")
    	{
    		this.container.setStyle('top', 0 - this.size.y);
    	}
    	else if (options.direction == "left")
    	{
    		this.container.setStyle('left', this.size.x);
    	}

    	slideIn.start(resetPosition);

    	return this;
    },

    slideOut: function(options)
    {
    	var self = this,
    		slideOut = new Fx.Tween(this.container, {
			    duration: options.speed,
			    transition: options.easing,
			    onComplete: function(){ self.hide() }
			});

		// reset position
		this.container.setStyles({top: 0, left: 0});

    	if (options.direction == "up")
    	{
    		slideOut.start('top', 0 - this.size.y);
    	}
    	else if (options.direction == "right")
    	{
    		slideOut.start('left', this.size.x);
    	}
    	else if (options.direction == "down")
    	{
    		slideOut.start('top', this.size.y);
    	}
    	else if (options.direction == "left")
    	{
    		slideOut.start('left', 0 - this.size.x);
    	}

    	return this;
    }
});


Elements.implement({
    revolver: function(options){
        return this.each(function(element) {
            return new Revolver(element, options);
        });
    }
});


Element.implement({
    revolver: function(options){
        return new Revolver(this, options);
    }
});