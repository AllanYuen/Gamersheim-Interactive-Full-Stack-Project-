const router = require('express').Router();
const app = express ()
const { Users } = require('../../models');
const bcrypt = require (bcrypt)

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended : false}))

app.get('./views/login', (req,res)=> {res.render('login');});

router.post('./views/signup', async (req, res) => {
  try {
    const userCheck = await Users.findOne({ where: {email:  req.body.email}});
    if (!userCheck) {res.status(400).json({ message: 'Incorrect email, please try again' });return res.redirect('./views/signup');}

    const validPassword = await bcrypt.compare(password, Users.password);

    if (!validPassword) {res.status(400).json({ message: 'Incorrect password, please try again' });return;}

    req.session.save(() => {
    req.session.user_id = userCheck.id;
    req.session.logged_in = true;
      
    res.json({ user: userCheck, message: `You're logged in`})
    req.session.isAuth = true
    return res.redirect ('./views/main.handlebars')
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