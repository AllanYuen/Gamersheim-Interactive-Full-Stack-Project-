const router = require('express').Router();
const { Users } = require('../../models');

router.post('/', async (req, res) => {
  try {

    const userCheck = await Users.findOne({ where: {email:  req.body.email}});
  
    if (!userCheck) {
      res.status(400).json({ message: 'Incorrect email, please retry' });
      return;
    }

    const validPassword = await userCheck.checkPw(req.body.password);
        if (!validPassword) {
      res.status(401).json({ message: 'Incorrect password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userCheck.id;
      req.session.logged_in = true;
      
      res.json({ user: userCheck, message: `You're logged in`})
    });
    

  } catch (error) {
    res.status(500).json({error: error, message: `INTERNAL ERROR, PLEASE TRY AGAIN!`});
    console.log(error)
  }
});


router.post('/logout', (req, res) => {
  if (req.session.logged_in) {

    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;