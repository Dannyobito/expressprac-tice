const path = require('path');

function getMessages(req, res) {
  // res.send({
  //   title: 'Messages to my Friends!',
  //   description: 'Hello Friends',
  // });
  
  // res.sendFile(path.join(__dirname, '..' ,'public', 'images', 'skimountain.jpg'))
  res.render('messages', {
    title: 'Messages to my Friends',
    friend: 'Isaac Newton'
  })
}

function postMessage(req, res) {
  console.log('Updating messages...');
}

module.exports = {
  getMessages,
  postMessage,
};