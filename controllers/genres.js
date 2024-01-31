const router = require('express').Router();
const  {Genres} = require('../models');


// route to get all 
router.get('/', async (req, res) => {
  const genresData = await Genres.findAll().catch((err) => { 
      res.json(err);
    });
      const genres = genresData.map((genre) => genre.get({ plain: true }));
      res.render('genres', { genres });
    });

// route to get one
router.get('/genres/:id', async (req, res) => {
  try{ 
      const genresData = await Genres.findByPk(req.params.id);
      if(!genresData) {
          res.status(404).json({message: 'No Genre with this id!'});
          return;
      }
      const genre = genresData.get({ plain: true });
      res.render('genres', genre);
    } 
    catch (err) {res.status(500).json(err);};     
});

module.exports = router;
