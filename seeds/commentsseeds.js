const { Comments } = require('../models');


const commentsSeedData = [
  {
    comment_id: 1 ,
    user_name: 'OzdalDogru',
    user_id: 1 ,
    message: 'This is the best video game ever',
  //comment_date: 1706494242592,
    game_id: 1,
  },

];


const seedComments = () => Comments.bulkCreate(commentsSeedData);

module.exports = seedComments;
