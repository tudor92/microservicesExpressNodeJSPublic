'use strict';

const controller = require('./controller');

module.exports = function(app) {

   app.route('/getFriendsList/:key')
       .get(controller.getFriendsList);

   app.route('/addFriend/:by.:phonenumber')
       .post(controller.addFriend);

};