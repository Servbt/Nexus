const addBtn = document.querySelector('#add-btn');
const deleteBtn = document.querySelector('#delete-btn');
const gameId = document.querySelector('#details').dataset.id;

const handleAddGame = async () => {
  const response = await fetch('/api/user/add', {
    method: 'POST',
    body: JSON.stringify({game_id: gameId}),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    addBtn.classList.add('disabled');
    addBtn.textContent = 'Added';
  } else {
    alert('Failed to add game');
  }
};

const handleDeleteGame = async () => {
  const response = await fetch(`/api/user/delete/${gameId}`, {
    method: 'DELETE',
  });

  if (response.ok) {
    addBtn.classList.remove('disabled');
    addBtn.textContent = 'Add to Your Collection';
    deleteBtn.style.display = 'none';
  } else {
    alert('Failed to delete game');
  }
};

addBtn.addEventListener('click', handleAddGame);
deleteBtn.addEventListener('click', handleDeleteGame);
