const Games = require('./games');
const Genres = require('./genres');
const Platforms = require('./platform');
const UserLibrary = require('./userslibrary');
const Users = require('./users');


//Games.hasMany(Genres, {foreignKey: 'genre_id',onDelete: 'CASCADE',});
//Genres.belongsTo(Games, {foreignKey: 'genre_id',});

//Platforms.hasMany(Games, {foreignKey: 'platform_id',onDelete: 'CASCADE',});
//Games.belongsTo(Platforms, {foreignKey: 'platform_id',});

//UserLibrary.hasMany(Users, {foreignKey: 'library_id',onDelete: 'CASCADE',});
//Users.belongsTo(UserLibrary, {foreignKey: 'library_id',});



module.exports = { Games,Genres,Platforms,UserLibrary,Users };