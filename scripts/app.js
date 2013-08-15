
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

            console.log('%cWelcome to the Zone Front End Boilerplate - This message proves that the first function is running', base.CONSTANTS.LOGSTYLE_INFO);

        }

    };

    app.init();

})(jQuery);