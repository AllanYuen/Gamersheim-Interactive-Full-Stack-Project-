const router = require('express').Router();
const path = require('path');
const Comments = require('../../models/comments');
const withAuth = require('../../utils/auth');

router.get('/', (req,res) => {
    Comments.findAll({})
    .then(comments => res.json(comments))
    .catch(err => {
        console.log(err);
        res.status(500).json(err)
    });
});

router.get('/:id', (req, res) => {
    Comments.findByPk({where: {id: req.params.comments_id}})
        .then(comments => res.json(comments))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

router.post('/', async (req, res) => {
  try {
    const newComment = await Comments.create({
      ...req.body,
      user_id: req.session.user_id,
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
        game_id: req.session.game_id,
      },
    });
    if (!commentData) {
      res.status(404).json({ message: '404 Blog ID not found' });
      return;
    }
    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;