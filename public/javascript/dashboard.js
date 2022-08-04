$(document).ready(function(){
  console.log("this is working")
  $('.autoplay').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  });
});