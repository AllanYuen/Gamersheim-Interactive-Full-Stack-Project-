const router = require('express').Router();
const  {Platforms} = require('../models');


// route to get all 
router.get('/', async (req, res) => {
  const platformsData = await Platforms.findAll().catch((err) => { 
      res.json(err);
    });
      const platforms = platformsData.map((platform) => platform.get({ plain: true }));
      res.render('platforms', { platforms });
    });

// route to get one
router.get('/platforms/:id', async (req, res) => {
  try{ 
      const platformsData = await Platforms.findByPk(req.params.id);
      if(!platformsData) {
          res.status(404).json({message: 'No Platform with this id!'});
          return;
      }
      const platform = platformsData.get({ plain: true });
      res.render('platform', platform);
    } 
    catch (err) {res.status(500).json(err);};     
});

module.exports = router;