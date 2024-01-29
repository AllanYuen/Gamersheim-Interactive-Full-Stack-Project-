const router = require('express').Router();
const { Users } = require('../../models');
const withAuth = require('../../utils/authorization');

router.post('/logout', withAuth, async (req, res) => {
  try {
      if (req.session.loggedIn) {
          const dbUserData = await req.session.destroy(() => {
              res.status(204).end();
          });
      } 
      else {res.status(404).end();}
  } 
  catch {res.status(400).end();}
});
  
  module.exports = router;

 //router.post('/logout', (req, res) => {
 //   if (req.session.loggedIn) {
 //     req.session.destroy(() => {res.status(204).end();});
//    } 
 //   else {res.status(404).end();}});
  
 // module.exports = router;