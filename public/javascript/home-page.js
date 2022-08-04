$(document).ready(function(){
    console.log("this is working")
    $('.autoplay').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1000,
    });
  });

  const input = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');

const expand = (e) => {
  e.preventDefault();
  searchBtn.classList.toggle('close');
  input.classList.toggle('square');
};

searchBtn.addEventListener('click', expand);
