const router = require('express').Router();
const { Users } = require('../../models');

router.post('/', async (req, res) => {
  try {
      const userCheck = await Users.findOne({ where: {user_name:  req.body.user_name}});
    if (!userCheck) {res.status(400).json({ message: 'Incorrect user name, please try again' });return;}


const validPassword = await userCheck.checkPw(req.body.password);

    if (!validPassword) {res.status(400).json({ message: 'Incorrect password, please try again' });return;}

    req.session.save(() => {
      req.session.user_id = userCheck.id;
      req.session.logged_in = true;
      
      res.json({ user: userCheck, message: `You're logged in`})
    });
    

  } 
  catch (error) {res.status(500).json(error);console.log(error)}
});


router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(200).end();
    });
  } else {res.status(400).end();}
});

module.exports = router;