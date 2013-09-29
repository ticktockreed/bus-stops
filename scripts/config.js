require.config({
    paths: {
        jquery: '../bower_components/jquery/jquery',
        requirejs: '../bower_components/requirejs/require',
        'requirejs-domready': '../bower_components/requirejs-domready/domReady',
        'requirejs-google-maps': '../bower_components/requirejs-google-maps/dist/GoogleMap',
        selectivizr: '../bower_components/selectivizr/selectivizr',
        async: '../bower_components/requirejs-plugins/src/async'
    }
});

// Start the main app logic.
require([
    'jquery',
    'globals',
    'base',
    'testmodule',
    'async!https://maps.googleapis.com/maps/api/js?key=AIzaSyCBmmsWRw46wR1_L_wyRv7DYxXWdGDKEAg&sensor=false'
], function($, globals, base, testmodule) {
    'use strict';

    base.init();
    testmodule.init();
});