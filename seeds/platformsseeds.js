// Import necessary modules
const { Platforms } = require('../models');

// Seed data for the Platform table
const platformSeedData = [
  {
    name: 'Playstation 2',
    image: 'ps2.jpeg',
    link:'https://en.wikipedia.org/wiki/PlayStation_2',
  },
  {
   name: 'Playstation 3',
   image: 'ps3.png',
   link:'https://en.wikipedia.org/wiki/PlayStation_3',
  },
  {
   name: 'Playstation 4',
   image: 'ps4.jpeg',
   link:'https://en.wikipedia.org/wiki/PlayStation_4',
  },
  {
   name: 'Playstation 5',
   image: 'ps5.jpeg',
   link:'https://en.wikipedia.org/wiki/PlayStation_5',
  },
  {
   name: 'XBox',
   image: 'xbox.jpeg',
   link: 'https://en.wikipedia.org/wiki/Xbox_(console)',
  },
  {
   name: 'XBox 360',
   image: 'xbox360.jpeg',
   link:'https://en.wikipedia.org/wiki/Xbox_360 ',
  },
  {
   name: 'XBox One',
   image: 'xboxone.jpeg',
   link: 'https://en.wikipedia.org/wiki/Xbox_One',
  },
  {   
   name: 'XBox Series X',
   image: 'xboxsx.jpeg',
   link:'https://en.wikipedia.org/wiki/Xbox_Series_X_and_Series_S',
  },
  {
    name: 'PC',
    image: 'pc.jpeg',
    link:'https://en.wikipedia.org/wiki/PC_game#Types_of_gaming',
  },
  {
    name: 'Nintendo Switch',
    image: 'nswitch.jpeg',
    link:'https://en.wikipedia.org/wiki/Nintendo_Switch',
  },
  {
    name: 'Android',
    image: 'android.jpeg',
    link:'https://en.wikipedia.org/wiki/List_of_Android_games',
  },
  {
    name: 'Apple',
    image: 'apple.jpeg',
    link:'https://en.wikipedia.org/wiki/List_of_iOS_games',
  },
  {
    name: 'Retro Console',
    image: 'retro.jpeg',
    link:'https://en.wikipedia.org/wiki/Home_video_game_console',
  },

];

const seedPlatform = () => Platforms.bulkCreate(platformSeedData);

module.exports = seedPlatform;