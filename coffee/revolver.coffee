# =========================================================================================================
#
# 'Y8888888b.                                     `Y88                                        ::
#   888   Y88b                                     888
#   888   dX8P   .d888b. `Y8b      d8P  .d8888b.   888 `Y8b      d8P  .d888b.  `Y88.d88b.    `Y88  .d8888b
#   888888YK    d8P   Y8b  Y8b    d8P  d88P''Y88b  888   Y8b    d8P  d8P   Y8b  888P' 'Y8b    888  88K
#   888  'Y8b.  888888888   Y8b  d8P   88K    X88  888    Y8b  d8P   888888888  888           888  'Y8888b.
#   888    88b  Y8b.         Y8bd8P    Y88b..d88P  888     Y8bd8P    Y8b.       888           888       X88
# .d888    888   'Y888P'      Y88P      'Y8888P'   888.     Y88P      'Y888P'   888      ::   888   Y88888'
#          Y88b.                                                                             .88P
#                                                                                           d88'
# =========================================================================================================

'use strict'

# constructor
Revolver = (slides, options) ->
  # setup initial values
  @currentSlide = 0
  @nextSlide = 0
  @numSlides = 0
  @lastSlide = 0
  @slides = []
  @iteration = 0
  @intervalId = null
  @disabled = false
  # merge options
  @options = _.merge {}, Revolver.defaults, options
  # add all slides
  _.each slides, @addSlide, this
  # finish setting up init values
  @previousSlide = @lastSlide
  @status =
    paused: false
    playing: false
    stopped: true
  @isAnimating = false
  # Completely disable Revolver
  # if there is only one slide
  if @numSlides <= 1
    @disabled = true
    return
  # always disable isAnimating flag
  # after transition is complete
  @on 'transitionComplete', -> @isAnimating = false
  # register all event handlers
  @on 'play', @options.onPlay
  @on 'stop', @options.onStop
  @on 'pause', @options.onPause
  @on 'restart', @options.onRestart
  @on 'transitionStart', @options.transition.onStart
  @on 'transitionComplete', @options.transition.onComplete
  # fire onReady event handler
  _.bind(@options.onReady, this)()
  # begin auto play, if enabled
  @play {}, true  if @options.autoPlay
  # return instance
  this


# namespace for default options
# (gets merged with user defined
# options in the constructor)
Revolver.defaults =
  autoPlay: true      # whether or not to automatically begin playing the slides
  onReady: ->         # gets called when revolver is setup and ready to go
  onPlay: ->          # gets called when the play() method is called
  onStop: ->          # gets called when the stop() method is called
  onPause: ->         # gets called when the pause() method is called
  onRestart: ->       # gets called when the restart() method is called
  rotationSpeed: 4000 # how long (in milliseconds) to stay on each slide before going to the next
  transition:
    onStart: ->       # gets called when the transition animation begins
    onComplete: ->    # gets called when the animation is done
    name: 'default'   # default transition


# current version
Revolver.VERSION = '2.0'


# add a new slide
Revolver::addSlide = (slide) ->
  # add new slide to the slides array
  @slides.push slide
  # recalculate total number of slides
  @numSlides     = @slides.length
  # recalculate which is the last slide
  @lastSlide     = (if @numSlides is 0 then 0 else @numSlides - 1)
  # recalculate which is the next slide
  currentPlusOne = @currentSlide + 1
  @nextSlide     = (if currentPlusOne > @lastSlide then 0 else currentPlusOne)
  # return instance
  this


# set options
Revolver::setOptions = (options) ->
# merge new options with the existing options
  _.merge @options, options
  # return instance
  this


# changes the status of the slider
Revolver::changeStatus = (newStatus) ->
  # loop over all statuses and set all as true or false
  _.each @status, ((val, key) ->
    @status[key] = key is newStatus
    true
  ), this
  # return instance
  this


# do transition
Revolver::transition = (options) ->
  # if slider isn't disabled and it isn't current in transition already
  if @disabled is false and @isAnimating is false
    # merge temporary options with instance options
    options = _.merge({}, @options.transition, options)
    # flag as currently animating
    @isAnimating = true
    # call declared transition
    _.bind(Revolver.transitions[options.name], this)(options)
    # update current slide
    @currentSlide = @nextSlide
    # update previous slide
    @previousSlide = (if @currentSlide is 0 then @lastSlide else @currentSlide - 1)
    # update next slide
    @nextSlide = (if @currentSlide is @lastSlide then 0 else @currentSlide + 1)
    # increase running count of transitions
    @iteration++
    # fire onTransition event listeners
    @trigger 'transitionStart'
  # return instance
  this


# play the slider
Revolver::play = (options, firstTime) ->
  # if slider isn't disabled and it's not already playing
  if @disabled is false and not @status.playing
    # change status
    @changeStatus 'playing'
    # trigger all registered 'play' event listeners
    @trigger 'play'
    # do transition immediately unless it's first run
    @transition options unless firstTime
    # start the loop
    @intervalId = setInterval _.bind(@transition, this), parseFloat(@options.rotationSpeed)
  # return instance
  this

# internal method used for stopping the
# loop that is created by the play method
Revolver::_clearInterval = ->
  # if the intervalId has been set
  if @intervalId isnt null
    # stop the loop
    clearInterval @intervalId
    # delete the reference to the loop
    @intervalId = null
  # return instance
  this


# pause the slider
Revolver::pause = ->
  # if slider isn't disabled and not already paused
  if @disabled is false and not @status.paused
    # change status to paused
    @changeStatus 'paused'
    # fire all 'pause' event listeners
    @trigger 'pause'
    # stop the loop
    @_clearInterval()
  # return instance
  this


# stop the slider
Revolver::stop = ->
  # if slider isn't disabled and not currently stopped
  if @disabled is false and not @status.stopped
    # change status to stopped
    @changeStatus 'stopped'
    # fire all 'stop' event listeners
    @trigger 'stop'
    # stop the loop
    @_clearInterval()
    # queue up first slide as next
    @reset()
  # return instance
  this


# queues up the first slide
Revolver::reset = ->
  # reset only if not already on the first slide
  @nextSlide = 0  if @currentSlide isnt 0
  # return instance
  this


# restart the slider
Revolver::restart = (options) ->
  # bail out if slider is disabled
  return this if @disabled is true
  # fire all 'restart' event listeners
  @trigger 'restart'
  # stop and then play the
  # slider from the beginning
  @stop().play options
  # return instance
  this


# go to a specific slide
Revolver::goTo = (i, options) ->
  # keep transition arithmetic from breaking
  i = parseInt(i)
  # bail out if already on the intended slide
  return this  if @disabled is true or i is @currentSlide
  # queue up i as the next slide
  @nextSlide = i
  # if slider is playing, pause() and play()
  # (which will transition immediately and restart the loop)
  # if not play, simply transition() straight to it
  (if not @status.playing then @transition(options) else @pause().play(options))


# CONVENIENCE METHODS (for building slider controls)

# go to the first slide
Revolver::first = (options) -> @goTo 0, options

# go to the previous slide
Revolver::previous = (options) -> @goTo @previousSlide, options

# go to the next slide
Revolver::next = (options) -> @goTo @nextSlide, options

# go to the last slide
Revolver::last = (options) -> @goTo @lastSlide, options


# EVENTS

# attach an event listener
Revolver::on = (eventName, callback) ->
  bean.on this, 'revolver.' + eventName, _.bind(callback, this)
  # return instance
  this

# alias for on() except that the handler will removed after the first execution
Revolver::one = (eventName, callback) ->
  bean.one this, 'revolver.' + eventName, _.bind(callback, this)
  # return instance
  this

# remove an event listener using
Revolver::off = (eventName, callback) ->
  bean.off this, 'revolver.' + eventName, _.bind(callback, this)
  # return instance
  this

# execute all listeners for the given event
Revolver::trigger = (eventName) ->
  bean.fire this, 'revolver.' + eventName
  # return instance
  this


# TRANSITIONS

# namespace for all transitions
Revolver.transitions = {}

# a default transition
Revolver.transitions['default'] = (options) ->
  # hide current slide
  @slides[@currentSlide].setAttribute 'style', 'display: none'
  # show next slide
  @slides[@nextSlide].setAttribute 'style', 'display: block'
  # fire all 'transitionComplete' event listeners
  @trigger 'transitionComplete'
  # return instance
  this


# return the Revolver object globally available
window.Revolver = Revolver
