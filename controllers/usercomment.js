const router = require('express').Router();
const  {Users, Comments } = require('../models');



// route to get one

router.get('users/:id',  async (req, res) => {
  try {
    const userData = await Users.findByPk(req.params.id, {
      include: [
        {
          model: Comments,
          attributes: [
            'game_name',
            'message',
            'user_id',
          ],
        },
      ],
    });

    const user = userData.get({ plain: true });
    res.render('comment-details', { user });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/comments/:id',  async (req, res) => {
  try {
    const commentData = await Comments.findByPk(req.params.id);

    const comments = commentData.get({ plain: true });

    res.render('comment', { comments });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


module.exports = router;