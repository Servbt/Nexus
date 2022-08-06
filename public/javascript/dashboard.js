const yourGames = document.querySelector('#yourgames');

yourGames.addEventListener('click', async () => {
  // get user info
  const userData = await User.findByPk(req.session.user_id, {
    attributes: { exclude: ['password'] },
  });
  const user = userData.get({ plain: true });
});

// TODO: make books recommended by books the user has in list not by one book id
// foryou.addEventListener('click', () => {
//   const recommendedIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   const recommendedBooks = [];

//   recommendedIds.forEach(async (id) => {
//     const bookData = await Book.findByPk(id);
//     recommendedBooks.push(bookData.dataValues);
//   });
// });

function booksread() {
  console.log(data);
}

function currentbooks() {
  console.log(data);
}
