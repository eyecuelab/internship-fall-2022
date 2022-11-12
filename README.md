# internship-fall-2022

### Authors
<!-- ### 🧑🏽‍🤝‍🧑🏼 Maintainers -->

- Anthony DiFalco
- Greg Khmara
- Todd Pangilinan
- Winnie Wang

## 📂 Table Of Contents

- [Description](#description)
  - [Summary](#summary)
  - [MVP](#mvp)
  - [Stretch Goals](#stretch-goals)

- [Technologies Used](#technologies-used)
- [Installation, Setup, and Running The App](#installation-setup-and-running-the-app)
  - [Installation](#installation)
  - [Required Files](#required-files)
  - [Running The App Locally](#running-the-app-locally)
- [The Nameless Terror API Reference](#the-mafia-api-reference)
- [Bugs](#bugs)
- [License](#license)

## 📝 Summary <a id="summary"></a>

_This is a full stack application that uses prisma and postgresql for the backend, node/express for the server, and react for the front-end and is written using typescript._

## ✅ Description <a id="description"></a>

_This is a web application that will allow a group of users to play a HaiCue. HaiCue is a group game, where teams collaboratively write haikus and then earn points by guessing other teams' haikus. Moderaters generate general topics, and related prompts. Every round has one topic, and each team gets a unique prompt. Teams generate haikus based on these prompts, after every team has written their haiku, each team presents their haiku, and the other teams guess what their prompt was.

Scoring: Both the presenting team and the non-presenting teams can earn points. The guessing team gets more points if they guess correctly earlier- 5 points if they guess correctly on the first line, 3 for the second line, and 1 for the last line. The first team to correclty gets the points (only one guessing team can earn the points for a haiku). The presenting team's scoring is inverted- they get 1 point if their prompt is guessed in the first line, 3 if one the 2nd line, and 5 points if no one guesses it until the 3rd line. Teams should write their haikus accordingly (ie, the first line should give a clue but be somewhat vauge, the 2nd line a bit clearer, and the 3rd line should make it clear what the prompt was.)

Example: a simple one-round game with 3 teams. First, a moderator might pick the topic of "Holidays", and then generate the propts, "Halloween", "Thanksgiving" and "New Year's Eve". Each team gets one of the of the prompts, and generates a haiku. After everyone has written their haiku, they are presented, and non-presenting teams have a chance to guess. Points are awarded to the guessing team who get the prompt right first and the presenting team. The process is repeated for each team._

### 🎯 MVP <a id="mvp"></a>

- Google authentication for the moderator role.
- A user should be able to host a game as a moderator.
- A user should be able to join a game with an access link
<!-- - A Help section and or tutorial for first time players -->
- A flowchart of the game and how to win(Readme)
- A clean & easy UI to interact with
- Haiku validation- the application should check to make sure the teams generate a valid haiku that does not use the prompt/word.
- A buzzer for users to login.
- "Moderator" interface that allows moderators to create new topics and prompts, as well as keep track of teams' scores, timers, etc.
- "Team Leader" interface that allows team leaders to see topics, prompts, timer, submit haikus, and buzz "in" to guess.
- A group of users should be able to successfully start and complete a game.
- Moderator's input for topics and prompts should persist (ie, if they write a topic and prompt on Tuesday, it should be available on Thursday.)
### ⭐ Stretch Goals <a id="stretch-goals"></a>

[] A simple tutorial toggle 
[] Customizable settings
[] pre-generated topics and prompts
[] SMS/Email invites
[] consider making the game fully remote- add team member option which is view only, but also allows in-game communication?
<!-- [] Custom Themes
[] In-game communication/Chat -->

## 🖥️ Technologies Used <a id="technologies-used"></a>

- _[React](https://reactjs.org/)_
<!-- - _[React Query](https://tanstack.com/query/v4/?from=reactQueryV3&original=https://react-query-v3.tanstack.com/)_ -->
- _[React Router](https://reactrouter.com/)_
- _[Typescript](https://www.typescriptlang.org/)_
- _[Socket.IO](https://socket.io/)_
- _[Prisma](https://www.prisma.io/)_
- _[PostgreSQL](https://www.postgresql.org/)_
- _[ExpressJs](https://expressjs.com/)_
<!-- - _[Express-Session](https://www.npmjs.com/package/express-session/v/1.17.3)_ -->
<!-- - _[Prisma-session-store](https://www.npmjs.com/package/@quixo3/prisma-session-store)_ -->
- _[ViteJS](https://vitejs.dev/)_
<!-- - _[Nodemon](https://www.npmjs.com/package/nodemon)_ -->
<!-- - _[Fly.IO](https://fly.io/)_ -->
<!-- - _[Swagger-ui-express](https://www.npmjs.com/package/swagger-ui-express)_ -->
- _[Material UI](https://mui.com/)_
- _[ESLint](https://eslint.org)_



## ⚙️ Installation, Setup, and Running The App <a id="installation-setup-and-running-the-app"></a>

### Setup/Installation Requirements <a id="installation"></a>

- _Please ensure you have the latest version of NodeJs and PostgreSQL_
- _Clone this repository <https://github.com/eyecuelab/internship-fall-2022.git> locally_
- _Navigate to the root folder `internship-fall-2022` and then `cd api` and run `npm install` and then `cd client` and run `npm install`_.
- See below for required .env files
- You will also need to have your database setup in PostgreSQL.
- To ensure the prisma schema has been updated to PostgreSQL, Run a migration to create your database tables with Prisma Migrate:
  - `npx prisma migrate dev --name init`
  <!-- - `npm run seed` to seed the database with the default roles -->
- Also, Prisma Studio is a visual editor for the data in your database.
  - Run `npx prisma studio` in your terminal.

### Required .env Files <a id="required-files"></a>

- In the `/api` directory, create an .env file and insert the following: `DATABASE_URL="postgresql://postgres:yourPasswordGoesHere@localhost:5432/yourDatabaseNameGoesHere?schema=yourSchemaNameGoesHere"` & `SESSION_SECRET="yourSecretGoesHere"`
- Then save
<!-- - In the `/client` directory, create an .env file (separate from the previous), and insert the following: `VITE_API_ENDPOINT=http://localhost:3000` -->
- Then save

### Running the App Locally <a id="running-the-app-locally"></a>

- Split your terminal into two separate consoles
- Navigate one terminal into the `/api` directory and run `npm run dev`
- Navigate the second terminal into the `/client` directory and run `npm run dev` as well. If your browser does not automatically load, type `http://localhost:5173/` manually in the browser

## The Nameless Terror API Reference <a id="the-mafia-api-reference"></a>

- Everything you need to interact with our API.
- If you want to access our API directly, you can use the following base URL: `http://localhost:3000/swagger` after running the app locally.

### Making Requests

- All requests should be made to the base URL: `http://localhost:3000/` and use Postman/Thunderclient and requests should be made using the HTTP verbs `GET`, `POST`, `PUT`, `PATCH`, and `DELETE`.

<!-- - Player:
  - GET `/player` retrieves a single player by Id.
  - GET `/player/:gameId` retrieves all players by gameId.
  - POST `/player/` creates a new player.
  - PUT `/player/:id` updates a single player by Id.

- Game:
  - GET `/games` retrieves all games.
  - GET `/game/:id` retrieves a single game by Id.
  - POST `/game/:id` creates a new game.

- Round:
  - GET `/round/:id` retrieves specific round from game.
  - GET `/rounds/:gameID` retrieves all rounds from game.

- Role:
  - GET `/roles` retrieves all roles.
  - GET `/role/:id` retrieves a single role by Id.
  - POST `/role/` creates a new role.

- Vote:
  - GET `/vote/:id` retrieves a single vote by Id.
  - GET `/votes/:gameId` retrieves all votes by gameId.
  - POST `/vote/` creates a new vote.
  - POST `/tallyVote` Counts casted votes and tally them.
  - POST `/vote/` casted votes are collected. -->

### The Request Body

- In progress

### Models

- In progress

## Known 🐛 Bugs <a id="bugs"></a>

- _No Known Issues_

## 🎫License <a id="license"></a>

[MIT](LICENSE) 👈

_If you run into any issues or have questions, ideas, or concerns;  please email us_

Copyright (c) 2022 - William Rodriguez - James Fox - Marcus Lorenzo - Mark McConnell