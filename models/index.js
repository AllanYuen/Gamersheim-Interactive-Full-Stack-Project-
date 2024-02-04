const Games = require('./games');
const Genres = require('./genres');
const Platforms = require('./platforms');
const Users = require('./users');
const Comments = require('./comments');
const Titles = require('./titles');


  Users.hasMany(Comments, {foreignKey: 'user_id',onDelete: 'CASCADE',});
  Comments.belongsTo(Users, {foreignKey: 'user_id',onDelete: 'CASCADE',});



module.exports = { Games,Genres,Platforms,Users,Comments,Titles }; 


