// $(document).ready(function() {
//   $( ".mr-auto .nav-item" ).bind( "click", function(event) {
//       event.preventDefault();
//       var clickedItem = $( this );
//       $( ".mr-auto .nav-item" ).each( function() {
//           $( this ).removeClass( "nav-link active" );
//       });
//       clickedItem.addClass( "nav-link active" );
//   });
// });


const input = document.getElementById('search-input');
// const searchBtn = document.getElementById('search-btn');

const expand = () => {
  searchBtn.classList.toggle('close');
  input.classList.toggle('square');
};

searchBtn.addEventListener('click', expand);

