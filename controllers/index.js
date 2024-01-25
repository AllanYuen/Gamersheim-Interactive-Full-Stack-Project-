const router = require('express').Router();
const apiRoutes = require('./api');
const authenticationRoutes = require('./authentication');
const homeRoute = require('./homeroutes.js');


router.use('/homeroute', homeRoute);
router.use('/api', apiRoutes);
router.use('/authentication', authenticationRoutes);

module.exports = router;