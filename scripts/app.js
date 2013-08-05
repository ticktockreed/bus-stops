
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

    /*
    *   init
    *   ---------------------------------------------
    *   Start scripts
    *   ---------------------------------------------
    *   @param n/a
    *   @return Void
    */
    
    init: function initFn() {

      app.firstFunction();

    },

    firstFunction: function firstFunctionFn() {

      console.log('firstFunction of app.js is working', 'color: blue; font-size: x-large');

    }

  };


  $(function() {

      app.init();

  });
})(jQuery);