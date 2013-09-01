
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

      console.log('%cWelcome to the Zone Front End Boilerplate', base.CONSTANTS.LOGSTYLE_INFO);

    }

  };


  $(function() {

      app.init();

  });
})(jQuery);