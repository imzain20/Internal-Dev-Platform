const express = require('express');
const router = express.Router();
const authenticateToken = require('../middleware/authenticateToken');
const { getPipelines } = require('../controllers/pipelineController');

router.get('/', authenticateToken, getPipelines);

module.exports = router;
