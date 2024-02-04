const router = require('express').Router();
const  {Platforms , Games} = require('../models');


// route to get all 
router.get('/', async (req, res) => {
  const platformsData = await Platforms.findAll().catch((err) => { 
      res.json(err);
    });
      const platforms = platformsData.map((platform) => platform.get({ plain: true }));
      res.render('platforms', { platforms });
    });

// route to get one

router.get('/platform/:id',  async (req, res) => {
  try {
    const platformData = await Platforms.findByPk(req.params.id, {
      include: [
        {
          model: Platforms,
          attributes: [
            'id',
            'name',
            'image',
          ],
        },
      ],
    });

    const platform = platformData.get({ plain: true });
    res.render('platform', { platform });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


module.exports = router;