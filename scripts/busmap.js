define(['globals', 'async!https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&libraries=places'], function(globals) {
    'use strict';

    // Set up Map
    var map = new google.maps.Map(document.getElementById('map-canvas'), {
        zoom: 8,
        disableDefaultUI: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    var defaultBounds = new google.maps.LatLngBounds(
        new google.maps.LatLng(51.346610240902024,-0.6048638729751019),
        new google.maps.LatLng(51.641585426380274,0.3660528750717731));
    map.fitBounds(defaultBounds);

    var input = /** @type {HTMLInputElement} */ (document.getElementById('target'));
    var searchBox = new google.maps.places.SearchBox(input);
    var markers = [];


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
            this.listenSearch();

        },

        listenSearch: function() {
            google.maps.event.addListener(searchBox, 'places_changed', function() {
                var places = searchBox.getPlaces();

                var bounds = new google.maps.LatLngBounds();
                for (var i = 0, place; place = places[i]; i++) {
                    bounds.extend(place.geometry.location);
                }

                map.fitBounds(bounds);
                busMap.updateMap(bounds);
            });
        },

        findClosestStop: function() {

        },

        updateMap: function() {
            google.maps.event.addListener(map, 'bounds_changed', function() {
                var bounds = map.getBounds();
                searchBox.setBounds(bounds);
                busMap.getBusStops(bounds);
                map.setZoom(17);
            });
        },

        getBusStops: function(bounds) {

            var northEast = bounds.ea.b + ',' + bounds.ia.b,
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

        },

        createBusStops: function(busStops) {

            $.each(busStops, function() {

                var myLatlng = new google.maps.LatLng(this.lat, this.lng);
                var marker = new google.maps.Marker({
                    position: myLatlng,
                    map: map,
                    title: this.name
                });

                marker.busStopId = this.id;

                google.maps.event.addListener(marker, 'click', function() {

                    if (globals.currentMarker) {
                        globals.currentMarker.setAnimation(null);
                    }

                    globals.currentMarker = marker;
                    console.log('currentMarker', globals.currentMarker);
                    marker.setAnimation(google.maps.Animation.BOUNCE);

                    map.setCenter(marker.getPosition());
                    busMap.getBusStopInfo(marker.busStopId);

                });

                markers.push(marker);
            });

        },


        getBusStopInfo: function(busStopId) {
            $.ajax({
                url: 'http://digitaslbi-id-test.herokuapp.com/bus-stops/' + busStopId,
                dataType: 'jsonp',
                async: false,
                success: function(data) {
                    console.log('Bus stop info', data);
                    busMap.populateDepartureBoard(data);
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    alert(errorThrown.name);
                }
            });
        },

        populateDepartureBoard: function(busStopInfo) {

            var $departureBoard = $('#departureboard');
            $departureBoard.empty().append('<div class="arrivals" />');

            $.each(busStopInfo.arrivals, function() {

                var $busitem = $(globals.htmlSnippets).find('.bus');

                $busitem.find('.number .info').html(this.routeId);
                $busitem.find('.destination .info').html(this.destination);
                $busitem.find('.estimated-wait .info').html(this.estimatedWait);

                $departureBoard.find('.arrivals').append($busitem);

            });

        }

    };

    return busMap;
});