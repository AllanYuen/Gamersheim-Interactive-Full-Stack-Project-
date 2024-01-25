const router = require('express').Router();
const loginRoute = require('./login');
const logoutRoute = require('./logout');
const signupRoute = require('./signup');


router.use('/login', loginRoute);
router.use('/logout', logoutRoute);
router.use('/signup', signupRoute);


module.exports = router;