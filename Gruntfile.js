'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    intern: {
      client: {
        options: {
//          runType: 'runner', // defaults to 'client' (node.js)
          // sauceUsername: 'revolverjs', // don't want to use sauce labs with grunt
          // sauceAccessKey: 'c0408be0-b8ea-4245-b2de-29ccb698c7d8',
          config: 'tests/intern',
          // reporters: [ 'console', 'lcov' ], // defaults to console
          // suites: [ 'tests/revolver' ] // this is specified in tests/intern
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
