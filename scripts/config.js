require.config({
    paths: {
        jquery: '../bower_components/jquery/jquery',
        selectivizr: '../bower_components/selectivizr/selectivizr',
        requirejs: '../bower_components/requirejs/require'
    }
});

// Start the main app logic.
require(['jquery', 'globals', 'base', 'testmodule'], function($, globals, base, testmodule) {
    'use strict';

    base.init();
    testmodule.init();
});