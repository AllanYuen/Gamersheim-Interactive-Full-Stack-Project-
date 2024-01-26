// Import necessary modules
const { Platforms } = require('../models');

// Seed data for the Platform table
const platformSeedData = [
  {
    platform_id: 1,
    platform_name: 'Playstation 2',
  },
  {
    platform_id: 2,
    platform_name: 'Playstation 3',
  },
  {
    platform_id: 3,
    platform_name: 'Playstation 4',
  },
  {
    platform_id: 4,
    platform_name: 'Playstation 5',
  },
  {
    platform_id: 5,
    platform_name: 'XBox',
  },
  {
    platform_id: 6,
    platform_name: 'XBox 360',
  },
  {
    platform_id: 7,
    platform_name: 'XBox One',
  },
  {
    platform_id: 8,
    platform_name: 'XBox Series X',
  },
  {
    platform_id: 9,
    platform_name: 'PC',
  },
  {
    platform_id: 10,
    platform_name: 'Nintendo Switch',
  },
  {
    platform_id: 11,
    platform_name: 'Android',
  },
  {
    platform_id: 12,
    platform_name: 'Apple',
  },
  {
    platform_id: 13,
    platform_name: 'Retro Console',
  },
  {
    platform_id: 14,
    platform_name: 'other',
  },
];

const seedPlatform = () => Platforms.bulkCreate(platformSeedData);

module.exports = seedPlatform;