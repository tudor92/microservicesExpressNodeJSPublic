'use strict';

var credentials = require('../config/credentials')
var admin = require('firebase');

admin.initializeApp(credentials.firebaseConfig);
var db = admin.firestore();

async function writeMessage(data, ...address) {

  try {

    if(data == null || data == undefined)
      return;

    address.sort();

    var reference = db.collection('conversations').doc(address.shift()+":"+address.shift()).collection("messages").doc();

    if (!reference)
      return;

    const setWithOptions = await reference.set({
     message: data.message,
     date: Date.now()
    }, { merge: true });

    return setWithOptions;

  }
  catch (error) { console.log(error); 
  }

}

module.exports = Object.assign({}, { writeMessage})