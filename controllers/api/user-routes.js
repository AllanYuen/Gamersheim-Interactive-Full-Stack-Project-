const router = require('express').Router();
const { hash } = require('bcrypt');
const { Users } = require('../../models');

// CREATE new user
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



// Login
router.post("/login", async (req, res) => {

  try {
    const userData = await Users.findOne(req.body.id,{
      include: [
        {  
          firstname: req.body.firstname,
          email: req.body.email,
          password: req.body.password
          ,
        },
      ],
    });
    const passCheck = await compare(req.body.password, userData.password);

    if (userData && passCheck) {
      res.render("homepage", {firstname:req.body.firstname});
    }
    else {"Please Check Your Inputs"}
  }
  catch { res.send("Pleas Check Your Inputs")}
});

module.exports = router;

// Logout
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {res.status(404).end();}});

module.exports = router;



