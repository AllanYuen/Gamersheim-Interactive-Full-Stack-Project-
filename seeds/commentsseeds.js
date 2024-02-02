const { Comments } = require('../models');


const commentsSeedData = [
  {
    user_id: 1 ,
    message: 'This is the best video game. You can have both open world and soulsbourn experience at same time.',
  //comment_date: 1706494242592,
    game_name: 'ELDEN RING',
  },
  {
    user_id: 1 ,
    message: 'I would like to have scored this game an 8 or 9 but the single player experience leaves a lot to be desired. However, the multiplayer is absolutely fantastic.',
  //comment_date: 1706494242592,
    game_name: 'Age of Empires 4',
  },

  {
    user_id: 1 ,
    message: 'Arkham Asylum was way better game than Arkham Knight. But You can still have some fun.',
  //comment_date: 1706494242592,
    game_name: 'Batman: Arkham knight',
  },


];


const seedComments = () => Comments.bulkCreate(commentsSeedData);

module.exports = seedComments;

