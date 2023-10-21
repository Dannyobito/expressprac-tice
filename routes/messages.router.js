const express = require('express');

const messagesRouter = express.Router();

const messages = require('../controllers/messages.controller');

messagesRouter.get('/', messages.getMessages);
messagesRouter.post('/', messages.postMessage);

module.exports = messagesRouter