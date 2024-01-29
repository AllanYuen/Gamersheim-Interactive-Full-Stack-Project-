const router = require('express').Router();
const path = require('path');
const Platforms = require('../../models/platform');

// This is the route to get all platforms
router.get('/', async (req, res) => {
    const platformData = await Platforms.findAll().catch((err) => {
        res.json(err);
    });
        const platforms = platformData.map((platform) => platforms.get({ plain: true }));
        res.render('all', { platforms });
   });

// This is the route to get a single platform
router.get('/Platform/:id', async (req, res) => {
    try{
        const platformData = await Platforms.findByPk(req.params.platform_id);
        if(!platformData){
            res.status(404).json({message: 'No platform found with this ID!'});
            return;
        }
        const genre = platformData.get({ plain: true });
        res.render('platforms', Platforms);
        res.status(200).json(platformData);
    } catch (err) {
        res.status(500).json(err);
    };
});

module.exports = router;