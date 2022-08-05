searchBtn.addEventListener('click', expand);

const searchBtn = document.getElementById("searchBtn");
const userInput = document.getElementById("search");

searchBtn.addEventListener("click", function () {

    var game = userInput.value.trim();

    if (game) {
        getGameImage(game);

    } else {
        alert("Please Input a game");
    }


});
