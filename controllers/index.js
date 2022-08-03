// INSTRUCTOR PROVIDED CODE // 
const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./HomepageRoute');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;
