'use strict';
/* jshint node:true */
module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      options: {
        style: 'compact'
      },
      dist: {
        files: {
          'web/css/main.css': 'web/css/style.scss'
        }
      }
    }
  });
};
