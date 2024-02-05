const router = require('express').Router();
const apiRoutes = require('./api');
const titlesRoutes = require('./titles.js');
const genresRoutes = require('./genres.js');
const gamesRoutes = require('./games.js');
const platformsRoutes = require('./platforms.js');
const commentsRoutes = require('./comments');



router.use('/api', apiRoutes);
router.use('/genres', genresRoutes);
router.use('/games', gamesRoutes);
router.use('/platforms', platformsRoutes);
router.use('/titles', titlesRoutes);
router.use('/comments', commentsRoutes);


router.get('/',(req,res) => {res.render('homepage',)});
router.get('/login', (req,res) => res.render('login'));
router.get('/comments', (req,res) => res.render('comments'));

module.exports = router;

