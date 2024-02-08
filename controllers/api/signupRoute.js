const router = require('express').Router();
const { Users } = require('../../models');


// Create new user
router.post('/', async (req, res) => {
  try {
    const dbUserData = await Users.create({
      firstname: req.body.firstname,     
      lastname: req.body.lastname,
      email: req.body.email,
      password: req.body.password,
    });

    req.session.save(() => {
    req.session.loggedIn = true;

      res.status(200).json(dbUserData);
      
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});



module.exports = router;
