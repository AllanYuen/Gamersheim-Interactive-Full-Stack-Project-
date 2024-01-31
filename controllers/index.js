const router = require('express').Router();
const homeRoutes = require('./homeroutes');
const apiRoutes = require('./api');
const titlesRoutes = require('./titles.js');
const genresRoutes = require('./genres.js');
const gamesRoutes = require('./games.js');
const platformsRoutes = require('./platforms.js');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/genres', genresRoutes);
router.use('/games', gamesRoutes);
router.use('/platforms', platformsRoutes);
router.use('/titles', titlesRoutes);

module.exports = router;