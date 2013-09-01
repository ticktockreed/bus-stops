require(["base.js"], function(base) {
    //This function is called when scripts/helper/util.js is loaded.
    //If util.js calls define(), then this function is not fired until
    //util's dependencies have loaded, and the util argument will hold
    //the module value for "helper/util".
    console.log('App.js Loaded!');

var app;

(function ($) {
    "use strict";


    app = {

        /* CONSTANTS
        ----------------------------------------------------------------------------- */

        CONSTANTS: {

        // Place sitewide global variables here

        },

        animation : {

        // Place common animation variables here - eg speed, easing etc.

        },

        /* FUNCTIONS

        ----------------------------------------------------------------------------- */



        init: function initFn() {

            app.firstFunction();

        },

        /*
        *   firstFunction // example
        *   ---------------------------------------------
        *   Show in console that script is running correctly
        *   with specific console styling
        *   ---------------------------------------------
        *   @param n/a
        *   @return Void
        */

        firstFunction: function firstFunctionFn() {

            console.log('%cWelcome to the Zone Front End Boilerplate', base.CONSTANTS.LOGSTYLE_INFO);
        
        }

    };

    app.init();

})(jQuery);


});
