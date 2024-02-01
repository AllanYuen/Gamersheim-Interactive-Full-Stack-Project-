const router = require('express').Router();
const  {Titles} = require('../models');


// route to get all 
router.get('/', async (req, res) => {
  const titlesData = await Titles.findAll().catch((err) => { 
      res.json(err);
    });
      const titles = titlesData.map((title) => title.get({ plain: true }));
      res.render('titles', { titles });
    });

// route to get one
router.get('/titles/:id', async (req, res) => {
  try{ 
      const titlesData = await Titles.findByPk(req.params.id);
      if(!titlesData) {
          res.status(404).json({message: 'No Title with this id!'});
          return;
      }
      const title = titlesData.get({ id: id });
      res.render('title', title);
    } 
    catch (err) {res.status(500).json(err);};     
});

module.exports = router;