const router = require('express').Router();
const apiRoutes = require('./api');
const authenticationRoutes = require('../utils/auth');
const homeRoute = require('./homeroutes.js');


router.use('/homeroutes', homeRoute);
router.use('/api', apiRoutes);
router.use('/auth', authenticationRoutes);

module.exports = router;