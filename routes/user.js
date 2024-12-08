const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Register User
router.post('/register', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = new User({ username, password });
    await user.save();
    res.status(201).json({ message: 'User registered successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to register user.' });
  }
});

// Login User
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username, password });
    if (!user) return res.status(400).json({ error: 'Invalid credentials.' });
    res.json({ message: 'Login successful!' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to log in.' });
  }
});

module.exports = router;
