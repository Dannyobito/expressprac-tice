const path = require('path');

function getMessages(req, res) {
  res.json({
    title: 'Messages to my Friends!',
    description: 'Hello Friends',
  });
  
}

function postMessage(req, res) {
  console.log('Updating messages...');
}

module.exports = {
  getMessages,
  postMessage,
};