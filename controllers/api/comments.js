const router = require('express').Router();
const { Games,Genres,Platforms,Users,Comments,Titles }= require('../../models');
const withAuth = require('../../utils/auth');


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