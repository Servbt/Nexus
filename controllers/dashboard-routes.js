const router = require("express").Router();
const { Game } = require("../models");
const withAuth = require("../utils/auth");


router.get('/game/:id', async (req, res) => {
  try {
    const gameData = await Game.findByPk(req.params.id);

    const game = gameData.get({ plain: true });
    
    res.status(200).json(game);
    // for rendering on handlebar
    // res.render('game', { game });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/game/:game', async (req, res) => {
  try {
    let gameTitle = req.params.game;
    const gameData = await Game.findOne({
      where: {
        game: gameTitle,
      }
    });

router.get("/", withAuth, (req, res) => {
    Post.findAll({
      where: {
        userId: req.session.userId
      }
    })
      .then(dbPostData => {
        const posts = dbPostData.map((post) => post.get({ plain: true }));
        
        res.render("all-posts-admin", {
          layout: "dashboard",
          posts
        });
      })
      .catch(err => {
        console.log(err);
        res.redirect("login");
      });
  });

  router.get("/new", withAuth, (req, res) => {
    res.render("new-post", {
      layout: "dashboard"
    });
  });
  
  router.get("/edit/:id", withAuth, (req, res) => {
    Post.findByPk(req.params.id)
      .then(dbPostData => {
        if (dbPostData) {
          const post = dbPostData.get({ plain: true });
          
          res.render("edit-post", {
            layout: "dashboard",
            post
          });
        } else {
          res.status(404).end();
        }
      })
      .catch(err => {
        res.status(500).json(err);
      });
  });
  
module.exports = router;