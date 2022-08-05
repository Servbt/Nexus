const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-btn');

const fetchGames = async (e) => {
  e.preventDefault();
  const userSearch = searchInput.value;

  if (userSearch) {
    document.location.replace(`/search/${userSearch}`);
  }
};

searchButton.addEventListener('click', fetchGames);