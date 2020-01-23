'use strict';

const publishMessage = require('../services/publish');
const subToMessages = require('../services/subscriber');

const database = require('../services/database.js');

const Credentials = require('../config/credentials.js')

var controllers = {
    postMessage: async function (req, res) {

        try {
            const { to, key } = req.params;
            const requestBody=req.body.message;

            const object = { 'recipient':to, 'message':requestBody};

            const db = await database.writeMessage(object, key, to);
            const message = await publishMessage(Credentials.topicName, JSON.stringify(object));

            await Promise.all([db,message]);

            res.status(200).json(message+" "+db);
        }
        catch (error) {
            console.log(error)
            res.status(500).json(error);
        }
    },

    getMessage: async function (req, res) {

        try{
            const key = req.params.key;

            const message = await subToMessages.readMessageAsync(3, Credentials.subscriberName, key);

            console.log(message);

            return res.status(200).json(message);

        }
        catch(error){
            console.log(error)
            res.status(500).json(error);
        }
    }
};


module.exports = controllers;