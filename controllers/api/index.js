const router = require('express').Router();
const commentsRoutes = require('./comments');
const userRoutes = require('./user-routes');


router.use('/comments', commentsRoutes);
router.use('/user-routes', userRoutes);

module.exports = router;