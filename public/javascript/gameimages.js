const { Game } = require("../../models");

let cover = document.getElementsByClassName("card-body")

var apiUrl = `https://static-cdn.jtvnw.net/ttv-boxart/${game}_IGDB-720x980.jpg`;
  
options = {  
  method: "GET",
  headers: {
    "Authorization": "Bearer xgzr2w68p7c7ivfgcuewooskfmqpyt",
    "Client-ID": "fj1zbvow6f5o4tbej4txgkv0qbk0ww",
  }
}

function getGameImage() {
  fetch(url1, options1)
      .then(response => response.json())
      .then(function(response){
          console.log(response)
          $('<img>', {
              src: response.value[0].thumbnail
          }).appendTo('.card-body')
      
          
  
          
  })}

  getGameImage(Game)