require.config({
    paths: {
        jquery: '../bower_components/jquery/jquery',
        requirejs: '../bower_components/requirejs/require',
        'requirejs-domready': '../bower_components/requirejs-domready/domReady',
        'requirejs-google-maps': '../bower_components/requirejs-google-maps/dist/GoogleMap',
        selectivizr: '../bower_components/selectivizr/selectivizr',
        async: '../bower_components/requirejs-plugins/src/async',
        depend: '../bower_components/requirejs-plugins/src/depend',
        font: '../bower_components/requirejs-plugins/src/font',
        goog: '../bower_components/requirejs-plugins/src/goog',
        json: '../bower_components/requirejs-plugins/src/json',
        mdown: '../bower_components/requirejs-plugins/src/mdown',
        noext: '../bower_components/requirejs-plugins/src/noext',
        propertyParser: '../bower_components/requirejs-plugins/src/propertyParser',
        'Markdown.Converter': '../bower_components/requirejs-plugins/lib/Markdown.Converter',
        text: '../bower_components/requirejs-plugins/lib/text'
    }
});

// Start the main app logic.
require([
    'jquery',
    'globals',
    'base',
    'busmap',
    'async!https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&libraries=places'
], function($, globals, base, busmap) {
    'use strict';

    base.init();
    busmap.init();
});