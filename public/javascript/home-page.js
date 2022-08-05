$(document).ready(function(){
    console.log("this is working")
    $('.autoplay').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 9000,
    });
});

 
const game1 = document.querySelector('[href="/game/1"]')
const game2 = document.querySelector('[href="/game/2"]')
const game3 = document.querySelector('[href="/game/3"]')
const game4 = document.querySelector('[href="/game/4"]')
const game5 = document.querySelector('[href="/game/5"]')
const game6 = document.querySelector('[href="/game/6"]')
const game7 = document.querySelector('[href="/game/7"]')
const game8 = document.querySelector('[href="/game/8"]')
const game9 = document.querySelector('[href="/game/9"]')
const game10 = document.querySelector('[href="/game/10"]')

let cover = document.getElementById("gameCover");

let gamename = document.getElementById("gamename");


    var apiUrl1 = `https://api.twitch.tv/helix/games?name=${game1.innerText}`
    var apiUrl2 = `https://api.twitch.tv/helix/games?name=${game2.innerText}`
    var apiUrl3 = `https://api.twitch.tv/helix/games?name=${game3.innerText}`
    var apiUrl4 = `https://api.twitch.tv/helix/games?name=${game4.innerText}`
    var apiUrl5 = `https://api.twitch.tv/helix/games?name=${game5.innerText}`
    var apiUrl6 = `https://api.twitch.tv/helix/games?name=${game6.innerText}`
    var apiUrl7 = `https://api.twitch.tv/helix/games?name=${game7.innerText}`
    var apiUrl8 = `https://api.twitch.tv/helix/games?name=${game8.innerText}`
    var apiUrl9 = `https://api.twitch.tv/helix/games?name=${game9.innerText}`
    var apiUrl10 = `https://api.twitch.tv/helix/games?name=${game10.innerText}`

    function getGameImage() {
    fetch(apiUrl1, {  
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

    function getGameImage2() {
        fetch(apiUrl2, {  
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
                            displayGame2(data.data[0].id)
                    
                        
                    })
                }
            })
        }

        function getGameImage3() {
            fetch(apiUrl3, {  
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
                                displayGame3(data.data[0].id)
                        
                            
                        })
                    }
                })
            }

           function getGameImage4() {
        fetch(apiUrl4, {  
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
                            displayGame4(data.data[0].id)
                    
                        
                    })
                }
            })
        }
        function getGameImage5() {
            fetch(apiUrl5, {  
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
                                displayGame5(data.data[0].id)
                        
                            
                        })
                    }
                })
            }
                 
            function getGameImage6() {
                fetch(apiUrl6, {  
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
                                    displayGame6(data.data[0].id)
                            
                                
                            })
                        }
                    })
                }
            
                function getGameImage7() {
                    fetch(apiUrl7, {  
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
                                        displayGame7(data.data[0].id)
                                
                                    
                                })
                            }
                        })
                    }
            
                    function getGameImage8() {
                        fetch(apiUrl8, {  
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
                                            displayGame8(data.data[0].id)
                                    
                                        
                                    })
                                }
                            })
                        }
                       function getGameImage9() {
                    fetch(apiUrl9, {  
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
                                        displayGame9(data.data[0].id)
                                
                                    
                                })
                            }
                        })
                    }
                    function getGameImage10() {
                        fetch(apiUrl10, {  
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
                                            displayGame10(data.data[0].id)
                                    
                                        
                                    })
                                }
                            })
                        }
                                  
            
            

 
   function displayGame(coverArt) {

    let gameImage = `https://static-cdn.jtvnw.net/ttv-boxart/${coverArt}_IGDB-720x980.jpg`;

    
    game1.innerHTML = `<img src="${gameImage} alt="game Image goes here">`
    
  }

  function displayGame2(coverArt) {

    let gameImage = `https://static-cdn.jtvnw.net/ttv-boxart/${coverArt}_IGDB-720x980.jpg`;

    
    game2.innerHTML = `<img src="${gameImage} alt="game Image goes here">`
    
  }

  function displayGame3(coverArt) {

    let gameImage = `https://static-cdn.jtvnw.net/ttv-boxart/${coverArt}_IGDB-720x980.jpg`;

    
    game3.innerHTML = `<img src="${gameImage} alt="game Image goes here">`
    
  }

  function displayGame4(coverArt) {

    let gameImage = `https://static-cdn.jtvnw.net/ttv-boxart/${coverArt}_IGDB-720x980.jpg`;

    
    game4.innerHTML = `<img src="${gameImage} alt="game Image goes here">`
    
  }
  function displayGame5(coverArt) {

    let gameImage = `https://static-cdn.jtvnw.net/ttv-boxart/${coverArt}_IGDB-720x980.jpg`;

    
    game5.innerHTML = `<img src="${gameImage} alt="game Image goes here">`
    
  }

  function displayGame6(coverArt) {

    let gameImage = `https://static-cdn.jtvnw.net/ttv-boxart/${coverArt}_IGDB-720x980.jpg`;

    
    game6.innerHTML = `<img src="${gameImage} alt="game Image goes here">`
    
  }

  function displayGame7(coverArt) {

    let gameImage = `https://static-cdn.jtvnw.net/ttv-boxart/${coverArt}_IGDB-720x980.jpg`;

    
    game7.innerHTML = `<img src="${gameImage} alt="game Image goes here">`
    
  }

  function displayGame8(coverArt) {

    let gameImage = `https://static-cdn.jtvnw.net/ttv-boxart/${coverArt}_IGDB-720x980.jpg`;

    
    game8.innerHTML = `<img src="${gameImage} alt="game Image goes here">`
    
  }

  function displayGame9(coverArt) {

    let gameImage = `https://static-cdn.jtvnw.net/ttv-boxart/${coverArt}_IGDB-720x980.jpg`;

    
    game9.innerHTML = `<img src="${gameImage} alt="game Image goes here">`
    
  }
  function displayGame10(coverArt) {

    let gameImage = `https://static-cdn.jtvnw.net/ttv-boxart/${coverArt}_IGDB-720x980.jpg`;

    
    game10.innerHTML = `<img src="${gameImage} alt="game Image goes here">`
    
  }


  getGameImage(game1)
    getGameImage2(game2)
    getGameImage3(game3)
    getGameImage4(game4)
    getGameImage5(game5)
    getGameImage6(game6)
    getGameImage7(game7)
    getGameImage8(game8)
    getGameImage9(game9)
    getGameImage10(game10)
    // getGameImage(gamename)
  
//   function displayGame(coverArt) {
  
//     let gameImage = `https://static-cdn.jtvnw.net/ttv-boxart/${coverArt}_IGDB-720x980.jpg`;
//     console.log(gameImage);
//     cover.innerHTML = `<img src="${gameImage} alt="game Image goes here">`
