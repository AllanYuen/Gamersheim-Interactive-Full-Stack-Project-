const router = require('express').Router();
const  {Games, Comments } = require('../models');


// route to get all 
router.get('/', async (req, res) => {
  const gamesData = await Games.findAll().catch((err) => { 
      res.json(err);
    });
      const games = gamesData.map((game) => game.get({ plain: true }));
      res.render('games', { games });
    });

// route to get one

router.get('/', async (req, res) => {
  try {
      const user = await Games.findAll({
          where : {
              user_id : req.session.user_id
          }, include : [{
              model: Comments
          }]
      });


      const game = user.map((post) => post.get({ plain: true}));
          res.render('games', {
              game 
          });
      } catch (err) {
          console.error(err);
          res.status(400).json(err);
  }
});

module.exports = router;
