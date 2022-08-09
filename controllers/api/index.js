const router = require('express').Router();

const userRoutes = require('./user-routes');
// const gameRoutes = require('./game-routes');
const reviewRoutes = require('./review-routes');

router.use('/user', userRoutes);
// router.use('/game', gameRoutes);
router.use('/review', reviewRoutes);

module.exports = router;