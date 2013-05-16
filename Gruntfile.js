'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    coffee: {
      compileWithMaps: {
        options: {
          bare: true,
          sourceMap: true
        },
        files: {
          'revolver.js': 'src/revolver.coffee'
        }
      }
    },

    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
        sourceMapIn: 'revolver.js.map'
      },
      build: {
        files: {
          'revolver.min.js': ['revolver.js']
        }
      }
    },

    // regarde configuration
    regarde: {

      coffee: {
        files: ['src/revolver.coffee'],
        tasks: 'coffee'
      },

      uglify: {
        files: ['revolver.js'],
        tasks: 'uglify'
      }

    }

  });

  // Load tasks
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-regarde');

  // Default tasks
  grunt.registerTask('default', ['regarde']);

};
