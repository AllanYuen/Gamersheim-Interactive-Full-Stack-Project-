const router = require('express').Router();
const { User } = require('../../models');

router.post('/', (req, res) => {
    if (req.session.logged_in) {
      req.session.destroy(() => {
        res.status(200).end();
      });
    } else {res.status(400).end();}
  });
  
  module.exports = router;