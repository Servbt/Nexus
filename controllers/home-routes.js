const router = require('express').Router();
const {Game, User} = require('../models');
const withAuth = require('../utils/auth');
// const {randomNumber} = require('../utils/helpers');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

router.get('/', async (req, res) => {
  res.render('landingpage', {layout: 'landing.handlebars'});
});

// render login page
router.get('/login', async (req, res) => {
  // redirect to home if user is logged in
  if (req.session.logged_in) {
    res.redirect('/home');
    return;
  }
  res.render('login', {layout: 'signin.handlebars'});
});

// render signup page
router.get('/signup', async (req, res) => {
  res.render('signup', {layout: 'signin.handlebars'});
});

// render home page
router.get('/home', async (req, res) => {
  try {
    if (!req.session.logged_in) {
      res.redirect('/login');
      return;
    }
    // USER INFO
    const userData = await User.findByPk(req.session.user_id, {
      attributes: {exclude: ['password']},
    });
    const user = userData.get({plain: true});

    // RECOMMENDED
    const recommendedIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const recommendedGames = [];

    recommendedIds.forEach(async (id) => {
      const GameData = await Game.findByPk(id);
      recommendedGames.push(GameData.dataValues);
    });

    // TOP CAROUSEL
    // get number of Games in database
    const GameNum = await Game.findAndCountAll();
    const randomGames = [];

    for (let i = 0; i < 6; i++) {
      // get Game of random ids based on db length
      const GameData = await Game.findByPk(randomNumber(GameNum.count));

      // if Game doesn't have image_url, try again
      if (GameData.dataValues.image_url === null) i--;
      randomGames.push(GameData.dataValues);
    }

    res.render('homepage', {
      user,
      randomGames,
      recommendedGames,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Render search results
router.get('/search/:term', async (req, res) => {
  try {
    // get user info
    const userData = await User.findByPk(req.session.user_id, {
      attributes: {exclude: ['password']},
    });
    const user = userData.get({plain: true});

    const searchedTerm = req.params.term.replace('%20', '_');
    const GameData = await Game.findAll({
      where: {
        [Op.or]: [
          {title: {[Op.like]: `%${req.params.term}%`}},
          {author: {[Op.like]: `%${req.params.term}%`}},
          {genre: {[Op.like]: `%${req.params.term}%`}},
        ],
      },
    });

    const Games = GameData.map((Game) => Game.get({plain: true}));

    res.render('search', {
      user,
      searchedTerm,
      Games,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// render Game by id
router.get('/Game/:id', async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: {exclude: ['password']},
      include: [{model: Game}],
    });
    const user = userData.get({plain: true});

    const GameData = await Game.findByPk(req.params.id);
    const Game = GameData.get({plain: true});

    // compare 'Game' to 'user.Games'\
    const userGameIds = user.Games.map((Game) => Game.id);
    const hasGame = userGameIds.includes(Game.id);

    const recommendedData = Game.recommended.slice(1, -1).split("', '");
    const recommendedGames = recommendedData.map((element) =>
      element.replace('"', '').replace("'", '').split('|')
    );

    // render chosen Game page
    res.render('chosenGame', {
      ...Game,
      hasGame,
      recommendedGames,
      user,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get Game by Genre
router.get('/category/:genre', async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: {exclude: ['password']},
    });
    const user = userData.get({plain: true});

    const categoryTitle = req.params.genre.toUpperCase().replace('_', ' ');

    const categoryData = await Game.findAll({
      where: {
        genre: {
          [Op.like]: `%${req.params.genre}%`,
        },
      },
    });

    const categories = categoryData.map((Game) => Game.get({plain: true}));

    res.render('category', {
      user,
      categories,
      categoryTitle,
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

    const user = userData.get({plain: true});

    res.render('user', {
      ...user,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
