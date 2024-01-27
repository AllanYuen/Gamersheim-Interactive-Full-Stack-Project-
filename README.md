<a ID="readme-top"></a>

<div align="center">
  
# Gamersheim: Interactive Full-Stack Project

[![Node.js Badge](https://img.shields.io/badge/Node.js-393?style=for-the-badge&logo=nodedotjs&logoColor=fff)](https://nodejs.org/en)
[![MySQL2 Badge](https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white)](https://www.mysql.com/)
[![Express Badge](https://img.shields.io/badge/Express-000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![Bcrypt Badge](https://img.shields.io/badge/Bcrypt-338?style=for-the-badge&logo=javascript&logoColor=white)](https://www.npmjs.com/package/bcrypt)
[![Dotenv Badge](https://img.shields.io/badge/Dotenv-000?style=for-the-badge&logo=javascript&logoColor=white)](https://www.npmjs.com/package/dotenv)
[![Sequelize Badge](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)](https://www.npmjs.com/package/sequelize)
[![Handlebar Badge](https://img.shields.io/badge/Handlebars%20js-f0772b?style=for-the-badge&logo=handlebarsdotjs&logoColor=black)](https://www.npmjs.com/package/handlebars)

</div>
</div>


## Goal of the Project

### In General
* Essential role of projects in the journey to becoming a full-stack web developer.
* First opportunity to demonstrate collaborative skills and coding abilities to employers.
* Project serves as a focal point in the portfolio, highlighting teamwork.
* Employers seek evidence of both individual capabilities and collaboration with other developers.
* Increased chances of interviews and job offers with a portfolio featuring deployed collaborative projects.

### As a full-stack web developer
* `Empowering Gaming Enthusiasts` </div>
  Provide an immersive full-stack game platform for gaming enthusiasts to effortlessly discover, play, and organize their favorite games.
* `Showcasing Seamless User Experience`
  </div> Demonstrate the project's commitment to an intuitive user interface, ensuring easy navigation, enhanced usability, and responsiveness across various devices and screen sizes.
* `Highlighting Rich Game Collection`
  </div> Serve as a focal point in the portfolio by offering an extensive game collection categorized by genres. Include relevant information such as genre, release date, and brief descriptions for effortless exploration.
* `Integrating External APIs for Enriched Experience`
  </div> Seamlessly fetch and display game details using integrated APIs for trailers, screenshots, and reviews. Enhance the gaming experience by integrating with external platforms.
* `Engaging Users with Interactive Features`
  </div> Provide an interactive experience with game trailers, featuring auto play, full-screen mode, and options to comment or share trailers.
* `Enhancing Search and Recommendation System`
  </div> Design a search box with autocomplete functionality. Incorporate a drop-down box with suggested games based on user preferences and trends.
* `Enabling Personalization with Favorite Games`
  </div> Allow users to create and manage a personalized list of favorite games. Implement local storage for saving and retrieving user-selected favorites.
* `Ensuring Secure User Authentication`
  </div> Implement a secure user authentication system with encrypted passwords. Enable users to create accounts, log in, and manage profiles securely.
* `Facilitating Social Engagement`
  </div> Enable social media sharing options for game-related activities and achievements.
* `Implementing Feedback and Rating System`
  </div> Create a user feedback and rating system for games, displaying average ratings and reviews to assist users in making informed decisions.
* `Cultivating Multiplayer Engagement`
  </div> Incorporate features for multiplayer engagement, including connecting with friends, joining gaming communities, and participating in multiplayer games.
* `Promptly Notifying Users of Updates and Events`
  </div> Implement a notification system for new game releases, updates, and events.
* `Building a Robust Backend for Performance`
  </div> Develop a robust backend system efficiently handling user requests, updating the game database, and ensuring overall platform performance and scalability.
  
</div>
</div>


## Table of Contents

- [Goal of the Project](#Goal-of-the-Project)
- [User Story](#User-Story)
- [Acceptance Criteria](#Acceptance-Criteria)
- [Installation](#Installation)
- [Technology Used](#technology-used)
- [Reference](#Reference)
- [License](#license)
- [Screenshots](#Screenshots)
- [Collaborators](#Collaborators)
- [Presentation](#Presentation)
- [Deployment](#Deployment)

## User Story

```
As a gaming enthusiast, I want to access an interactive full-stack game platform that provides a
seamless and engaging experience, allowing me to discover, play, and organize my favorite games
effortlessly.
```

## Acceptance Criteria

```
WHEN a user accesses the game platform
THEN they should experience an intuitive user interface with easy navigation, enhancing overall
usability and responsiveness on various devices and screen sizes.

WHEN a user explores the game collection
THEN they should find an extensive array of games categorized by genres, including relevant
information like genre, release date, and a brief description for effortless exploration.

WHEN a user views game details
THEN the platform should seamlessly fetch and display information using integrated APIs for
trailers, screenshots, and reviews, ensuring a rich gaming experience across external platforms.

WHEN a user engages with game trailers
THEN they should have an interactive experience with features such as auto play, full-screen mode,
and options to comment or share trailers.

WHEN a user searches for games
THEN the platform should provide autocomplete functionality and offer game recommendations as users
type, incorporating a drop-down box with suggestions based on preferences and trends.

WHEN a user manages favorite games
THEN they should have the ability to create a personalized list, with local storage implemented to
save and retrieve their favorite games for future reference.

WHEN a user interacts with user authentication
THEN the system should securely allow account creation, login, and profile management with encrypted
passwords and secure storage of user information.

WHEN a user wants to share achievements
THEN the platform should enable social media sharing options for favorite games on various platforms.

WHEN a user provides feedback
THEN the platform should facilitate a user feedback and rating system for games, displaying average
ratings and reviews to assist users in making informed decisions.

WHEN a user desires multiplayer engagement
THEN the platform should incorporate features to connect with friends, join gaming communities, and
participate in multiplayer games.

WHEN there are updates or events related to favorite games
THEN the platform should implement a notification system to inform users promptly.

WHEN a user interacts with the backend
THEN the platform should have a robust backend system efficiently handling user requests, updating
the game database, and ensuring overall performance.
```

## Installation

Please follow these steps to install, refer to, contribute, or reflect our project in your work.

1. Clone -or- Fork the repository
2. Run the below in console install necessary packages

```
npm i
```
3. After NPM packages have been installed, you'll need to set up your MySQL database for the application to read and write to. Log into MySQL2:
```
mysql -u root -p
```
4. Within mysql2 - create the datbase with the schema provided, run the below command in the root folder (the below is the relative path):
```
source ./db/schema.sql
```
5. Exit MySQL2:
```
quit
```
6. Seeding -or- populating a database with necessary data
```
npm run seed
```
7. You can run start the server once packages have been installed and the database is created. Run the below in the CLI:
```
node server.js
```

GAMERSHEIM is deployed VIA Heroku </div>
<a href="https://polar-journey-77005-c598f31c0871.herokuapp.com/"> HEROKU </a>


## Technology-Used

- **Node.js**: Runtime environment for executing server-side JavaScript code.
- **Express**: Web application framework for building RESTful APIs.
- **Express-Handlebars**: Template engine for rendering HTML templates.
- **Express-Session**: Middleware for managing user sessions.
- **MySQL2**: MySQL database driver for Node.js.
- **Sequelize**: Promise-based ORM for interacting with databases.
- **Bcrypt**: Library for securely hashing passwords.
- **Dotenv**: Utility for loading environment variables.
- **Nodemon**: Development tool for auto-reloading the server during development.
- **Heroku**: A cloud platform that offers easy deployment and management of web applications.

## Reference
- [Node.js & Express.js to create a RESTful API](https://docs.github.com/en/rest?apiVersion=2022-11-28)
- [Handlebars.js as the Template Engine](https://handlebarsjs.com/)
- [MySQL Workbench for the Database](https://dev.mysql.com/doc/mysql-getting-started/en/)
- [Sequelize ORM for the Database](https://sequelize.org/docs/v6/)
- [GET & POST Routes for retrieving & adding New Data](https://expressjs.com/en/guide/using-middleware.html)
- [Folder Structure with MVC Paradigm](https://docs.google.com/presentation/d/1RIA8VZVN4_JAaL0xSPf1GPc8b5dJlM5V43EVNEZ_kfA/edit#slide=id.g104b0cd1c59_0_2178)
- [Authentication and Cookies](https://github.com/expressjs/session#cookie)
- [Deployment using HEROKU](https://coding-boot-camp.github.io/full-stack/heroku/deploy-with-heroku-and-mysql)
- [Polished UI Tips and Tools](https://guides.codepath.com/android/Polishing-a-UI-Tips-and-Tools)
- [How to meet High-Quality Coding Standards](https://www.freecodecamp.org/news/how-to-write-clean-code/)

## License

For details click on the following link to go to the "LICENSE" file:

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge&logo=mit)](https://opensource.org/licenses/MIT)


### Screenshots

<div align="center">
  
![#1.Screenshot of the Gamersheim Homepage](./assets/images/FIFA_23_Cover.jpg)

![#2.Screenshot of the Popular Category](./assets/images/Devil_May_Cry_5.jpg)

![#3.Screenshot of the Upcoming Category](./assets/images/Doom_cover_art.jpg)

![#4.Screenshot of the Platforms Category](./assets/images/Grand_Theft_Auto_V.png)

![#5.Screenshot of the Genre Category](./assets/images/Resident_Evil_3.jpg)

![#6.Screenshot of the User Category](./public/images/Witcher_3_cover_art.jpg)

</div>
</div>


## Collaborators
[![OzdalDogru](https://img.shields.io/badge/Ozdal-Dogru-blueviolet)](https://github.com/ozdaldogru)
[![AllanYuen](https://img.shields.io/badge/Allan-Yuen-red)](https://github.com/AllanYuen)
[![MatthewBeaubien](https://img.shields.io/badge/Matthew-Beaubien-green)](https://github.com/Matthew-Beaubien)
[![CharlotteMarchildon](https://img.shields.io/badge/Charlotte-Marchildon-fcba03)](https://github.com/charlottemarchildon)
[![JustinLee](https://img.shields.io/badge/Justin-Lee-magenta)](https://github.com/justinsta624)

## Presentation

Group 3 Presentation of Project: 
[Powerpoint](https://docs.google.com/presentation/d/1ZsIhdhDAGaGDt26DzNYWIajbtkND_A5P/edit?usp=sharing&ouid=107335282898826746758&rtpof=true&sd=true)

to address the following: 
* `Elevator pitch` A one-minute description of your application.
* `Concept` What is your `user story`? What was your motivation for development?
* `Process` What were the `technologies` used? How were `tasks` and `roles` broken down and assigned? What `challenges` did you encounter? What were your `successes`?
* `Demo`: Show your `application`
* Directions for `future development`.


## Deployment

Github direct link:
https://github.com/ozdaldogru/Gamersheim-Interactive-Full-Stack-Project- 

Github HTTPS Clone link:

Github Deployment link:

Heroku Deployment link:

---
© 2024 Gamersheim-Interactive-Full-Stack-Project- by Project 2 Group 3. All Rights Reserved.


Heroku Deployment link:

---
