$(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
  $('.modal').modal();
  $('#out-of-time').hide();

  var timer = setInterval(countdown, 1000);
  function countdown(){
    var duration = $('.game-duration').data('duration')*60000;
    var updatedString = $('.game-duration').data('updated');
    var updated = Date.parse(updatedString);
    var totalTime = duration - (Date.now() - updated);
    if (totalTime <= 0) {
      clearInterval(timer);
      $('#out-of-time').show();
    } else {
      var minutes = new Date(totalTime).getMinutes();
      var seconds = new Date(totalTime - (minutes * 60000)).getSeconds();
      $('#minutes').html(minutes);
      $('#seconds').html(seconds);
    }
  }

});
