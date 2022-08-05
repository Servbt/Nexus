const router = require('express').Router();

const { Game, User, Review, Tag } = require('../models');

const withAuth = require('../utils/auth');
const { randomNumber } = require('../utils/helper');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

router.get('/', async (req, res) => {
  res.render('landingpage', { layout: 'landing.handlebars' });
});

// render login page
router.get('/login', async (req, res) => {
  // redirect to home if user is logged in
  if (req.session.logged_in) {
    res.redirect('/home');
    return;
  }
  res.render('login', { layout: 'signin.handlebars' });
});

// render signup page
router.get('/signup', async (req, res) => {
  res.render('signup', { layout: 'signin.handlebars' });
});


router.get('/home', async (req, res) => {
  try {
    if (!req.session.logged_in) {
      res.redirect('/login');
      return;
    }
    // USER INFO
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
    });
    const user = userData.get({ plain: true });

    //generating random 10 games
    const gameNum = await Game.findAndCountAll();
    const randomGames = [];

    for (let i = 0; i < 10; i++) {
      const gameData = await Game.findByPk(randomNumber(gameNum.count));
      randomGames.push(gameData.dataValues);
    }
    res.render('all-posts-new', {
      user,
      randomGames,
      logged_in: req.session.logged_in,
    });
    // Game.findAll({ limit: 10 })
    //   .then((dbData) => {
    //     const games = dbData.map((game) => game.get({ plain: true }));

    // res.render('all-posts-new', {
    //   user,
    //   games,
    //   logged_in: req.session.logged_in,
    // })

  } catch (err) {
    res.status(500).json(err);
  }
});

// Render search results
router.get('/search/:term', async (req, res) => {
  try {
    // get user info
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
    });
    const user = userData.get({ plain: true });

    const searchedTerm = req.params.term.replace('%20', '_');
    const gameData = await Game.findAll({
      where: {
        [Op.or]: [
          { game: { [Op.like]: `%${req.params.term}%` } },
          { genre: { [Op.like]: `%${req.params.term}%` } },
        ],
      },
    });

    const games = gameData.map((game) => game.get({ plain: true }));

    res.render('search', {
      user,
      searchedTerm,
      games,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// render Game by id
router.get('/game/:id', async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Game }],
    });
    const user = userData.get({ plain: true });

    const gameData = await Game.findByPk(req.params.id
      //   , {
      //   include: [
      //     { model: Review }, { model: User }, { model: Tag }
      //   ]
      // }
    );
    const game = gameData.get({ plain: true });

    // compare 'Game' to 'user.Games'\
    const userGameIds = user.games.map((game) => game.id);
    const hasGame = userGameIds.includes(game.id);

    // const recommendedData = same.recommended.slice(1, -1).split("', '");
    // const recommendedGames = recommendedData.map((element) =>
    //   element.replace('"', '').replace("'", '').split('|')
    // );

    // render chosen Game page
    res.render('single-game', {
      ...game,
      hasGame,
      user,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get Game by Genre
router.get('/genre/:genre', async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
    });
    const user = userData.get({ plain: true });

    const genreTitle = req.params.genre.toUpperCase().replace('_', ' ');

    const genreData = await Game.findAll({
      where: {
        genre: {
          [Op.like]: `%${req.params.genre}%`,
        },
      },
      order: [['game', 'ASC']]
    });

    const genres = genreData.map((game) => game.get({ plain: true }));

    res.render('genre', {
      user,
      genres,
      genreTitle,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// render user by id
router.get('/user/:id', async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const user = userData.get({ plain: true });

    res.render('user', {
      ...user,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
