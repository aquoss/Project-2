// currentLocation()
$(document).ready(function() {

    var map;
    var distance;
    var seekersLocation;
    var hiderLat = $('.hider-loc').data('lat'),
        hiderLng = $('.hider-loc').data('lng');
        var hidersMapLocation = new google.maps.LatLng(hiderLat, hiderLng);
    var hidersLocation = {
      lat: hiderLat,
      lng: hiderLng
    }
    // LOAD MAP AND HIDDEN HIDER MARKER
    initMap();
    addMarker(hidersLocation);

    // ADD RADIUS CIRCLE
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

    var inTierOne = true; //.5 miles from center
    var inTierTwo = true; //.25 miles from center
    var inTierThree = true; //1000 ft from center
    var inTierFour = true; //500 ft from center
    var inTierFive = true; //100 ft from center

    function checkDistance(){
      if (distance <= .5 && distance > .25) {
        if (inTierOne) {
          inTierOne = false;
          alert("Tier One: " + (Math.round(distance * 5282)) + " feet away");
        }
      } else if (distance <= .25 && distance > 0.189394) {
        if (inTierTwo) {
          inTierTwo = false;
          alert("Tier Two: " + (Math.round(distance * 5282)) + " feet away");
        }

      } else if (distance <= 0.189394 && distance > 0.094697) { //1000 ft
        if (inTierThree) {
          inTierThree = false;
          $('#modal3').modal('open');
          // alert("Tier Three: " + (Math.round(distance * 5282)) + " feet away");
        }
      } else if (distance <= 0.094697 && distance > 0.0189394) { //500 ft
        if (inTierFour) {
          inTierFour = false;
          $('#modal1').modal('open');
          // alert("Tier Four: " + (Math.round(distance * 5282)) + " feet away");
        }
      } else if (distance <= 0.0189394) { //100 ft
        if (inTierFive) {
          inTierFive = false;
          $('#modal1').modal('open');
          // alert("Tier Five: " + (Math.round(distance * 5282)) + " feet away");
          // in the alert, have a button to end the game

        }
      }
    }

    //CONTINUALLY UPDATE SEEKERS LOCATION
    var watchId = navigator.geolocation.watchPosition(geo_success, geo_error, geo_options);
    // on success
    function geo_success(position) {
        seekersLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        };
        var seekersMapLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        distance = google.maps.geometry.spherical.computeDistanceBetween(hidersMapLocation, seekersMapLocation)/1609.34;
        checkDistance(distance);
        console.log("distance is: ", distance);
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

if(window.location.pathname == '/games/new'){
  currentLocation();

}

function currentLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var ltlng = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      }
      hidersLocation = ltlng
      $('#hider-lat').val(position.coords.latitude);
      console.log($('#hider-lat').val())
      $('#hider-lng').val(position.coords.longitude);
      console.log(hidersLocation)
    });
  } else {
    alert("Looks like your browser doesn't support geocoding!");
  }
}
