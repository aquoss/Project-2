currentLocation()
$(document).ready(function() {

    var map;
    var distance;

    initMap()
    var hidersLocation = new google.maps.LatLng(
        37.7904586,
        -122.4016422
    );
    // var seekersLocation = new google.maps.LatLng(
    //   37.789968,
    //   -122.425593
    // )
    addMarker(hidersLocation);

    // var distance = google.maps.geometry.spherical.computeDistanceBetween(hidersLocation, seekersLocation)/1609.34;


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

    var inTierOne = false; //.5 miles from center
    var inTierTwo = false; //.25 miles from center
    var inTierThree = false; //1000 ft from center
    var inTierFour = false; //500 ft from center
    var inTierFive = false; //100 ft from center

    function checkDistance(){
      if (distance < .5) {
        if (inTierOne = false) {
          alert1();
        }
      } else if (distance < .25) {
        if (inTierTwo = false) {
          alert2();
        }

      } else if (distance < 0.189394) { //1000 ft
        if (inTierThree = false) {
          alert3();
        }
      } else if (distance < 0.094697) { //500 ft
        if (inTierFour = false) {
          alert4();
        }
      } else if (distance < 0.0189394) { //100 ft
        if (inTierFive = false) {
          alert5();
        }
      }
    }

    // function alert1(){
    //   inTierOne = true;
    // }

  ////// CONTINUALLY UPDATES SEEKERS LOCATION ////////
    var watchId = navigator.geolocation.watchPosition(geo_success, geo_error, geo_options);
    // on success
    function geo_success(position) {
        var ltlng = (
            position.coords.latitude,
            position.coords.longitude
        );
        distance = google.maps.geometry.spherical.computeDistanceBetween(hidersLocation, ltlng)/1609.34;
    }
    // on error
    function geo_error() {
        console.log("Sorry, no position available.");
    }
    // accuracy options
    var geo_options = {
        enableHighAccuracy: true,
        timeout: 5000
    };

})

// GETS CURRENT LOCATION
function currentLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var ltlng = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      }
      hidersLocation = ltlng
    });
  } else {
    alert("Looks like your browser doesn't support geocoding!");
  }
}
