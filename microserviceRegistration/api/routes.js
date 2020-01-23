'use strict';

const controller = require('./controller');

module.exports = function(app) {

   app.route('/validateClient/:key.:phoneNumber')
       .get(controller.validateCLient);

   app.route('/registerClient/:name.:phoneNumber')
       .post(controller.registerClient);

};