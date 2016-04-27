/*-------------------------------------------------------------------*/
/*  Google map
/*-------------------------------------------------------------------*/
(function () {
    if (!$('#google-map').length) {
        return false;
    }

    (function initGmap() {

        // Custom icon which looks good with the dark theme
        var icon = '../../images/map-marker-icon.png';

        // https://snazzymaps.com/style/38/shades-of-grey
        var style = [
        {
            "featureType": "all",
            "elementType": "labels.text.fill",
            "stylers": [
                { "saturation": 36 },
                { "color": "#000000" },
                { "lightness": 40 }
            ]
        },
        {
            "featureType": "all",
            "elementType": "labels.text.stroke",
            "stylers": [
                { "visibility": "on" },
                { "color": "#000000" },
                { "lightness": 16 }
            ]
        },
        {
            "featureType": "all",
            "elementType": "labels.icon",
            "stylers": [
                { "visibility": "off" }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [
                { "color": "#000000" },
                { "lightness": 20 }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [
                { "color": "#000000" },
                { "lightness": 17 },
                { "weight": 1.2 }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [
                { "color": "#000000" },
                { "lightness": 20 }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
                { "color": "#000000" },
                { "lightness": 21 }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [
                { "color": "#000000" },
                { "lightness": 17 }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [
                { "color": "#000000" },
                { "lightness": 29 },
                { "weight": 0.2 }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [
                { "color": "#000000" },
                { "lightness": 18 }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [
                { "color": "#000000" },
                { "lightness": 16 }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [
                { "color": "#000000" },
                { "lightness": 19 }
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
                { "color": "#000000" },
                { "lightness": 17 }
            ]
        }];


        // Create a map object, and include the MapTypeId to add
        // to the map type control.
        var latlng = new google.maps.LatLng(33.758391,-118.1403347);
        var mapOptions = {
            zoom: 13,
            center: latlng,
            panControl: false,
            zoomControl: true,
            scaleControl: false,
            mapTypeControl: false,
            scrollwheel: false,
            styles: style,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        var map = new google.maps.Map(document.getElementById('google-map'), mapOptions);

        google.maps.event.trigger(map, 'resize');

        var marker = new google.maps.Marker({
            position: latlng,
            map: map,
            title: "",
            icon: icon
        });

    })();

})();
