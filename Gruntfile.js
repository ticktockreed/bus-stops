/*global module:false*/
module.exports = function(grunt) {

// Project configuration.
grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    serve: {
        options: {
            port: 9000,
            'path': 'build/'
        }
    },
    jshint: {
        options: {
            jshintrc: '.jshintrc'
        },
        all: [
        //'Gruntfile.js',
        'scripts/*.js',
        'scripts/plugins/*.js',
        '!scripts/release.js',
        '!scripts/*.min.js'
        ]
    },
    bower: {
        options: {
            exclude: ['modernizr']
        },
        target: {
            rjsConfig: 'scripts/config.js'
        }
    },
    requirejs: {
        dist: {
            // Options: https://github.com/jrburke/r.js/blob/master/build/example.build.js
            options: {
                baseUrl: 'scripts',
                optimize: 'uglify',
                dir: 'scripts/min',
                useStrict: true,
                wrap: true
            }
        }
    },
    watch: {
        compass: {
            files: ['styles/{,*/}*.{scss,sass}'],
            tasks: ['compass:dev']
        },
        jshint: {
            files: ['scripts/{,*/}*.js'],
            tasks: ['jshint']
        }
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
grunt.loadNpmTasks('grunt-contrib-compass');
grunt.loadNpmTasks('grunt-serve');
grunt.loadNpmTasks('grunt-bower-requirejs');
grunt.loadNpmTasks('grunt-contrib-requirejs');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-webfont');

grunt.registerTask('default', ['bower', 'watch']);
grunt.registerTask('prod', ['compass:prod', 'requirejs']);

};
