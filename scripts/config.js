require.config({
    paths: {
        jquery: '../bower_components/jquery/jquery',
        selectivizr: '../bower_components/selectivizr/selectivizr',
        requirejs: '../bower_components/requirejs/require'
    }
});

// Start the main app logic.
require(['jquery', 'globals', 'base', 'app'], function($, globals, base, app) {
    'use strict';

    base.init();
    app.init();
});