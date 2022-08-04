const router = require("express").Router();
const { User, Review, Game, Tag } = require("../models");

// get all posts for homepage
router.get("/home", (req, res) => {
  Game.findAll()
    .then((dbData) => {
      const games = dbData.map((game) => game.get({ plain: true }));

      res.render("all-posts-new", { games });
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

// get single post
router.get("/game/:id", (req, res) => {
  Game.findByPk(req.params.id, {
    include: [
      { model: Review }, { model: User }, { model: Tag }
    ],
  })
    .then((dbData) => {
      if (dbData) {
        const game = dbData.get({ plain: true });

        res.render("single-game", { game });
      } else {
        res.status(404).end();
      }
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

router.get("/signup", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("signup");
});

module.exports = router;