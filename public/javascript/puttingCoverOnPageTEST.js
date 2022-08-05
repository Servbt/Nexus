let searchBtn = document.getElementById("searchBtn");
const userInput = document.getElementById("search");

// $(document).ready(function() {
//   $('#submit').click(function() {
//       var text = $('a').text();
//       console.log(text);
//   })
// });

let cover = document.getElementById("gameCover");

console.log("testing testing testing");


// Okay So I can't make a search using a regular html file for https requests //
// const getGame = (game) =>
//   fetch('/search/:game', {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   })
//     .then((res) => res.json())
//     .then((data) => {
//       console.log('Successful POST request:', data);
//       return data;
//     })
//     .catch((error) => {
//       console.error('Error in POST request:', error);
//     });

//     // Listen for when the form is submitted
// searchBtn.addEventListener('click', (e) => {
//   e.preventDefault();

//   // Create a new review object from the input values
//   const gameSearched = {
//     game: userInput.value
//   };
// console.log(gameSearched);
//   // Call our `postReview` method to make a POST request with our `newReview` object.
//   getGame(gameSearched)
//     .then((data))
//     .catch((err) => console.error(err));
// });


var getGameImage = function (gameSearched) {
  var apiUrl = `https://api.twitch.tv/helix/games?name=${gameSearched}`;
  
  fetch(apiUrl, {  
    method: "GET",
    headers: {
      "Authorization": "Bearer xgzr2w68p7c7ivfgcuewooskfmqpyt",
      "Client-ID": "fj1zbvow6f5o4tbej4txgkv0qbk0ww",
    }
  })
  .then(function (response) {
      if (response.ok) {
          console.log(response);
              response.json().then(function (data) {
                  console.log(data);
                  displayGame(data.data[0].id)
              })
          }
      })
  }

  searchBtn.addEventListener("click", function () {

    var game = userInput.value.trim();

    if (game) {
        getGameImage(game);

    } else {
        alert("Please Input a game");
    }


});


function displayGame(coverArt) {

  let gameImage = `https://static-cdn.jtvnw.net/ttv-boxart/${coverArt}_IGDB-720x200.jpg`;
  console.log(gameImage);
  cover.innerHTML = `<img src="${gameImage} alt="game Image goes here">`
}