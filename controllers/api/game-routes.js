const router = require("express").Router();
const { User, Game, Review, Tag } = require("../../models");
const withAuth = require("../../utils/auth");
const { randomNumber } = require('../../utils/helper');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

// Get game by searching for title or genre
router.get('/search/:term', async (req, res) => {
  try {
    const gameData = await Game.findAll({
      where: {
        [Op.or]: [
          { game: { [Op.like]: `%${req.params.term}%` } },
          { genre: { [Op.like]: `%${req.params.term}%` } },
        ],
      },
    });

    if (!gameData) {
      res.status(404).json({ message: 'No results found for that game!' });
      return;
    }

    res.status(200).json(gameData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get game by title
router.get('/:title', async (req, res) => {
  // Expects title to be split with underscores: To_Kill_a_Mockingbird
  try {
    let spacedTitle = req.params.title.split('_').join(' ');
    const gameData = await Game.findOne({
      where: {
        game: spacedTitle,
      },
    });

    if (!gameData) {
      res.status(404).json({
        message: 'No game found with that title!',
        item: spacedTitle,
      });
      return;
    }

    res.status(200).json(gameData);
  } catch (err) {
    res.status(500).json(err);
  }
});


// Get random game
router.get('/random', async (req, res) => {
  try {
    let randomId = randomNumber(15000);

    const gameData = await Game.findByPk(randomId);

    if (!gameData) {
      res.status(404).json({
        message: 'No game found with this random id!',
        id: randomId,
      });
      return;
    }

    res.status(200).json(gameData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get game by Genre
router.get('/genre/:genre', async (req, res) => {
  // Expects genre to be Young_Adult
  try {
    const genreData = await Game.findAll({
      where: {
        genre: {
          [Op.like]: `%${req.params.genre}%`,
        },
      },
    });

    if (!genreData) {
      res.status(404).json({ message: 'No genre found by that name!' });
      return;
    }

    res.status(200).json(genreData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get game by id
router.get('/:id', async (req, res) => {
  try {
    const gameData = await Game.findByPk(req.params.id);

    if (!gameData) {
      res.status(404).json({ message: 'No game found with this id!' });
      return;
    }

    res.status(200).json(gameData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;