const router = require('express').Router();
const  {Games} = require('../models');


// route to get all 
router.get('/', async (req, res) => {
  const gamesData = await Games.findAll().catch((err) => { 
      res.json(err);
    });
      const games = gamesData.map((game) => game.get({ plain: true }));
      res.render('games', { games });
    });

// route to get one

router.get('/games/:id', async (req, res) => {
  try {
    const gamesData = await Games.findByPk(req.params.id);
    const game = gamesData.get({ plain: true });
    res.render('game', { game });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


module.exports = router;
