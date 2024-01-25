// Import necessary modules
const { Games } = require('../models');

// Seed data for the Games table
const gameSeedData = [
  {
    game_id: '1',
    title: 'Age of Empires 4',
    genre_id: 8, //'strategy',
    publisher: 'Microsoft',
    platform_id: 9, //'PC', 
    release_year: new Date('2005'),
    game_description: 'Age of Empires IV is a real-time strategy game developed by Relic Entertainment and published by Xbox Game Studios. It is the fourth installment in the critically acclaimed Age of Empires series. The game is known for its historical settings, engaging gameplay, and strategic depth.',
    features: 'Age of Empires IV features a return to historical settings, with civilizations spanning different time periods. It introduces new mechanics, improved graphics, and a compelling single-player campaign. The game also focuses on enhancing the multiplayer experience, offering a mix of classic RTS gameplay and innovative features.',
    cover_image: '/assets/images/Age_of_Empires_IV_Cover_Art.png',
    trailer: 'https://www.youtube.com/watch?v=5TnynE3PuDE',
  },
  {
    game_id: '2',
    title: 'Batman: arkham knight',
    genre_id: 1, //'action',
    publisher: 'Warner Bros',
    platform_id: 2, //'Playstation 3', 
    release_year: new Date('2015'),
    game_description: 'Batman: Arkham Knight is the fourth and final installment in the Arkham series. Developed by Rocksteady Studios and published by Warner Bros. Interactive Entertainment, the game features an open-world Gotham City and concludes the story of the Arkham trilogy. Players control Batman as he faces the ultimate threat to the city he is sworn to protect.',
    features: 'Batman: Arkham Knight introduces the Batmobile as a playable vehicle and features a vast open-world Gotham City. The game includes a gripping narrative, enhanced combat mechanics, and the iconic rogues gallery of Batman villains',
    cover_image: '/assets/images/Batman_Arkham_Knight_Cover_Art.jpg',
    trailer: 'https://www.youtube.com/watch?v=dxa34RatmSc',
  },
  {
    game_id: '3',
    title: 'Bayonetta',
    genre_id: 13, //'Hack and Slash',
    publisher: 'Nintendo',
    platform_id: 10, //'Nintendo Switch', 
    release_year: new Date('2009'),
    game_description: 'Bayonetta is an action-adventure hack-and-slash game developed by PlatinumGames and published by Sega. The game follows the titular character, Bayonetta, an Umbra Witch who possesses magical powers and engages in fast-paced combat against celestial enemies. The storyline is rich in lore and combines elements of witchcraft, angels, and demons.',
    features: 'Bayonetta features dynamic combat with a focus on combo-driven gameplay. The protagonist can transform into various forms and summon powerful demons to aid in battles. The game also has a stylish rating system that rewards players for executing stylish and varied attacks.',
    cover_image: '/assets/images/Bayonetta_box_artwork.png',
    trailer: 'https://www.youtube.com/watch?v=h7PZ1i992kc',
  },
  {
    game_id: '4',
    title: 'Cyberpunk 2077',
    genre_id: 5, //'RPG',
    publisher: 'CD Projekt',
    platform_id: 3, //'Playstation 4', 
    release_year: new Date('2020'),
    game_description: 'Cyberpunk 2077 is an action role-playing game developed and published by CD Projekt. Set in the dystopian open-world Night City, the game follows the story of V, a mercenary in pursuit of immortality. The game is known for its deep narrative, player choices, and the futuristic cyberpunk setting.',
    features: 'Cyberpunk 2077 features a vast open-world city, a branching narrative with multiple endings, and a highly customizable protagonist. The game incorporates elements of first-person shooting, role-playing, and hacking, allowing players to shape their character and the world around them.',
    cover_image: '/assets/images/Cyberpunk_2077_box_art.jpg',
    trailer: 'https://www.youtube.com/watch?v=BO8lX3hDU30',
  },
  {
    game_id: '5',
    title: 'Dark Souls 3',
    genre_id: 5, //'RPG',
    publisher: 'Bandai Namco',
    platform_id: 7, //'Xbox one', 
    release_year: new Date('2016'),
    game_description: 'Dark Souls III is an action role-playing game developed by FromSoftware and published by Bandai Namco Entertainment. It is the third installment in the Dark Souls series. The game is known for its challenging gameplay, intricate level design, and deep lore. Players navigate a dark and interconnected world, battling powerful enemies and uncovering the mysteries of the land.',
    features: 'Dark Souls III features punishing difficulty, methodical combat, and a vast interconnected world. Players can customize their characters, choose from a variety of weapons and magic, and engage in intense battles against formidable enemies and bosses. The game also introduces new gameplay mechanics and enhances the multiplayer experience.',
    cover_image: '/assets/images/Dark_souls_3_cover_art.jpg',
    trailer: 'https://www.youtube.com/watch?v=jDMj2m50QrM',
  },
  {
    game_id: '6',
    title: 'ELDEN RING',
    genre_id: 5, //'RPG',
    publisher: 'Bandai Namco',
    platform_id: 4, //'Playstation 5', 
    release_year: new Date('2022'),
    game_description: 'Elden Ring is an action role-playing game developed by FromSoftware and published by Bandai Namco Entertainment. The game is a collaboration between Hidetaka Miyazaki, the creator of the Dark Souls series, and George R. R. Martin, the author of "A Song of Ice and Fire" series. Elden Ring is known for its dark fantasy setting, challenging combat, and a vast open-world with deep lore.',
    features: 'Elden Ring features intense combat, a dynamic and interconnected open world, and a rich narrative. Players can customize their characters, explore diverse environments, and engage in challenging battles against powerful foes. The game also promises a deep and immersive story co-created by Miyazaki and Martin.',
    cover_image: '/assets/images/Elden_Ring_Box_art.jpg',
    trailer: 'https://www.youtube.com/watch?v=AKXiKBnzpBQ',
  },
  {
    game_id: '7',
    title: 'Grand Theft Auto Trilogy',
    genre_id: 2, //'adventure',
    publisher: 'Rockstar Games',
    platform_id: 8, //'Xbox Series X', 
    release_year: new Date('2021'),
    game_description: 'The Grand Theft Auto Trilogy refers to a collection of three classic Grand Theft Auto titles: Grand Theft Auto III, Grand Theft Auto: Vice City, and Grand Theft Auto: San Andreas. These games are known for their open-world gameplay, engaging narratives, and the ability for players to explore vast cities and complete various missions.',
    features: 'The Definitive Edition of the trilogy includes updated graphics, improved character models, modern controls, and other enhancements while preserving the classic gameplay experience. Players can engage in a variety of criminal activities, explore expansive cities, and experience the stories of the iconic protagonists in each game.',
    cover_image: '/assets/images/Grand_Theft_Auto_-_The_Trilogy_-_The_Definitive_Edition.jpg',
    trailer: 'https://www.youtube.com/watch?v=mtyOXKB0M5o',
  },
  {
    game_id: '8',
    title: 'Halo: Combat Evolved',
    genre_id: 10, //'shooter',
    publisher: 'Microsoft',
    platform_id: 5, //'Xbox', 
    release_year: new Date('2001'),
    game_description: 'Halo: Combat Evolved is a first-person shooter developed by Bungie and published by Microsoft Game Studios. It is the first installment in the Halo franchise. The game introduces players to the iconic Master Chief, a supersoldier, as he battles the Covenant and the Flood on the ringworld known as Halo. The game is known for its engaging single-player campaign and groundbreaking multiplayer mode.',
    features: 'The Anniversary edition includes updated graphics, remastered audio, and the option to switch between classic and modern visuals. It retains the original gameplay that made it a classic, featuring a compelling story, diverse weapons, and intense combat against both AI and other players.',
    cover_image: '/assets/images/Halo_-_Combat_Evolved_(XBox_version_-_box_art).jpg',
    trailer: 'https://www.youtube.com/watch?v=v0kHiEME0Vk',
  },
  {
    game_id: '9',
    title: 'Mario Kart 8 Deluxe',
    genre_id: 4, //'racing',
    publisher: 'Nintendo',
    platform_id: 10, //'Nintendo Switch', 
    release_year: new Date('2014'),
    game_description: 'Mario Kart 8 Deluxe is a kart racing game developed and published by Nintendo for the Nintendo Switch. It is an enhanced version of Mario Kart 8, originally released for the Wii U. The game features a variety of characters from the Mario franchise racing on unique tracks with colorful and creative designs. Mario Kart 8 Deluxe includes all the content from the original game along with additional characters, tracks, and features.',
    features: 'Mario Kart 8 Deluxe includes various features such as anti-gravity racing, where karts can defy gravity and drive upside down or on walls. It features a wide selection of characters, vehicles, and customization options. The game supports local and online multiplayer modes, allowing players to race against friends or players from around the world.',
    cover_image: '/assets/images/MarioKart8Boxart.jpg',
    trailer: 'https://www.youtube.com/watch?v=ZKB9FEXhJ68',
  },
  {
    game_id: '10',
    title: 'Minecraft',
    genre_id: 8, //'strategy',
    publisher: 'Mojang Studios',
    platform_id: 9, //'PC', 
    release_year: new Date('2011'),
    game_description: 'Minecraft is a sandbox game developed and published by Mojang Studios. In Minecraft, players can explore a blocky, procedurally-generated 3D world with infinite terrain, discovering and extracting raw materials, crafting tools and items, and building structures or earthworks. Depending on the game mode, players can collaborate with others or play solo, and the game has various modes, including survival mode, creative mode, and adventure mode.',
    features: 'Minecraft features a dynamic open world, where players can mine blocks, craft items, and build structures. The game encourages creativity and exploration, and it has a variety of modes, including survival mode with enemies and challenges, creative mode for unlimited resources and building, and multiplayer modes for cooperative or competitive play.',
    cover_image: '/assets/images/Minecraft_cover.png',
    trailer: 'https://www.youtube.com/watch?v=MmB9b5njVbA',
  },
];

// Function to seed the Games table
const seedGames = async () => {
  try {
    // Sync the model
    await sequelize.sync({ force: true });

    // Create records in the Games table
    await Games.bulkCreate(gameSeedData);

    console.log('Games seeded successfully');
  } catch (err) {
    console.error('Error seeding games:', err);
  }
};

// Call the seed function
seedGames();