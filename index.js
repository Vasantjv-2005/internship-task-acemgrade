// index.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// built-in middleware to parse JSON bodies
app.use(express.json());

// simple routes
app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

app.get('/api/time', (req, res) => {
  res.json({ time: new Date().toISOString() });
});

// echo endpoint (shows how to accept JSON POST)
app.post('/api/echo', (req, res) => {
  res.json({ received: req.body });
});

// start server
app.listen(PORT, () => {
  console.log(`Server running: http://localhost:${PORT}`);
});
