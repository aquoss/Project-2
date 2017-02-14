$(document).ready(function(){
  $('.parallax').parallax();
  $('.dropdown-button').dropdown();
  $('.collapsible').collapsible();
  $('select').material_select();

  var options = [
    {selector: '.rule-one', offset: 200, callback: textFadeIn},
    {selector: '.rule-two', offset: 200, callback: textFadeIn},
    {selector: '.rule-three', offset: 200, callback: textFadeIn},
    {selector: '.rule-four', offset: 200, callback: textFadeIn},
    {selector: '.rule-five', offset: 200, callback: textFadeIn}
  ];
  Materialize.scrollFire(options);

})

function textFadeIn(element){
  Materialize.showStaggeredList($(element));
}
