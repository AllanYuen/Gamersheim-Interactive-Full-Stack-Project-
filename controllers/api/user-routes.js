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


router.post('/login', async (req, res) => {
  try {
      const dbUserData = await User.findOne({
          where: {id: req.body.id}
      });
      if (!dbUserData) {
          res.status(400).json({ message: `User id is not valid.` });
          return;
      }
      // check pw
      const pwValidated = await dbUserData.checkPassword(req.body.password)
      if (!pwValidated) {
          res.status(400).json({ message: "Incorrect password!" });
          return;
      }
      // create session and send response back
      req.session.save(() => {
          req.session.id = dbUserData.id;
          req.session.email = dbUserData.email;
          req.session.loggedIn = true;        
      //send response to client
      res.status(200).json({ message: "You are logged in!" });
      });
  } catch (err) {
      res.status(400).json(err);
  }
});

/*
// Login //
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (![email, password].every((item) => item.trim() !== "")) {
      res.status(404).send({ message: "Invalid parameters" });
      return;
    }

    const user = await Users.findOne({where: { email },});

    if (!user) {res.status(404).json({ message: "Invalid email" });
      return;
    }

    if (!(await user.checkPassword(password))) {res.status(404).json({ message: "Invalid password" });
      return;
    }

    const {email: userEmail,} = user.get({plain: true,});


    res.status(200).json({
      status: "success",
      user: { email: userEmail },
    });
  } catch (e) {
    res.status(500).json({ message: "NOOOOOOOOOO" });
  }
});
*/


// Logout
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {res.status(404).end();}});

module.exports = router;



