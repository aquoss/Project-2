
$(document).ready(function() {
    var map;

    function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
            center: {
                lat: -34.397,
                lng: 150.644
            },
            zoom: 12,
            disableDefaultUI: true
        });
    }
    initMap()


})

function currentLocation() {
    // Try HTML5 geolocation.

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {

            console.log(ltlng)

            map.setCenter(ltlng)
        });
    } else {
        alert("Looks like your browser doesn't support geocoding!");
    }
}

var watchId = navigator.geolocation.watchPosition(geo_success, geo_error, geo_options);


function geo_success(position) {
  console.log(position.coords.latitude, position.coords.longitude);
  var ltlng = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
  }
}

function geo_error() {
  console.log("Sorry, no position available.");
}

var geo_options = {
  enableHighAccuracy: true,
  timeout           : 5000
};
