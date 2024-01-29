const router = require('express').Router();
const commentsRoutes = require('./comments');
const gamesRoutes = require('./games');
const genresRoutes = require('./genres');
const platformsRoutes = require('./platforms');
const userRoutes = require('./userroutes');




router.use('/comments', commentsRoutes);
router.use('/games', gamesRoutes);
router.use('/genres', genresRoutes);
router.use('/platforms', platformsRoutes);
router.use('/userroutes', userRoutes);

module.exports = router;