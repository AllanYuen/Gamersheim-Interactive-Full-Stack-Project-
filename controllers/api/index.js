const router = require('express').Router();
const userRoutes = require('./users');


router.use('/user-routes', userRoutes);

module.exports = router;