$(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
  $('.modal').modal();


  function startTimer(duration, display) {
      var timer = duration, minutes, seconds;
      setInterval(function () {
          minutes = parseInt(timer / 60, 10)
          seconds = parseInt(timer % 60, 10);

          minutes = minutes < 10 ? "0" + minutes : minutes;
          seconds = seconds < 10 ? "0" + seconds : seconds;

          display.text(minutes + ":" + seconds);

          if (--timer < 0) {
              timer = duration;
          }
      }, 1000);
  }

  $('.accept-game').on('click',function(){
    jQuery(function ($) {
        var minutes = $('.game-duration').data;
        var timeInSeconds = 60 * minutes,
            display = $('#time');
        startTimer(timeInSeconds, display);
    });

  });


});
