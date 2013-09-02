/*global module:false*/
module.exports = function(grunt) {

// Project configuration.
grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
        options: {
            node: true,
            browser: true,
            esnext: true,
            bitwise: true,
            camelcase: true,
            curly: true,
            eqeqeq: true,
            immed: true,
            indent: 4,
            latedef: true,
            newcap: true,
            noarg: true,
            quotmark: "single",
            regexp: true,
            undef: true,
            unused: true,
            strict: true,
            trailing: true,
            smarttabs: true,
            jquery: true,
            devel: true,
            globals: {
                jQuery: true,
                require: true,
                define: true,
                Modernizr: true,
            }
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
        target: {
            rjsConfig: 'scripts/config.js'
        }
    },
    // Uglify has been kept purely to add banners to production code.
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
        files: ['<%= jshint.all %>', 'styles/sass/*.scss', 'styles/sass/test/*.scss', '!scripts/main.js'], // we watch the sass directory (not the file)
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
grunt.loadNpmTasks('grunt-bower-requirejs');
grunt.loadNpmTasks('grunt-contrib-requirejs');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-webfont');

grunt.registerTask('default', ['compass:dev', 'jshint']);
grunt.registerTask('prod', ['compass' , 'concat', 'jshint', 'uglify']);

};
