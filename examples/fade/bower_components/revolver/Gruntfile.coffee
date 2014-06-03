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
      revolver:
        options:
          sourceMap: true

        files:
          'dist/revolver.js': 'src/revolver.coffee'
      
      tests:
        files:
          'test/tests.js': 'src/tests.coffee'


    # minification
    uglify:
      options:
        banner: '/*! <%= pkg.name %> <%= pkg.version %>  */\n'
        sourceMap: 'dist/revolver.min.js.map'
        sourceMappingURL: 'revolver.min.js.map'
        sourceMapIn: 'dist/revolver.js.map'

      build:
        files:
          'dist/revolver.min.js': ['dist/revolver.js']


    # watch server
    watch:
      lint:
        files: ['Gruntfile.coffee', 'src/*.coffee']
        tasks: ['coffeelint']

      coffee:
        files: ['src/*.coffee']
        tasks: ['clean:dist', 'clean:tests', 'coffee']

      uglify:
        files: ['dist/revolver.js']
        tasks: 'uglify'

      test:
        files: ['dist/revolver.min.js', 'test/tests.js', 'test/revolver.html']
        tasks: 'mocha',
        options:
          livereload: true


    # clean directories
    clean:
      dist: ['dist']
      bower: ['bower_components']
      hooks: ['.git/hooks/pre-commit']
      npm: ['node_modules']
      tests: ['test/tests.js']
    
    # copy git hooks
    shell:
      hooks:
        command: 'cp git-hooks/pre-commit .git/hooks/'
        
    # linting
    coffeelint:
      grunt: 'Gruntfile.coffee'
      revolver: 'src/revolver.coffee'
      tests: 'src/tests.coffee'
      options:
        max_line_length:
          value: 120,
          limitComments: false


  # Load tasks
  grunt.loadNpmTasks 'grunt-contrib-uglify'
  grunt.loadNpmTasks 'grunt-contrib-coffee'
  grunt.loadNpmTasks 'grunt-mocha'
  grunt.loadNpmTasks 'grunt-bower-task'
  grunt.loadNpmTasks 'grunt-contrib-clean'
  grunt.loadNpmTasks 'grunt-contrib-watch'
  grunt.loadNpmTasks 'grunt-shell'
  grunt.loadNpmTasks 'grunt-coffeelint'

  # Custom tasks
  grunt.registerTask 'default', ['coffeelint', 'build', 'test']
  grunt.registerTask 'build', ['clean:dist', 'clean:tests', 'coffee', 'uglify']
  grunt.registerTask 'install-deps', ['clean:bower', 'bower']
  grunt.registerTask 'install-hooks', ['clean:hooks', 'shell:hooks']
  grunt.registerTask 'test', ['install-deps', 'mocha']
