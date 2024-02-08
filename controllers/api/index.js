const router = require('express').Router();
const logoutRoute = require('./logoutRoute');
const signupRoute = require('./signupRoute');
const loginRoute = require('./loginRoute');



router.use('/logout', logoutRoute);
router.use('/signup', signupRoute);
router.use('/login', loginRoute);



module.exports = router;
