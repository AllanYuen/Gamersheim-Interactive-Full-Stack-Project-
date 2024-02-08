const Games = require('./games');
const Genres = require('./genres');
const Platforms = require('./platforms');
const Users = require('./users');
const Comments = require('./comments');
const Titles = require('./titles');


  Genres.hasMany(Games, {foreignKey: 'genre_id',onDelete: 'CASCADE',});
  Games.belongsTo(Genres, {foreignKey: 'genre_id',});

  Platforms.hasMany(Games, {foreignKey: 'platform_id',onDelete: 'CASCADE',});
  Games.belongsTo(Platforms, {foreignKey: 'platform_id',}); 

  Users.hasMany(Comments, {foreignKey: 'user_id',onDelete: 'CASCADE',});
  Comments.belongsTo(Users, {foreignKey: 'user_id',onDelete: 'CASCADE',});

  Games.hasMany(Comments, {foreignKey: 'game_id',onDelete: 'CASCADE',});
  Comments.belongsTo(Games, {foreignKey: 'game_id',});  



module.exports = { Games,Genres,Platforms,Users,Comments,Titles }; 


