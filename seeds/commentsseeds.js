const { Comments } = require('../models');


const commentsSeedData = [
  {
    user_id: 1 ,
    message: 'This is the best video game ever',
  //comment_date: 1706494242592,
    game_name: 'ELDEN RING',
  },

];


const seedComments = () => Comments.bulkCreate(commentsSeedData);

module.exports = seedComments;

