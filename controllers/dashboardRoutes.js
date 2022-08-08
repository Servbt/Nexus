const router = require('express').Router();
const { Game, User, Review, Tag } = require('../models');
const withAuth = require('../utils/auth');

// render dashboard page
router.get('/', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID + include their associated games
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Game }, { model: Review }],
    });

    const user = userData.get({ plain: true });
    console.log(user);
    // const reviewData = await Review.findAll({
    //   include: [
    //     {
    //       model: User,
    //       attributes: ['name'],
    //     },
    //   ],
    // });

    // // Serialize data so the template can read it
    // const reviews = reviewData.map((review) => review.get({ plain: true }));

    res.render('dashboard', {
      ...user,
      // reviews,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
