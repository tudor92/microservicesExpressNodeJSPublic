'use strict';

const controller = require('./controller');

module.exports = function(app) {

   app.route('/postMessage/:to.:key')
       .post(controller.postMessage);
   app.route('/getMessage/:key')
       .get(controller.getMessage);
};