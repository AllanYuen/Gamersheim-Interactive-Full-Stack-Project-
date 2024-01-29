const router = require('express').Router();
const app = express()
const { Users } = require('../../models');
const bcrypt = require (bcrypt)

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended : false}))

app.get('./views/signup', (req,res)=> {res.render('signup');});


router.post('./views/signup', async (req, res) => {
    const findUser = await Users.findOne({ where: { email: req.body.email } });
    if(findUser) {
        res.status(400).json({ message: 'This email is already registered. Please use login button or use different email to Sign Up!'});
        return res.redirect('./views/signup');
    } 

    const hashedPassword = await bcrypt.hash(password, 12);
    
    try {
        const user = await Users.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: hashedPassword
    });

        req.session.save(() => {
        req.session.id= user.id;
        req.session.logged_in = true;
        res.status(200).json(user);
    });

     await user.save()
     res.redirect('./views/login')
         
    } 
    catch (error) {res.status(500).json(error)}
});

module.exports = router;