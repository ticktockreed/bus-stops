define(['async!https://maps.googleapis.com/maps/api/js?key=AIzaSyCBmmsWRw46wR1_L_wyRv7DYxXWdGDKEAg&sensor=false'], function() {
    'use strict';

    // Set up Map

    var mapOptions = {
        center: new google.maps.LatLng(51.52783450, -0.10225884),
        zoom: 8,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);


    var busMap = {

        init: function initFn() {

            this.initialiseMap();
            this.getBusStops();

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



        },

        getBusStops: function() {

            $.ajax({
                url: 'http://digitaslbi-id-test.herokuapp.com/bus-stops?northEast=51.52783450,-0.04076115&southWest=51.51560467,-0.10225884',
                dataType: 'jsonp',
                async: false,
                success: function(data) {
                    console.log('Bus stops', data);
                    busMap.createMarkers(data.markers);
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    alert(errorThrown.name);
                }
            });

        },

        createMarkers: function(busStops) {

            $.each(busStops, function(busStops, index) {

                var myLatlng = new google.maps.LatLng(this.lat, this.lng);

                new google.maps.Marker({
                    position: myLatlng,
                    map: map,
                    title: 'A marker'
                });
            });

        }

    };

    return busMap;
});