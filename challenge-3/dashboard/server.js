const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const { Pool } = require('pg');
const path = require('path');
const PORT = 3001;

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const pool = new Pool({
  user: 'postgres',
  host: 'db', // 'db' is the name of the service in docker-compose.yml
  database: 'challenge3',
  password: 'password',
  port: 5432,
});

// Middleware to parse JSON bodies
app.use(express.json());

// Serve static files (if needed)
app.use(express.static(path.join(__dirname, 'public')));

// Example route handler for the root URL
app.get('/', (req, res) => {
  res.send('Welcome to the Dashboard!');
});

// Serve Socket.IO client library
app.get('/socket.io/socket.io.js', (req, res) => {
  res.setHeader('Content-Type', 'application/javascript');
  res.sendFile(path.join(__dirname, '/node_modules/socket.io/client-dist/socket.io.js'));
});


// Socket.io logic for sending text count to clients
io.on('connection', (socket) => {
  console.log('New client connected');

  const sendTextCount = async () => {
    try {
      const result = await pool.query('SELECT COUNT(*) FROM texts');
      io.emit('textCount', { count: result.rows[0].count });
    } catch (error) {
      console.error('Error sending text count:', error.message);
    }
  };

  // Initial call and every 2 seconds thereafter
  sendTextCount();
  setInterval(sendTextCount, 2000);

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});



app.listen(PORT, () => {
  console.log(`Dashboard server running on http://localhost:${PORT}`);
});