var coversingle = document.querySelector("#gamename")
var coverspot = document.querySelector('#gamecover')


var apiUrlsingle = `https://api.twitch.tv/helix/games?name=${coversingle.innerText}`

function getGameImage() {
    fetch(apiUrlsingle, {  
      method: "GET",
      headers: {
        "Authorization": "mk2vtfkhirhf5j30t363w9wycorvm1",
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
      
        
            coverspot.innerHTML = `<img src="${gameImage} alt="game Image goes here">`
         
        
      }

      getGameImage(coverspot)