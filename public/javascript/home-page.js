$(document).ready(function(){
    console.log("this is working")
    $('.autoplay').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1000,
    });
  });

 

let cover = document.getElementById("gameCover");

let gamename = document.getElementById("gamename");



    var apiUrl = `https://api.twitch.tv/helix/games?name=${gamename.innerText}`;

    function getGameImage() {
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
            

 
   function displayGame(coverArt) {

    let gameImage = `https://static-cdn.jtvnw.net/ttv-boxart/${coverArt}_IGDB-720x980.jpg`;

    console.log(gameImage);
    cover.innerHTML = `<img src="${gameImage} alt="game Image goes here">`
  }

  
    getGameImage(gamename)
  

    // getGameImage(gamename)
  
//   function displayGame(coverArt) {
  
//     let gameImage = `https://static-cdn.jtvnw.net/ttv-boxart/${coverArt}_IGDB-720x980.jpg`;
//     console.log(gameImage);
//     cover.innerHTML = `<img src="${gameImage} alt="game Image goes here">`
  