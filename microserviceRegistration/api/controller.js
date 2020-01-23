'use strict';

const database = require('../services/database.js');

var controllers = {

    validateCLient: async function (req, res) {

        try {
            const { key, phoneNumber } = req.params;

            const db = await database.readUser(key, phoneNumber);
            res.json(db);
        }
        catch (error) {
            res.json(error);
        }

    },
    registerClient: async function (req, res) {

        try {
            const { name, phoneNumber } = req.params;

            const db = await database.isPhoneNumberReg(phoneNumber);

            if (db == true)
                return res.json("Phone number already registered");

            const writeCust = await database.writeUser(name, phoneNumber);

            res.json(writeCust);
        }
        catch (error) {
            res.json(error);
        }
    },
};


module.exports = controllers;