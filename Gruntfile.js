module.exports = function(grunt) {
  require('time-grunt')(grunt);

  require('jit-grunt')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      options: {
        includePaths: [
          'bower_components/bourbon/dist/',
        ],
      },
      build: {
        files: {
          'Simple.AdiumMessageStyle/Contents/Resources/Main.css': 'sass/Main.scss'
        }
      }
    },

    watch: {
      grunt: {
        files: ['Gruntfile.js'],
        tasks: ['concat']
      },
      sass: {
        files: ['sass/**/*.scss'],
        tasks: ['sass']
      }
    }
  });

  grunt.registerTask('build', ['sass']);
  grunt.registerTask('default', ['build', 'watch']);
};