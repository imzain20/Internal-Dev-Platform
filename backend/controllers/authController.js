const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const users = []; // Example in-memory storage
const jwtSecret = process.env.JWT_SECRET;

const registerUser = (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);
  const user = { username, password: hashedPassword };
  users.push(user);
  res.status(201).json({ message: 'User registered' });
};

const loginUser = (req, res) => {
  const { username, password } = req.body;
  const user = users.find(user => user.username === username);

  if (!user || !bcrypt.compareSync(password, user.password)) {
    return res.status(403).json({ message: 'Invalid credentials' });
  }

  const token = jwt.sign({ username: user.username }, jwtSecret, { expiresIn: '1h' });
  res.json({ token });
};

module.exports = { registerUser, loginUser };
