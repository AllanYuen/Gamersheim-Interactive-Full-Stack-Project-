const router = require('express').Router();
const path = require('path');
const Game = require('../../models/genres');

// This is the route to get all genres
router.get('/', async (req, res) => {
    const genreData = await Genre.findAll().catch((err) => {
        res.json(err);
    });
        const genres = genresData.map((genres) => genres.get({ plain: true }));
        res.render('all', { genres });
   });

// This is the route to get a single genre
router.get('/Genres/:GenreID', async (req, res) => {
    try{
        const genreData = await Genre.findByPk(req.params.GenreID);
        if(!genreData){
            res.status(404).json({message: 'No genre found with this ID!'});
            return;
        }
        const genre = genreData.get({ plain: true });
        res.render('genre', genre);
        res.status(200).json(genreData);
    } catch (err) {
        res.status(500).json(err);
    };
});

module.exports = router;