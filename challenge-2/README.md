# Challenge 2: SQL Database Approach

In this branch of the repository, we explore storing text data in an SQL database using PostgreSQL. This challenge is part of the Cloud Native skills enhancement series by Salaboy found [here](https://github.com/salaboy/cloud-native-dev/tree/main).


## Instructions

### Prerequisites
- Node.js installed
- PostgreSQL installed and configured ([installation guide](https://www.postgresqltutorial.com/postgresql-getting-started/install-postgresql/))

### Clone the Repository
1. Clone this repository:

```
git clone https://github.com/juliafmorgado/cloudnative-dev.git
cd cloudnative-dev/challenge-2
```

2. Switch to SQL Branch: `git checkout sql`

3. Install dependencies using npm: `npm install`

### Setup PostgreSQL Database
1. **Install PostgreSQL**: 
Install PostgreSQL using Homebrew: `brew install postgresql@15`

2. **Start PostgreSQL**:
Start the PostgreSQL service: `brew services start postgresql@15`

3. **Access PostgreSQL CLI**: 
Connect to PostgreSQL CLI: `psql postgres`

4. **Create Database**: 
Create a database for the app: `CREATE DATABASE challenge2;`

5. **Connect to Database**: 
Connect to the new database: `\c challenge2`

6. **Create Table**: 
Create a table named `texts` to store text data:

```
CREATE TABLE texts (
    id SERIAL PRIMARY KEY,
    content TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
```

7. **Verify Table Creation**: 
Verify that the texts table is created: `\d`

### Configure Node.js Application
1. **Setup Database Connection**: 
If you have credentials, set up environment variables. Ensure your `env` file contains:

```
DB_USER=your_postgres_username
DB_PASSWORD=your_postgres_password
DB_HOST=localhost
DB_PORT=5432
DB_DATABASE=challenge2
```

And update `server.js` with the correct PostgreSQL configuration:
```
const pool = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
});
```

### Run the Application
1. **Start the Node.js Server**: `node server.js`

2. **Interact with the Application**: Navigate to http://localhost:3000 in your web browser to interact with the application.

## Additional Notes
- Adjust the PostgreSQL connection parameters (user, password, host, port) based on your PostgreSQL configuration.
- Ensure PostgreSQL is running and accessible before starting the Node.js server.
- To switch back to the filesystem version: `git checkout fs`