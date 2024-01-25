const router = require('express').Router();
const sequelize = require('../config/connection');
// const { , , } = require('../models'); //use it depends on handlebars situation

//to call handlebars
router.get('/', (req, res) => {res.render('home');});
router.get('/games', (req, res) => {res.render('games');});
router.get('/genres', (req, res) => {res.render('genres');});
router.get('/platforms', (req, res) => {res.render('platforms');});
router.get('/users', (req, res) => {res.render('users');});
router.get('/platforms', (req, res) => {res.render('platforms');});
router.get('/login', (req, res) => {
    if(req.session.loggedIn){
        res.redirect('home');
        return;
    }
    res.render('login');
})


module.exports = router;