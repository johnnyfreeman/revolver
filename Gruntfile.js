'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        files: {
          'revolver.min.js': ['revolver.js']
        }
      }
    },

    // regarde configuration
    regarde: {

      uglify: {
        files: ['revolver.js'],
        tasks: 'uglify'
      }

    }

  });

  // Load tasks
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-regarde');

  // Default tasks
  grunt.registerTask('default', ['regarde']);

};
