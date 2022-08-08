const addBtn = document.querySelector('.add-btn');
const deleteBtn = document.querySelector('.delete-btn');
let gameId = document.querySelector('#details').dataset.id;

const addingGame = async () => {
  const response = await fetch('/api/user/add', {
    method: 'POST',
    body: JSON.stringify({ game_id: gameId }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    addBtn.classList.add('active');
    addBtn.textContent = 'Added to your favorites!';
    location.reload();
  } else {
    alert('This game is already added to your favorites.');
  }
};

const deletingGame = async () => {
  const response = await fetch(`/api/user/delete/${gameId}`, {
    method: 'DELETE',
  });

  if (response.ok) {
    // addBtn.classList.remove('disabled');
    addBtn.textContent = 'Add to Your Favorites';
    deleteBtn.style.display = 'none';
    location.reload();
  } else {
    alert('Failed to delete game');
  }
};

addBtn.addEventListener('click', addingGame);
deleteBtn.addEventListener('click', deletingGame);
