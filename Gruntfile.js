'use strict';

module.exports = function(grunt) {
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),
    
    // mocha testing
    mocha: {
      test: {
        src: ['tests/**/*.html'],
      },
    },
    
    // coffeescript compilation
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
    
    // minification
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
    
    // watch server
    regarde: {
      coffee: {
        files: ['coffee/revolver.coffee'],
        tasks: 'coffee'
      },

      uglify: {
        files: ['js/revolver.js'],
        tasks: 'uglify'
      },
      
      test: {
        files: ['js/revolver.js', 'js/revolver.min.js'],
        tasks: 'test'
      }
    }

  });

  // Load tasks
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-regarde');
  grunt.loadNpmTasks('grunt-mocha');

  // Custom tasks
  grunt.registerTask('default', 'build');
  grunt.registerTask('server', 'regarde');
  grunt.registerTask('build', ['coffee', 'uglify', 'mocha']);
};