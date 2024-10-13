var coversingle = document.querySelector("#gamename");
var coverspot = document.querySelector('#gamecover');

let myKey = "Bearer 3xg8viq6xmmi59xwj3iku070g0rcvk";
var apiUrlsingle = `https://api.twitch.tv/helix/games?name=${coversingle.innerText}`

function getGameImage() {
    console.log(coversingle.innerText);
    fetch(apiUrlsingle, {  
      method: "GET",
      headers: {
        "Authorization": myKey,
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