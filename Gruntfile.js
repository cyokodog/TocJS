module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.initConfig({
    uglify: {
        toc: {
            src: './js/toc.js',
            dest: './js/toc.min.js'
        },
        demo: {
            src: './js/demo.js',
            dest: './js/demo.min.js'
        }
    },
/*
    uglify: {
      dist: {
        files: {
          'js/all.js': [
            'js/toc.js',
            'js/demo.js',
          ]
        }
      }
    },
*/
    sass: {
      options: {
        style: 'compressed'
      },
      base: {
        src: './css/base.sass',
        dest: './css/base.min.css'
      },
      demo: {
        src: './css/demo.sass',
        dest: './css/demo.min.css'
      }
    },
    concat: {
      css: {
        src: [
          './css/base.min.css',
          './css/demo.min.css'
        ],
        dest: './css/all.css'
      },
      js: {
        src: [
          './js/toc.min.js',
          './js/demo.min.js'
        ],
        dest: './js/all.js'
      }
    },
    watch: {
      js: {
        files: './js/*.js',
        tasks: ['uglify', 'concat']
      },
      sass: {
        files: './css/*.sass',
        tasks: ['sass', 'concat']
      }
    }
  });
  grunt.registerTask('default', [ 'uglify', 'sass', 'concat']);
};