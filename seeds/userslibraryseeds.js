// userslibraryseeds.js
const { UsersLibrary } = require('../models');

const usersLibraryData = [
  // Your user library seed data
  // Example: { userId: 1, gameId: 1, progress: 0 }
];

const seed = async () => {
  await UsersLibrary.bulkCreate(usersLibraryData);
};

module.exports = { seed };