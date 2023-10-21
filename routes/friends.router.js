const express = require('express');

const friendsRouter = express.Router();

const friends = require('../controllers/friends.controller');
friendsRouter.use((req,res,next)=>{
    console.log("request",req.ip);
    next()
})
friendsRouter.get('/', friends.getFriends);
friendsRouter.get('/:friendId', friends.getFriend);
friendsRouter.post('/', friends.postFriend);

module.exports = friendsRouter