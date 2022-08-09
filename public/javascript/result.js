const gameName = document.querySelector('.game-name').dataset.name;
const searchButton = document.querySelector('.search-game-btn');

const fetchGame = async (e) => {
  e.preventDefault();
  const response = await fetch(`/api/game/${gameName}`, {
    method: 'GET',
    body: JSON.stringify({ game_id: gameId }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  console.log(response)

  if (response.ok) {
    addBtn.classList.add('active');
    addBtn.textContent = 'Added to your favorites!';
    location.reload();
  } else {
    alert('This game is already added to your favorites.');
  }
};
// const fetchGame = async (e) => {
//   e.preventDefault();
//   const userSearch = searchInput.value;

//   if (userSearch) {
//     document.location.replace(`/search/${userSearch}`);
//   }
// };

searchButton.addEventListener('click', fetchGames(gameName))
