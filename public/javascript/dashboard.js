const yourgames = document.querySelector('#yourgames');

yourgames.addEventListener('click', async () => {
  // get user info
  const userData = await User.findByPk(req.session.user_id, {
    attributes: { exclude: ['password'] },
  });
  const user = userData.get({ plain: true });
});

// TODO: make games recommended by games the user has in list not by one game id
// foryou.addEventListener('click', () => {
//   const recommendedIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   const recommendedGames = [];

//   recommendedIds.forEach(async (id) => {
//     const gameData = await Game.findByPk(id);
//     recommendedGames.push(gameData.dataValues);
//   });
// });

function currentgames() {
  console.log(data);
}
