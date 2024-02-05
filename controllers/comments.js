const router = require('express').Router();
const { Comments }= require('../models');
const withAuth = require('../utils/auth');


// route to get all 
router.get('/',  async (req, res) => {
  const commentsData = await Comments.findAll().catch((err) => { 
      res.json(err);
    });
      const comments = commentsData.map((comment) => comment.get({ plain: true }));
      res.render('comments', { comments });
    });



//route to post one
router.post('/', withAuth, async (req, res) => {
  try {
    const newComment = await Comments.create({
      ...req.body,
      user_id: req.session.id,
    });
    res.json(newComment);
  } catch (err) {
    res.status(500).json(err);
  }
});


//route to delete one
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const commentData = await Comments.destroy({
      where: {
        comment_id: req.params.id,
        game_id: req.session.id,
      },
    });
    if (!commentData) {
      res.status(404).json({ message: '404 Comment not found' });
      return;
    }
    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;


