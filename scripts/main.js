
console.log('test loaded');

define('test',[],function () {
    //Do setup work here

    return {
        color: "black",
        size: "unisize"
    }
});
require.config({
    paths: {
        jquery: '../bower_components/jquery/jquery',
        modernizr: '../bower_components/modernizr/modernizr',
        selectivizr: '../bower_components/selectivizr/selectivizr',
        requirejs: '../bower_components/requirejs/require'
    }
});

// Start the main app logic.
require(['test'], function (test, $) {

    console.log(test);
    console.log('Running jQuery %s', $().jquery);

});

define("config", function(){});
