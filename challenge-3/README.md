# Challenge 3: Dashboard and Application with Dockerized PostgreSQL

## Overview
In this challenge, we will use the SQL version of the application built in [Challenge 2](https://github.com/juliafmorgado/cloudnative-dev/tree/main/challenge-2).

This challenge consists of adding a new application called `dashboard` that will poll the database every 2 seconds and keep a counter of how many texts are stored in the database. The `dashboard` backend should send, using websockets, the information about how many texts are stored to the client side (HTML/JS). The client side SHOULD NOT send a request to the backend to get the number of texts stored in the database.

As part of this challenge, the database selected should be running as a Docker container. Both applications should connect to that container.

View Salaboy's challenge 3 instructions [here](https://github.com/salaboy/cloud-native-dev/tree/main/3).

## Directory Structure

```
challenge-3
├── app/ # The main application directory
├── dashboard/ # The dashboard application directory
├── docker-compose.yml
├── init.sql # Database initialization script
└── README.md
```

## Prerequisites
- [Docker](https://docs.docker.com/get-docker/) installed on your system
- [Node.js](https://nodejs.org/) installed on your system

## Clone the Repository
1. Clone this repository: `git clone https://github.com/juliafmorgado/cloud-native-dev.git`
2. Navigate to the challenge-3 directory: `cd challenge-3`

## Build and run Docker containers
1. Ensure Docker is installed on your system.
2. Use `docker compose` to build and start the containers. This will set up the PostgreSQL database, the app, and the dashboard:

`docker compose up --build`

## Interacting with the Applications
- You can interact with the main application at http://localhost:3000.
- The dashboard displaying the text count will be available at http://localhost:3001.

## Stop running Docker containers:
To stop the running containers: `docker compose down`

> Side note: If you're using the Docker Compose V1, you will need a a hyphen (-) between 'docker' and 'compose'. But since July 2023 Dcoker Compose V1 stopped receiving updates. It’s also no longer available in new releases of Docker Desktop. Read more about it [here](https://docs.docker.com/compose/migrate/).