const router = require('express').Router();
const path = require('path');
const Game = require('../../models/games');

// This is the route to get all games
router.get('/', async (req, res) => {
    const gamesData = await Game.findAll().catch((err) => {
        res.json(err);
    });
        const games = gamesData.map((games) => games.get({ plain: true }));
        res.render('all', { games });
   });

// This is the route to get a single game
router.get('/Games/:GameID', async (req, res) => {
    try{
        const gamesData = await Game.findByPk(req.params.GameID);
        if(!gamesData){
            res.status(404).json({message: 'No game found with this ID!'});
            return;
        }
        const game = gamesData.get({ plain: true });
        res.render('game', game);
        res.status(200).json(gamesData);
    } catch (err) {
        res.status(500).json(err);
    };
});

module.exports = router;