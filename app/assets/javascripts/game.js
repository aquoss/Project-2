$(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
  $('.modal').modal();

  var timer = setInterval(countdown, 1000);
  function countdown(){
    var duration = $('.game-duration').data('duration')*60000;
    var updated = $('.game-duration').data('updated');
    var date = Date.parse(updated);
    var totalTime = duration - (Date.now() - date);
    if (totalTime <= 0) {
      clearInterval(timer);
    } else {
      var minutes = new Date(totalTime).getMinutes();
      var seconds = new Date(totalTime - (minutes * 60000)).getSeconds();
      $('#minutes').html(minutes);
      $('#seconds').html(seconds);
    }
  }

});
