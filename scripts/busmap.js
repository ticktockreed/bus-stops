define(['async!https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&libraries=places'], function() {
    'use strict';

    // Set up Map
    var map = new google.maps.Map(document.getElementById('map-canvas'), {
        zoom: 15,
        disableDefaultUI: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    var defaultBounds = new google.maps.LatLngBounds(
        new google.maps.LatLng(51.52317526681934, -0.12521854916747088),
        new google.maps.LatLng(51.53249325643172, -0.07929913083250995));
    map.fitBounds(defaultBounds);

    var input = /** @type {HTMLInputElement} */ (document.getElementById('target'));
    var searchBox = new google.maps.places.SearchBox(input);
    var markers = [];

    google.maps.event.addListener(searchBox, 'places_changed', function() {
        var places = searchBox.getPlaces();

        var bounds = new google.maps.LatLngBounds();
        for (var i = 0, place; place = places[i]; i++) {
            bounds.extend(place.geometry.location);
        }

        map.fitBounds(bounds);
    });


    var busMap = {

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

            google.maps.event.addListener(map, 'bounds_changed', function() {
                var bounds = map.getBounds();
                searchBox.setBounds(bounds);
                busMap.getBusStops(bounds);
            });

        },

        getBusStops: function(bounds) {

            var northEast = bounds.ea.b + ',' + bounds.ia.b,
                southWest = bounds.ea.d + ',' + bounds.ia.d;

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

        },

        createBusStops: function(busStops) {

            $.each(busStops, function() {

                var myLatlng = new google.maps.LatLng(this.lat, this.lng);

                var marker = new google.maps.Marker({
                    position: myLatlng,
                    map: map,
                    title: this.name
                });

                markers.push(marker);
            });

        },

        getBusStopInfo: function(busStopId) {
            $.ajax({
                url: 'http://digitaslbi-id-test.herokuapp.com/bus-stop/' + busStopId,
                dataType: 'jsonp',
                async: false,
                success: function(data) {
                    console.log('Bus stop info', data);
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    alert(errorThrown.name);
                }
            });
        }

    };

    return busMap;
});