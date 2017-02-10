currentLocation()
$(document).ready(function() {
    var map;

    initMap()
    var hidersLocation = new google.maps.LatLng(
        37.7904586,
        -122.4016422
    );
    var seekersLocation = new google.maps.LatLng(
      37.789968,
      -122.425593
    )
    addMarker(hidersLocation);
    var distance = google.maps.geometry.spherical.computeDistanceBetween(hidersLocation, seekersLocation)/1609.34;
    console.log(distance);

    // Add circle overlay and bind to marker
    var circle = new google.maps.Circle({
        map: map,
        radius: 1609, // 10 miles in metres
        fillColor: '#155fee',
        strokeWeight: 0
    });
    circle.bindTo('center', marker, 'position');

    function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
            center: {
                lat: 37.7904586,
                lng: -122.4016422
            },
            zoom: 12,
            disableDefaultUI: true
        });
    }

    function addMarker(){
      // console.log(hidersLocation)
      marker = new google.maps.Marker({
        position: hidersLocation,
        map: map
      })
      marker.setVisible(false);
    }

    // UPDATE USERS LOCATION
    var watchId = navigator.geolocation.watchPosition(geo_success, geo_error, geo_options);

    // SUCCESSFUL WATCHING
    function geo_success(position) {
        console.log(position.coords.latitude, position.coords.longitude);
        var ltlng = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        }


    }
    // ERROR WATCHING
    function geo_error() {
        console.log("Sorry, no position available.");
    }
    // GEO
    var geo_options = {
        enableHighAccuracy: true,
        timeout: 5000
    };

    // SIMULATES HIDERS LOC
})
function currentLocation() {
  // Try HTML5 geolocation.

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var ltlng = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      }
      // map.setCenter(ltlng)
      hidersLocation = ltlng
    });
  } else {
    alert("Looks like your browser doesn't support geocoding!");
  }
}

function checkDistance(){

}
