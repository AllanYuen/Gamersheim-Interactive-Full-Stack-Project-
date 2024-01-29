const Games = require('./games');
const Genres = require('./genres');
const Platforms = require('./platform');
const UserLibrary = require('./userslibrary');
const Users = require('./users');
const Comments = require('./comments');

//Genres.hasMany(Games, {foreignKey: 'genre_id',onDelete: 'CASCADE',});
//Games.belongsTo(Genres, {foreignKey: 'genre_id',});

//Platforms.hasMany(Games, {foreignKey: 'platform_id',onDelete: 'CASCADE',});
//Games.belongsTo(Platforms, {foreignKey: 'platform_id',});

//UserLibrary.hasMany(Users, {foreignKey: 'library_id',onDelete: 'CASCADE',});
//Users.belongsTo(UserLibrary, {foreignKey: 'library_id',});

//Users.hasMany(Comments, {foreignKey: 'user_id',onDelete: 'CASCADE',});
//Comments.belongsTo(Users, {foreignKey: 'user_id',});

//Games.hasMany(Comments, {foreignKey: 'game_id',onDelete: 'CASCADE',});
//Comments.belongsTo(Games, {foreignKey: 'game_id',});

module.exports = { Games,Genres,Platforms,UserLibrary,Users,Comments };