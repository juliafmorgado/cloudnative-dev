# Challenge 3: Dashboard and Application with Dockerized PostgreSQL

## Overview
In this challenge, we will use the SQL version of the application that we built in [Challenge 2](https://github.com/juliafmorgado/cloudnative-dev/tree/main/challenge-2). This challenge consists of adding a new application called `dashboard` that will poll the database every 2 seconds and keep a counter of how many texts are stored in the database. The `dashboard` backend should send, using websockets, the information about how many texts are stored to the client side (HTML/JS). The client side SHOULD NOT send a request to the backend to get the number of texts stored in the database.

As part of this challenge, the database selected should be running as a Docker container. Both applications should connect to that container.

View Salaboy's challenge instructions [here](https://github.com/salaboy/cloud-native-dev/tree/main/3).

## Directory Structure

```
challenge-3
├── app/ # The main application directory
├── dashboard/ # The dashboard application directory
├── docker-compose.yml
└── README.md
```


## Clone the Repository
1. Clone this repository: `git clone https://github.com/juliafmorgado/cloud-native-dev.git`
2. Navigate to the challenge-3 directory: `cd challenge-3`

## Setting Up the PostgreSQL Database
1. Ensure Docker is installed on your system.
2. Navigate to the `challenge-3` directory and start the PostgreSQL container:
   `docker-compose up -d`

## Running the Main Application
1. Navigate to the `app` directory: `cd app`
2. Install the dependencies: `npm install`
3. Start the application: `node server.js`
The application will be running on http://localhost:3000.

## Running the Dashboard Application
1. Navigate to the `dashboard` directory: `cd dashboard`
2. Install the dependencies: `npm install`
3. Start the application: `node server.js`
The application will be running on http://localhost:3001.

## Interacting with the Applications
- You can interact with the main application at http://localhost:3000.
- The dashboard displaying the text count will be available at http://localhost:3001.