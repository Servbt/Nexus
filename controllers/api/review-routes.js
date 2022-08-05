
const router = require("express").Router();
const { Review } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, (req, res) => {
  Review.create({ ...req.body, user_id: req.session.user_id })
    .then(newReview => {
      res.json(newReview);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;