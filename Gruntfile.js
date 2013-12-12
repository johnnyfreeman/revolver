'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    intern: {
      revolverjs: {
        options: {
          runType: 'runner', // defaults to 'client'
          sauceUsername: 'revolverjs',
          sauceAccessKey: 'c0408be0-b8ea-4245-b2de-29ccb698c7d8',
          config: 'tests/intern',
          reporters: [ 'console', 'lcov' ],
          suites: [ 'tests/revolver' ]
        }
      }
    },

    coffee: {
      compileWithMaps: {
        options: {
          sourceMap: true,
          sourceMapDir: 'source-maps/'
        },
        files: {
          'js/revolver.js': 'coffee/revolver.coffee'
        }
      }
    },

    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
        sourceMap: 'source-maps/revolver.min.js.map',
        sourceMappingURL: '../source-maps/revolver.min.js.map',
        sourceMapIn: 'source-maps/revolver.js.map'
      },
      build: {
        files: {
          'js/revolver.min.js': ['js/revolver.js']
        }
      }
    },

    // regarde configuration
    regarde: {

      coffee: {
        files: ['coffee/revolver.coffee'],
        tasks: 'coffee'
      },

      uglify: {
        files: ['js/revolver.js'],
        tasks: 'uglify'
      }

    }

  });

  // Load tasks
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-regarde');
  grunt.loadNpmTasks('intern')

  // Register a test task that uses Intern
  grunt.registerTask('test', [ 'intern' ]);

  // Default tasks
  grunt.registerTask('default', ['coffee', 'uglify']);
  grunt.registerTask('server', ['regarde']);

};
