define(['globals'], function(globals) {
    'use strict';

    var testmodule = {


        init: function initFn() {

            this.initialiseMap();

        },

        /*
         *   initialiseMap // example
         *   ---------------------------------------------
         *   Show in console that script is running correctly
         *   with specific console styling
         *   ---------------------------------------------
         *   @param n/a
         *   @return Void
         */

        initialiseMap: function initialiseMapFn() {

            //console.log('%cWelcome to the Zone Front End Boilerplate', globals.logstyleInfo);
         
            google.maps.visualRefresh = true;

            var mapOptions = {
                center: new google.maps.LatLng(51.52783450,-0.10225884),
                zoom: 8,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            var map = new google.maps.Map(document.getElementById("map-canvas"),
            mapOptions);
            
            var myLatlng = new google.maps.LatLng(51.52363797159915,-0.09749245212910045);

            var marker = new google.maps.Marker({
                position: myLatlng,
                map: map,
                title:"Hello World!"
            });

        },

        getBusStops: function() {
            
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