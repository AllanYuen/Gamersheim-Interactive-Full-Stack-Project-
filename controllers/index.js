const router = require('express').Router();
const apiRoutes = require('./api');
const titlesRoutes = require('./titles.js');
const genresRoutes = require('./genres.js');
const gamesRoutes = require('./games.js');
const platformsRoutes = require('./platforms.js');
const commentsRoutes = require('./comments');
const loginRoutes = require('./login');
const testRoutes = require('./test');


router.use('/api', apiRoutes);
router.use('/genres', genresRoutes);
router.use('/games', gamesRoutes);
router.use('/platforms', platformsRoutes);
router.use('/titles', titlesRoutes);
router.use('/comments', commentsRoutes);
router.use('/login', loginRoutes);
router.use('/', testRoutes);

module.exports = router;

