define(['async!https://maps.googleapis.com/maps/api/js?key=AIzaSyCBmmsWRw46wR1_L_wyRv7DYxXWdGDKEAg&sensor=false'], function() {
    'use strict';

    // Set up Map
    var mapOrigin = {
            lat: 51.52783450,
            lng: -0.10225884
        },
        mapOptions = {
            center: new google.maps.LatLng(mapOrigin.lat, mapOrigin.lng),
            zoom: 15,
            disableDefaultUI: true,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        },
        map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);


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

            var northEast = '',
                southWest = '';

            google.maps.event.addListener(map, 'bounds_changed', function() {
                var bounds = map.getBounds();
                northEast = bounds.ea.b + ',' + bounds.ia.b;
                southWest = bounds.ea.d + ',' + bounds.ia.d;
                console.log('northEast', northEast);
                console.log('southWest', southWest);


                $.ajax({
                    url: 'http://digitaslbi-id-test.herokuapp.com/bus-stops?northEast=' + northEast + '&southWest=' + southWest,
                    dataType: 'jsonp',
                    async: false,
                    success: function(data) {
                        console.log('Bus stops', data);
                        busMap.createBusStops(data.markers);
                    },
                    error: function(jqXHR, textStatus, errorThrown) {
                        alert(errorThrown.name);
                    }
                });
            });

        },

        createBusStops: function(busStops) {

            $.each(busStops, function(busStops, index) {

                var myLatlng = new google.maps.LatLng(this.lat, this.lng);

                new google.maps.Marker({
                    position: myLatlng,
                    map: map,
                    title: this.name
                });
            });

        }

    };

    return busMap;
});