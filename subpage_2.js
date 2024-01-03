

document.addEventListener('DOMContentLoaded', function () {
  var cardWrapper = document.querySelector('#sec7 .sec7_card_wrapper');


  cardWrapper.addEventListener('mouseenter', function () {
    cardWrapper.style.animationPlayState = 'paused';
});


  cardWrapper.addEventListener('mouseleave', function () {
    cardWrapper.style.animationPlayState = 'running';
});
});


$(function(){

  let hide = $(".hide");



  hide.hide();


})