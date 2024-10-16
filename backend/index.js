const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Temporary in-memory user store
const users = [];

// JWT secret (add this to your .env file as JWT_SECRET)
const jwtSecret = process.env.JWT_SECRET || 'secretKey'; // This should be stored securely

// --- Routes ---

// User registration
app.post('/api/register', async (req, res) => {
  const { username, password } = req.body;

  // Check if the user already exists
  const existingUser = users.find(user => user.username === username);
  if (existingUser) {
    return res.status(400).json({ message: 'User already exists' });
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create and store the new user
  const newUser = { username, password: hashedPassword };
  users.push(newUser);

  res.status(201).json({ message: 'User registered successfully' });
});

// User login
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;

  // Find the user
  const user = users.find(user => user.username === username);
  if (!user) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  // Compare the password
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  // Create a JWT token
  const token = jwt.sign({ username: user.username }, jwtSecret, { expiresIn: '1h' });
  res.json({ token });
});

// Middleware to protect routes
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  
  if (!token) return res.sendStatus(401); // No token found

  jwt.verify(token, jwtSecret, (err, user) => {
    if (err) return res.sendStatus(403); // Invalid token

    req.user = user; // Attach user info to request object
    next();
  });
};

// Protected route: GET /api/pipelines
app.get('/api/pipelines', authenticateToken, (req, res) => {
  const pipelines = [
    { id: 1, name: 'Pipeline 1', status: 'Success', duration: '5m' },
    { id: 2, name: 'Pipeline 2', status: 'Failed', duration: '10m' },
    { id: 3, name: 'Pipeline 3', status: 'Running', duration: '2m' },
  ];
  res.json(pipelines);
});

// Server setup
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
