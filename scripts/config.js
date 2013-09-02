require.config({
    paths: {
        jquery: '../bower_components/jquery/jquery',
        modernizr: '../bower_components/modernizr/modernizr',
        selectivizr: '../bower_components/selectivizr/selectivizr',
        requirejs: '../bower_components/requirejs/require'
    }
});

// Start the main app logic.
require(['test', 'jquery'], function (test, $) {

    console.log(test);
    console.log('Running jQuery %s', $().jquery);
});
