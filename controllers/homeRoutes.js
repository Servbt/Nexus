const router = require('express').Router();
const axios = require('axios').default;
require('dotenv').config();
const myKey = process.env.O_AUTH_KEY;
const myClient = process.env.CLIENT_ID;



const axiosOptions = {

  headers: {
    myKey,
    myClient
  }

}


const { Game, User, Review, Tag } = require('../models');

const withAuth = require('../utils/auth');
const { randomNumber } = require('../utils/helpers');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

router.get('/', async (req, res) => {
  res.render('landingpage', { layout: 'landing.handlebars' });
});

// render login page
router.get('/login', async (req, res) => {
  // redirect to home if user is logged in
  if (req.session.logged_in) {
    res.redirect('https://still-sea-39292.herokuapp.com/home');
    return;
  }
  res.render('login', { layout: 'signin.handlebars' });
});

// render signup page
router.get('/signup', async (req, res) => {
  res.render('signup', { layout: 'signin.handlebars' });
});

//render homepage
router.get('/home', async (req, res) => {
  try {
    if (!req.session.logged_in) {
      res.redirect('https://still-sea-39292.herokuapp.com/login');
      return;
    }
    // USER INFO
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
    });
    const user = userData.get({ plain: true });


    Game.findAll({ offset: 121, limit: 19, })

      .then((dbData) => {

        const games = dbData.map((game) => game.get({ plain: true }));

        res.render('homepage', {
          user,
          games,
          logged_in: req.session.logged_in,
        })
      })

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

    const searchedTerm = req.params.term

    axios.get(`https://api.twitch.tv/helix/search/categories?query=${searchedTerm}`, axiosOptions)
      .then(response => {
        const gameArr = response.data.data;
        console.log(gameArr);
        please(gameArr)
      })
      .catch(err => console.log(err))

    function please(gameArr) {
      res.render('search', {
        user,
        // games,
        searchedTerm,
        gameArr,
        logged_in: req.session.logged_in,
      })
    }

  } catch (err) {
    res.status(500).json(err);
  }
});


// render Game by id
router.get('/game/:id', async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Game }, { model: Review }],
    });
    const user = userData.get({ plain: true });

    const gameData = await Game.findByPk(req.params.id
      , {
        include: [{ model: User },
        { model: Review, include: [User] }
        ]
      }
    );
    const game = gameData.get({ plain: true });

    const reviewData = await Review.findByPk(req.params.review_id, {
      include: [{ model: User }, { model: Game }]
    });

    // const review = reviewData.get({ plain: true });
    // compare 'Game' to 'user.Games'\
    const userGameIds = user.games.map((game) => game.id);
    const hasGame = userGameIds.includes(game.id);

    // const gameReviewIds = game.reviews.map((review) => review.id);
    // const hasReview = gameReviewIds.includes(review.id);

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

// render search by name
router.get('/result/:name', async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Game }, { model: Review }],
    });
    const user = userData.get({ plain: true });

    const searchedName = req.params.name.replace('%20', '_');
    const gameData = await Game.findAll({
      where: {
        game: { [Op.like]: `%${req.params.name}%` }
      },
      limit: 1
    });

    const games = gameData.map((game) => game.get({ plain: true }));

    // render chosen Game page
    console.log(games[0].id);

    res.redirect(
      `https://still-sea-39292.herokuapp.com/game/${games[0].id}`
    )

  } catch (err) {
    res.status(500).send("Sorry, there was an issue retrieving your game!");
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
      order: [['score', 'DESC']],
      distinct: true,
      limit: 500
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
