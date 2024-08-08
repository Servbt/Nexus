var coversingle = document.querySelector("#gamename")
var coverspot = document.querySelector('#gamecover')
require('dotenv').config();
const myKey = process.env.O_AUTH_KEY;
const myClient = process.env.CLIENT_ID;

var apiUrlsingle = `https://api.twitch.tv/helix/games?name=${coversingle.innerText}`

function getGameImage() {
    fetch(apiUrlsingle, {  
      method: "GET",
      headers: {
        myKey,
        myClient,
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
      
        
            coverspot.innerHTML = `<img src="${gameImage} alt="game Image goes here">`
         
        
      }

      getGameImage(coverspot)