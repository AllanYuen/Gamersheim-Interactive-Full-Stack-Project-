const router = require('express').Router();
const path = require('path');
const commentsRoutes = require('./comments');
const gamesRoutes = require('./games');
const genresRoutes = require('./genres');
const homeRoutes = require('./home');
const platformsRoutes = require('./platforms');
const userRoutes = require('./userroutes');




router.use('/comments', commentsRoutes);
router.use('/games', gamesRoutes);
router.use('/genres', genresRoutes);
router.use('/home', homeRoutes);
router.use('/platforms', platformsRoutes);
router.use('/userroutes', userRoutes);

module.exports = router;