'use strict'

module.exports = (grunt) ->
  grunt.initConfig
    pkg: grunt.file.readJSON('package.json')

    # bower install
    bower:
      install:
        options:
          copy: false


    # mocha testing
    mocha:
      all:
        src: ['test/**/*.html']
        options:
          reporter: 'Spec'
          run: true


    # coffeescript compilation
    coffee:
      compileWithMaps:
        options:
          sourceMap: true
          sourceMapDir: 'source-maps/'

        files:
          'js/revolver.js': 'coffee/revolver.coffee'


    # minification
    uglify:
      options:
        banner: '/*! <%= pkg.name %> <%= pkg.version %>  */\n'
        sourceMap: 'source-maps/revolver.min.js.map'
        sourceMappingURL: '../source-maps/revolver.min.js.map'
        sourceMapIn: 'source-maps/revolver.js.map'

      build:
        files:
          'js/revolver.min.js': ['js/revolver.js']


    # watch server
    watch:
      coffee:
        files: ['coffee/revolver.coffee']
        tasks: ['clean:build', 'coffee']

      uglify:
        files: ['js/revolver.js']
        tasks: 'uglify'

      test:
        files: ['js/revolver.js', 'js/revolver.min.js', 'test/revolver.js', 'test/revolver.html']
        tasks: 'mocha',
        options:
          livereload: true


    # clean directories
    clean:
      build: ['js', 'source-maps']
      deps: ['bower_components']
      npm: ['node_modules']


  # Load tasks
  grunt.loadNpmTasks 'grunt-contrib-uglify'
  grunt.loadNpmTasks 'grunt-contrib-coffee'
  grunt.loadNpmTasks 'grunt-mocha'
  grunt.loadNpmTasks 'grunt-bower-task'
  grunt.loadNpmTasks 'grunt-contrib-clean'
  grunt.loadNpmTasks 'grunt-contrib-watch'

  # Custom tasks
  grunt.registerTask 'default', 'build'
  grunt.registerTask 'build', ['install-deps', 'clean:build', 'coffee', 'uglify']
  grunt.registerTask 'install-deps', ['clean:deps', 'bower']
  grunt.registerTask 'test', ['build', 'mocha']
