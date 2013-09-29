define(['globals'], function(globals) {
    'use strict';

    var testmodule = {


        init: function initFn() {

            this.firstFunction();

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

            //console.log('%cWelcome to the Zone Front End Boilerplate', globals.logstyleInfo);

            $.ajax({
                url: 'http://digitaslbi-id-test.herokuapp.com/bus-stops?northEast=51.52783450,-0.04076115&southWest=51.51560467,-0.10225884',
                dataType: 'jsonp',
                async: false,
                success: function(data) {
                    console.log('Bus stops', data);

                },
                error: function(jqXHR, textStatus, errorThrown) {
                    alert(errorThrown.name);
                }
            });

        }

    };

    return testmodule;
});