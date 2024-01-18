// platformsseeds.js
const { Platform } = require('../models');

const platformsData = [
  // Your platform seed data
  // Example: { name: 'PlayStation' }
];

const seed = async () => {
  await Platform.bulkCreate(platformsData);
};

module.exports = { seed };