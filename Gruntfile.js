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
    all: ['Gruntfile.js', 'scripts/*.js', 'scripts/plugins/*.js', '!scripts/libs/*.js', '!scripts/release.js', '!scripts/*.min.js']
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
    options: {
      banner: '/*! \n' + 
        'Project: <%= pkg.title %> \n' +
        'Version: v<%= pkg.version %> \n' +
        'Date compiled: <%= grunt.template.today("yyyy-mm-dd") %> \n' +
        'Company: <%= pkg.company %> \n' +
        'Contributors: <%= pkg.contributors %> \n' +
        '*/ \n \n'
    },
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
  compass: {                  
    prod: {                   
      options: {              
        sassDir: 'styles/sass/',
        cssDir: 'styles/css/min/',
        environment: 'production'
      }
    },
    dev: {            
      options: {
        sassDir: 'styles/sass/',
        cssDir: 'styles/css/'
      }
    }
  },
  webfont: {
    icons: {
      src: 'styles/fonts/icon-font/SVG/*.svg',
      dest: 'styles/fonts/icon-font/',
      destCss: 'styles/sass/',
      options: {
        stylesheet: 'scss',
        font: 'site-name'
      }
    }
  }
});

grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-compass');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-webfont');

grunt.registerTask('default', ['compass:dev' , 'jshint']);
grunt.registerTask('prod', ['compass' , 'concat', 'jshint', 'uglify']);

};
