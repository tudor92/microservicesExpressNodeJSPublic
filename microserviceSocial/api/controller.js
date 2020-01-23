'use strict';

const database = require('../services/database.js');

const Credentials = require('../config/credentials.js')
const topicName = Credentials.topicName;


var controllers = {
    getFriendsList: async function (req, res) {

        try {
            const { key } = req.params;

            const db = await database.readFriendsList(key);

            res.status(200).json(db);
        }
        catch (error) {
            res.status(500).json(error);
        }
    },
    addFriend: async function (req, res) {

        try {
         
            const {by:key, phonenumber:phone} = req.params;

            const db = await database.getUserByPhone(phone);

            if(db == null)
                res.status(200).json('Phone number is not registered with a valid user');
            
            const writeUserSocial = await database.writeUserFriend(key, db[0]);
              
            res.status(200).json(writeUserSocial);
        }
        catch (error) {
            res.status(500).json(error);
        }

    },
};


module.exports = controllers;