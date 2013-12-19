'use strict';

module.exports = function(grunt) {
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),
    
    // bower install
    bower: {install: {options: {copy: false}}},
    
    // mocha testing
    mocha: {
      all: {
        src: ['tests/**/*.html'],
        options: {
          run: true
        }
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
      cleanBuild: {
        files: ['coffee/revolver.coffee'],
        tasks: 'clean-build'
      },
      
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
        tasks: 'mocha'
      }
    },
    
    // clean directories
    clean: {
      build: ['js', 'source-maps'],
      deps: ['bower_components'],
      npm: ['node_modules']
    },

  });

  // Load tasks
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-regarde');
  grunt.loadNpmTasks('grunt-mocha');
  grunt.loadNpmTasks('grunt-bower-task');
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Custom tasks
  grunt.registerTask('default', 'build');
  grunt.registerTask('build', ['clean:build', 'coffee', 'uglify', 'mocha']);
  grunt.registerTask('build-server', 'regarde');
  grunt.registerTask('install-deps', ['clean:deps', 'bower']);
};