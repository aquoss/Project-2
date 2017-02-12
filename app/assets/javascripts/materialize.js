$(document).ready(function(){
  $('.parallax').parallax();
  $('.dropdown-button').dropdown();
  $('.collapsible').collapsible();

  var options = [
    {selector: '.rule-one', offset: 200, callback: textFadeIn}
  ];
  Materialize.scrollFire(options);

})

function textFadeIn(element){
  Materialize.showStaggeredList($(element));
}
