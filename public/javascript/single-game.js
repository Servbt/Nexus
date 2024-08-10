var coversingle = document.querySelector("#gamename")
var coverspot = document.querySelector('#gamecover')

var apiUrlsingle = `https://api.twitch.tv/helix/games?name=${coversingle.innerText}`

function getGameImage() {
    console.log(coversingle.innerText);
    fetch(apiUrlsingle, {  
      method: "GET",
      headers: {
        "Authorization": "Bearer pl6j2zwdluqjy638v2zgi2q42417qf",
        "Client-Id": "fj1zbvow6f5o4tbej4txgkv0qbk0ww",
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

      getGameImage(coverspot);