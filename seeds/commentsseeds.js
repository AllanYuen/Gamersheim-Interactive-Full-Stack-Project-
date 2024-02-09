const { Comments } = require('../models');


const commentsSeedData = [
  {
    user_id: 1 ,
    message: 'This is the best video game. You can have both open world and soulsbourn experience at same time.',
    game_id: 5,
    game_name:'ELDEN RING',
  },
  {
    user_id: 2 ,
    message: 'I would like to have scored this game an 8 or 9 but the single player experience leaves a lot to be desired. However, the multiplayer is absolutely fantastic.',
    game_id: 1,
    game_name:'Age of Empires 4',
  },

  {
    user_id: 3 ,
    message: 'Arkham Asylum was way better game than Arkham Knight. But You can still have some fun.',
    game_id: 2,
    game_name:'Batman: Arkham knight',
  },

  {
    user_id: 4 ,
    message: 'This game is not a game, this is an addiction.',
    game_id: 8,
    game_name:'Minecraft',
  },

  {
    user_id: 3 ,
    message: 'My kids loved this games, now I need to gt them sleep.',
    game_id: 8,
    game_name:'Minecraft',
  },
  {
    user_id: 5 ,
    message: 'I hate this game. I can not tell you how many times I died :(.',
    game_id: 5,
    game_name: 'ELDEN RING',
  },
];


const seedComments = () => Comments.bulkCreate(commentsSeedData);

module.exports = seedComments;

