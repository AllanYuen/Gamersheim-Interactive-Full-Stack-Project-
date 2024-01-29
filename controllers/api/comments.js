const router = require('express').Router();
const Comments = require('../../models/comments');
const withAuth = require('../../utils/auth');



const isAuth = (req, res, next) => {
  if(req.session.isAuth) {
    next()
  }
  else {res.redirect('./views/login')}
}

// This is the route to get all comments
router.get('/', isAuth, async (req, res) => {
  const commentsData = await Comments.findAll({model:Games ,include:[game_name] }).catch((err) => {
      res.json(err);
  });
      const comments = commentsData.map((comments) => comments.get({ plain: true }));
      res.render('all', { comments });
 });

router.get('/Comments/:id', (req, res) => {
    Comments.findByPk({where: {id: req.params.comments_id}})
        .then(comments => res.json(comments))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

// This is the route to get a single comment
router.get('/Comments/:id', async (req, res) => {
  try{
      const commentsData = await Comments.findByPk(req.params.comment_id);
      if(!commentsData){
          res.status(404).json({message: 'No comment found with this ID!'});
          return;
      }
      const comments = commentsData.get({ plain: true });
      res.render('game', comments);
      res.status(200).json(commentsData);
  } catch (err) {
      res.status(500).json(err);
  };
});

// This is the route to delete a single comment
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const commentData = await Comments.destroy({
      where: {comment_id: req.params.id,game_id: req.session.game_id,},
    });
    if (!commentData) {
      res.status(404).json({ message: '!!! Comment not found !!!' });
      return;
    }
    res.status(200).json(commentData);
  } 
  catch (err) {res.status(500).json(err);}});


module.exports = router;