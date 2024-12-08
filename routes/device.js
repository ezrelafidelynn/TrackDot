const express = require('express');
const router = express.Router();
const Device = require('../models/Device');

// Add Device
router.post('/add', async (req, res) => {
  const { name, location } = req.body;
  try {
    const device = new Device({ name, location });
    await device.save();
    res.status(201).json({ message: 'Device added successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to add device.' });
  }
});

// Get Devices
router.get('/', async (req, res) => {
  try {
    const devices = await Device.find();
    res.json(devices);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch devices.' });
  }
});

module.exports = router;
