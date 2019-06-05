const express = require('express');

const slackRouter = express.Router();

// Import home controller
const slackController = require('../controllers/slackController');

// Contact routes
slackRouter.post('/', slackController.view);

// Export API routes
module.exports = slackRouter;
