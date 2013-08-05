/*global module:false*/
module.exports = function(grunt) {

// Project configuration.
grunt.initConfig({
  pkg: grunt.file.readJSON('package.json'),
  jshint: {
    options: {
      curly: true,
      eqeqeq: true,
      eqnull: true,
      browser: true,
      globals: {
        jQuery: true
      }
    },
    all: ['Gruntfile.js', 'scripts/*.js', '!scripts/libs/*.js', '!scripts/release.js', '!scripts/*.min.js']
  },
  concat: {
    options: {
      separator: ' ',
      stripBanners: true,
      banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %> */'
    },
    prod: {
      src: ['scripts/base.js', 'scripts/app.js'],
      dest: 'scripts/min/release.min.js'
    }
  },
  uglify: {
    my_target: {
      files: {
        'scripts/min/release.min.js': 'scripts/min/release.min.js'
      }
    }
  },
  watch: {
    files: ['<%= jshint.all %>', 'sass/**/*.scss'], // we watch the sass directory (not the file)
    tasks: ['default']
  },
  sass: {
    prod: {
      options: {
        style: 'compressed'
      },  
      files: {                                                    
        'styles/css/min/global-min.css': 'styles/sass/global.scss'
      }
    },
    dev: {
      options: {
        style: 'expanded'
      },
      files: {
        'styles/css/global.css': 'styles/sass/global.scss'
      }
    }
  }
});

grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-contrib-uglify');

grunt.registerTask('default', ['sass:dev' , 'jshint']);
grunt.registerTask('prod', ['sass' , 'concat', 'jshint', 'uglify']);

};
