
const commentFormHandler = async function (event) {
  event.preventDefault();
  let gameId = document.querySelector('#details').dataset.id;
  const body = document.querySelector('textarea[name="comment-body"]').value.trim();

  if (body) {
    const response = await fetch('/api/review', {
      method: 'POST',
      body: JSON.stringify({ content: body, game_id: gameId }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      location.reload();
    } else {
      alert('Sorry, your review could not be added.');
    }
  }
};

document
  .querySelector('#new-comment-form')
  .addEventListener('submit', commentFormHandler);