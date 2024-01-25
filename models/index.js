const Games = require('./games');
const Genres = require('./genres');
const Platforms = require('./platform');
const UserLibrary = require('./users_library');
const Users = require('./users');




Games.hasMany(Genres, {foreignKey: 'GenreID',onDelete: 'CASCADE',});
Genres.belongsTo(Games, {foreignKey: 'GenreID',});




module.exports = { Games,Genres,Platforms,UserLibrary,Users };