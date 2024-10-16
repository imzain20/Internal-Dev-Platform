const express = require('express');
const router = express.Router();
const authenticateToken = require('../middleware/authenticateToken');
const { getPipelines } = require('../controllers/pipelineController');

// Fetch pipeline data (protected route)
router.get('/', authenticateToken, getPipelines);

module.exports = router;
