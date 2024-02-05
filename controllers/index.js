const router = require('express').Router();
const apiRoutes = require('./api');
const titlesRoutes = require('./titles.js');
const genresRoutes = require('./genres.js');
const gamesRoutes = require('./games.js');
const platformsRoutes = require('./platforms.js');
const commentsRoutes = require('./comments');
const usercommentRoutes = require('./usercomment');


router.use('/api', apiRoutes);
router.use('/genres', genresRoutes);
router.use('/games', gamesRoutes);
router.use('/platforms', platformsRoutes);
router.use('/titles', titlesRoutes);
router.use('/comments', commentsRoutes);
router.use('/', usercommentRoutes);

module.exports = router;

