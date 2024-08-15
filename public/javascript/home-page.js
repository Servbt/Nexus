const input = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
let myKey = "Bearer 89rw24l8ylkfe9dshzor8avzwho4c5";
let myClient = "fj1zbvow6f5o4tbej4txgkv0qbk0ww"

const expand = (e) => {
  e.preventDefault();
  searchBtn.classList.toggle('close');
  input.classList.toggle('square');
};

searchBtn.addEventListener('click', expand);

$(document).ready(function(){
  console.log("this is working")
  $('.autoplay').slick({
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
  
  });
});


// const game1 = document.querySelector('[href="/game/121"]')
const game2 = document.querySelector('[href="/game/122"]')
const game3 = document.querySelector('[href="/game/123"]')
const game4 = document.querySelector('[href="/game/124"]')
const game5 = document.querySelector('[href="/game/125"]')
const game6 = document.querySelector('[href="/game/126"]')
const game7 = document.querySelector('[href="/game/127"]')
const game8 = document.querySelector('[href="/game/128"]')
const game9 = document.querySelector('[href="/game/129"]')
const game10 = document.querySelector('[href="/game/130"]')
const game11 = document.querySelector('[href="/game/131"]')
const game12 = document.querySelector('[href="/game/132"]')
const game13 = document.querySelector('[href="/game/133"]')
const game14 = document.querySelector('[href="/game/134"]')
const game15 = document.querySelector('[href="/game/135"]')
const game16 = document.querySelector('[href="/game/136"]')
const game17 = document.querySelector('[href="/game/137"]')
const game18 = document.querySelector('[href="/game/138"]')
const game19 = document.querySelector('[href="/game/139"]')
const game20 = document.querySelector('[href="/game/140"]')

let cover = document.getElementById("gameCover");

let gamename = document.getElementById("gamename");


  // var apiUrl1 = `https://api.twitch.tv/helix/games?name=${game1.innerText}`
  var apiUrl2 = `https://api.twitch.tv/helix/games?name=${game2.innerText}`
  var apiUrl3 = `https://api.twitch.tv/helix/games?name=${game3.innerText}`
  var apiUrl4 = `https://api.twitch.tv/helix/games?name=${game4.innerText}`
  var apiUrl5 = `https://api.twitch.tv/helix/games?name=${game5.innerText}`
  var apiUrl6 = `https://api.twitch.tv/helix/games?name=${game6.innerText}`
  var apiUrl7 = `https://api.twitch.tv/helix/games?name=${game7.innerText}`
  var apiUrl8 = `https://api.twitch.tv/helix/games?name=${game8.innerText}`
  var apiUrl9 = `https://api.twitch.tv/helix/games?name=${game9.innerText}`
  var apiUrl10 = `https://api.twitch.tv/helix/games?name=${game10.innerText}`
  var apiUrl11 = `https://api.twitch.tv/helix/games?name=${game11.innerText}`
  var apiUrl12 = `https://api.twitch.tv/helix/games?name=${game12.innerText}`
  var apiUrl13 = `https://api.twitch.tv/helix/games?name=${game13.innerText}`
  var apiUrl14 = `https://api.twitch.tv/helix/games?name=${game14.innerText}`
  var apiUrl15 = `https://api.twitch.tv/helix/games?name=${game15.innerText}`
  var apiUrl16 = `https://api.twitch.tv/helix/games?name=${game16.innerText}`
  var apiUrl17 = `https://api.twitch.tv/helix/games?name=${game17.innerText}`
  var apiUrl18 = `https://api.twitch.tv/helix/games?name=${game18.innerText}`
  var apiUrl19 = `https://api.twitch.tv/helix/games?name=${game19.innerText}`
  var apiUrl20 = `https://api.twitch.tv/helix/games?name=broken age`

  // function getGameImage() {
  // fetch(apiUrl1, {  
  //   method: "GET",
  //   headers: {
  //     "Authorization": myKey,
  //     "Client-ID": myClient,
  //   }
  // })
  // .then(function (response) {
  //     if (response.ok) {
  //         console.log(response);
  //             response.json().then(function (data) {
  //                 console.log(data);
  //                     displayGame(data.data[0].id)
              
                  
  //             })
  //         }
  //     })
  // }

  function getGameImage2() {
      fetch(apiUrl2, {  
        method: "GET",
        headers: {
          "Authorization": myKey,
          "Client-ID": myClient,
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
              "Authorization": myKey,
              "Client-ID": myClient,
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
          "Authorization": myKey,
          "Client-ID": myClient,
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
              "Authorization": myKey,
              "Client-ID": myClient,
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
                  "Authorization": myKey,
                  "Client-ID": myClient,
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
                      "Authorization": myKey,
                      "Client-ID": myClient,
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
                          "Authorization": myKey,
                          "Client-ID": myClient,
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
                      "Authorization": myKey,
                      "Client-ID": myClient,
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
                          "Authorization": myKey,
                          "Client-ID": myClient,
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


function getGameImage11() {
  fetch(apiUrl11, {  
    method: "GET",
    headers: {
      "Authorization": myKey,
      "Client-ID": myClient,
    }
  })
  .then(function (response) {
      if (response.ok) {
          console.log(response);
              response.json().then(function (data) {
                  console.log(data);
                      displayGame11(data.data[0].id)
              
                  
              })
          }
      })
  }

  function getGameImage12() {
      fetch(apiUrl12, {  
        method: "GET",
        headers: {
          "Authorization": myKey,
          "Client-ID": myClient,
        }
      })
      .then(function (response) {
          if (response.ok) {
              console.log(response);
                  response.json().then(function (data) {
                      console.log(data);
                          displayGame12(data.data[0].id)
                  
                      
                  })
              }
          })
      }

      function getGameImage13() {
          fetch(apiUrl13, {  
            method: "GET",
            headers: {
              "Authorization": myKey,
              "Client-ID": myClient,
            }
          })
          .then(function (response) {
              if (response.ok) {
                  console.log(response);
                      response.json().then(function (data) {
                          console.log(data);
                              displayGame13(data.data[0].id)
                      
                          
                      })
                  }
              })
          }

         function getGameImage14() {
      fetch(apiUrl14, {  
        method: "GET",
        headers: {
          "Authorization": myKey,
          "Client-ID": myClient,
        }
      })
      .then(function (response) {
          if (response.ok) {
              console.log(response);
                  response.json().then(function (data) {
                      console.log(data);
                          displayGame14(data.data[0].id)
                  
                      
                  })
              }
          })
      }
      function getGameImage15() {
          fetch(apiUrl15, {  
            method: "GET",
            headers: {
              "Authorization": myKey,
              "Client-ID": myClient,
            }
          })
          .then(function (response) {
              if (response.ok) {
                  console.log(response);
                      response.json().then(function (data) {
                          console.log(data);
                              displayGame15(data.data[0].id)
                      
                          
                      })
                  }
              })
          }
               
          function getGameImage16() {
              fetch(apiUrl16, {  
                method: "GET",
                headers: {
                  "Authorization": myKey,
                  "Client-ID": myClient,
                }
              })
              .then(function (response) {
                  if (response.ok) {
                      console.log(response);
                          response.json().then(function (data) {
                              console.log(data);
                                  displayGame16(data.data[0].id)
                          
                              
                          })
                      }
                  })
              }
          
              function getGameImage17() {
                  fetch(apiUrl17, {  
                    method: "GET",
                    headers: {
                      "Authorization": myKey,
                      "Client-ID": myClient,
                    }
                  })
                  .then(function (response) {
                      if (response.ok) {
                          console.log(response);
                              response.json().then(function (data) {
                                  console.log(data);
                                      displayGame17(data.data[0].id)
                              
                                  
                              })
                          }
                      })
                  }
          
                  function getGameImage18() {
                      fetch(apiUrl18, {  
                        method: "GET",
                        headers: {
                          "Authorization": myKey,
                          "Client-ID": myClient,
                        }
                      })
                      .then(function (response) {
                          if (response.ok) {
                              console.log(response);
                                  response.json().then(function (data) {
                                      console.log(data);
                                          displayGame18(data.data[0].id)
                                  
                                      
                                  })
                              }
                          })
                      }
                     function getGameImage19() {
                  fetch(apiUrl19, {  
                    method: "GET",
                    headers: {
                      "Authorization": myKey,
                      "Client-ID": myClient,
                    }
                  })
                  .then(function (response) {
                      if (response.ok) {
                          console.log(response);
                              response.json().then(function (data) {
                                  console.log(data);
                                      displayGame19(data.data[0].id)
                              
                                  
                              })
                          }
                      })
                  }
                  function getGameImage20() {
                      fetch(apiUrl20, {  
                        method: "GET",
                        headers: {
                          "Authorization": myKey,
                          "Client-ID": myClient,
                        }
                      })
                      .then(function (response) {
                          if (response.ok) {
                              console.log(response);
                                  response.json().then(function (data) {
                                      console.log(data);
                                          displayGame20(data.data[0].id)
                                  
                                      
                                  })
                              }
                          })
                      }
                                         
          
          

// function displayGame(coverArt) {

//   let gameImage = `https://static-cdn.jtvnw.net/ttv-boxart/${coverArt}_IGDB-720x980.jpg`;

  
//   game1.innerHTML = `<img src="${gameImage} alt="game Image goes here">`
  
// }

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



 function displayGame11(coverArt) {

  let gameImage = `https://static-cdn.jtvnw.net/ttv-boxart/${coverArt}_IGDB-720x980.jpg`;

  
  game11.innerHTML = `<img src="${gameImage} alt="game Image goes here">`
  
}

function displayGame12(coverArt) {

  let gameImage = `https://static-cdn.jtvnw.net/ttv-boxart/${coverArt}_IGDB-720x980.jpg`;

  
  game12.innerHTML = `<img src="${gameImage} alt="game Image goes here">`
  
}

function displayGame13(coverArt) {

  let gameImage = `https://static-cdn.jtvnw.net/ttv-boxart/${coverArt}_IGDB-720x980.jpg`;

  
  game13.innerHTML = `<img src="${gameImage} alt="game Image goes here">`
  
}

function displayGame14(coverArt) {

  let gameImage = `https://static-cdn.jtvnw.net/ttv-boxart/${coverArt}_IGDB-720x980.jpg`;

  
  game14.innerHTML = `<img src="${gameImage} alt="game Image goes here">`
  
}
function displayGame15(coverArt) {

  let gameImage = `https://static-cdn.jtvnw.net/ttv-boxart/${coverArt}_IGDB-720x980.jpg`;

  
  game15.innerHTML = `<img src="${gameImage} alt="game Image goes here">`
  
}

function displayGame16(coverArt) {

  let gameImage = `https://static-cdn.jtvnw.net/ttv-boxart/${coverArt}_IGDB-720x980.jpg`;

  
  game16.innerHTML = `<img src="${gameImage} alt="game Image goes here">`
  
}

function displayGame17(coverArt) {

  let gameImage = `https://static-cdn.jtvnw.net/ttv-boxart/${coverArt}_IGDB-720x980.jpg`;

  
  game17.innerHTML = `<img src="${gameImage} alt="game Image goes here">`
  
}

function displayGame18(coverArt) {

  let gameImage = `https://static-cdn.jtvnw.net/ttv-boxart/${coverArt}_IGDB-720x980.jpg`;

  
  game18.innerHTML = `<img src="${gameImage} alt="game Image goes here">`
  
}

function displayGame19(coverArt) {

  let gameImage = `https://static-cdn.jtvnw.net/ttv-boxart/${coverArt}_IGDB-720x980.jpg`;

  
  game19.innerHTML = `<img src="${gameImage} alt="game Image goes here">`
  
}
function displayGame20(coverArt) {

  let gameImage = `https://static-cdn.jtvnw.net/ttv-boxart/${coverArt}_IGDB-720x980.jpg`;

  
  game20.innerHTML = `<img src="${gameImage} alt="game Image goes here">`
  
}


// getGameImage(game1)
  getGameImage2(game2)
  getGameImage3(game3)
  getGameImage4(game4)
  getGameImage5(game5)
  getGameImage6(game6)
  getGameImage7(game7)
  getGameImage8(game8)
  getGameImage9(game9)
  getGameImage10(game10)
  getGameImage11(game11)
  getGameImage12(game12)
  getGameImage13(game13)
  getGameImage14(game14)
  getGameImage15(game15)
  getGameImage16(game16)
  getGameImage17(game17)
  getGameImage18(game18)
  getGameImage19(game19)
  getGameImage20(game20)
  // getGameImage(gamename)

//   function displayGame(coverArt) {

//     let gameImage = `https://static-cdn.jtvnw.net/ttv-boxart/${coverArt}_IGDB-720x980.jpg`;
//     console.log(gameImage);
//     cover.innerHTML = `<img src="${gameImage} alt="game Image goes here">`

