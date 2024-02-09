const router = require('express').Router();
const { Games, Comments } = require('../models');


router.get('/', async (req, res) => {
    try {
        const comment = await Comments.findAll();

        const allComments = comment.map((comment) => comment.get({ plain: true}));
            res.render('comments', { allComments, logged_in: req.session.logged_in, });
    } 
    catch (err) { console.error(err);res.status(400).json(err);}
});



router.get('/:id', async (req, res) => {
    try {
        const comment = await Comments.findByPk(req.params.id,{include : [{model: Games,},]});

        const singleComment = comment.get({ plain: true });
            res.render('comments', {singleComment,});
    } 
    catch (err) {console.error(err);res.status(400).json(err);}
});

module.exports = router;
