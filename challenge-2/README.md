# Challenge 2: Store Texts in File System and SQL Database

This branch of the repository contains implementations to store text data using two approaches: file system and SQL database. This challenge is part of the Cloud Native skills enhancement series by Salaboy found [here](https://github.com/salaboy/cloud-native-dev/tree/main).

## Branches

### File System (fs)
The fs branch stores text data using file system APIs provided by Node.js. This approach demonstrates basic file handling and persistence techniques.
### SQL Database (sql)
The sql branch stores text data in a table within an SQL database in your local machine. You can choose any SQL database of your choice, with PostgreSQL being recommended. This approach showcases integrating a database into a Node.js application for data storage.

## Instructions

### Prerequisites
- Node.js installed

### Build and Run
1. Clone this repository: `git clone https://github.com/juliafmorgado/cloud-native-dev.git`
2. Navigate to the `challenge-2` directory: `cd challenge-2`
3. Switch to the `fs` or `sql` branch: `git checkout fs` or `git checkout sql`
4. Install dependencies: `npm install`
5. Start the server: `node server.js`
6. Open `http://localhost:3000` in your web browser

### Test
Follow the steps in the respective "Build and Run" section for each branch. Verify that texts are saved and retrieved correctly according to the chosen approach.
