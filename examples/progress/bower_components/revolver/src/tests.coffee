suite 'Instance Methods', ->
  
  # revolver instance
  slider = undefined
  originalSlider = undefined
  setup ->
    slider = new Revolver
      containerSelector: '#myslider'
      slidesSelector: '.slide'
    originalSlider = _.clone(slider)
  suiteTeardown ->
    slider = originalSlider = null

  
  # addSlide
  suite '#addSlide()', ->
    test 'adds one more to this.slides array', ->
      numSlides = slider.slides.length
      slider.addSlide document.createElement('div')
      assert.strictEqual slider.slides.length, numSlides + 1
    test 'recalculates this.numSlides correctly', ->
      slider.addSlide document.createElement('div')
      assert.strictEqual slider.numSlides, slider.slides.length
    test 'recalculates this.nextSlide correctly', ->
      nextSlide = (if slider.currentSlide is slider.lastSlide then 0 else slider.currentSlide + 1)
      slider.addSlide document.createElement('div')
      assert.strictEqual slider.nextSlide, nextSlide

  
  # changeStatus
  suite '#changeStatus()', ->
    test 'plays', ->
      slider.changeStatus 'playing'
      assert.strictEqual slider.status.playing, true
      assert.strictEqual slider.status.paused, false
      assert.strictEqual slider.status.stopped, false
    test 'pauses', ->
      slider.changeStatus 'paused'
      assert.strictEqual slider.status.playing, false
      assert.strictEqual slider.status.paused, true
      assert.strictEqual slider.status.stopped, false
    test 'stops', ->
      slider.changeStatus 'stopped'
      assert.strictEqual slider.status.playing, false
      assert.strictEqual slider.status.paused, false
      assert.strictEqual slider.status.stopped, true

  
  # pause
  suite '#pause()', ->
    test 'changes status to paused if playing or stopped', ->
      # from stopped
      slider.stop()
      slider.pause()
      assert.strictEqual slider.status.paused, true
      # from playing
      slider.play()
      slider.pause()
      assert.strictEqual slider.status.paused, true
    test 'this.intervalId is null', ->
      slider.pause()
      assert.strictEqual slider.intervalId, null

  
  # play
  suite '#play()', ->
    test 'changes status to playing if paused or stopped', ->
      # from stopped
      slider.stop()
      slider.play()
      assert.strictEqual slider.status.playing, true
      # from paused
      slider.pause()
      slider.play()
      assert.strictEqual slider.status.playing, true
    test 'this.intervalId isnt null', ->
      slider.play()
      assert.notStrictEqual slider.intervalId, null


  # reset
  suite '#reset()', ->
    test 'only sets this.nextSlide to 0 if this.currentSlide doesnt equal 0', ->
      slider.pause()
      slider.reset()
      assert.notStrictEqual slider.nextSlide, 0
      slider.goTo 1
      slider.reset()
      assert.strictEqual slider.nextSlide, 0

  
  # restart
  suite '#restart()', ->
    setup ->
      slider.restart()
    #    test('this.currentSlide equals 0', function () {
    #      assert.strictEqual(slider.currentSlide, 0);
    #    });
    test 'slider is playing', ->
      assert.strictEqual slider.status.playing, true
      assert.strictEqual slider.status.paused, false
      assert.strictEqual slider.status.stopped, false

  
  # setOptions
  suite '#setOptions()', ->
    test 'sets a new option', ->
      slider.setOptions foo: 'bar'
      assert.strictEqual slider.options.foo, 'bar'
    test 'overrides existing options', ->
      slider.setOptions slidesSelector: '.mySlides'
      assert.strictEqual slider.options.slidesSelector, '.mySlides'

  
  # stop
  suite '#stop()', ->
    test 'changes status to stopped if paused or playing', ->
      # from playing
      slider.play()
      slider.stop()
      assert.strictEqual slider.status.stopped, true
      # from paused
      slider.pause()
      slider.stop()
      assert.strictEqual slider.status.stopped, true
    test 'this.intervalId is null', ->
      slider.stop()
      assert.strictEqual slider.intervalId, null

  
  # stop
  suite '#goTo()', ->
    test 'does nothing if disabled', ->
      slider.goTo 0
      slider.disabled = true
      slider.goTo slider.lastSlide
      assert.strictEqual slider.currentSlide, 0
    test 'goes to intended slide', ->
      nextSlide = slider.nextSlide
      slider.goTo nextSlide
      assert.strictEqual slider.currentSlide, nextSlide


# Static Methods
suite 'Static Methods', ->
  
  # registerTranistion
  suite '#registerTransition()', ->
    handler = ->
    result = Revolver.registerTransition('test', handler)
    test 'saves the handler in the transitions namespace', ->
      assert.strictEqual Revolver.transitions.test, handler
    test 'returns the Revolver global object', ->
      assert.strictEqual result, Revolver
  
  # setSelectorEngine
  # suite '#setSelectorEngine()', ->
  #   new$ = ->
  #   old$ = Revolver.$
  #   Revolver.setSelectorEngine(new$)
  #   test 'saves the handler in the $ namespace', ->
  #     assert.strictEqual Revolver.$, new$
  #   Revolver.$ = old$