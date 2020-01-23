'use strict';

var credentials = require('../config/credentials')
var admin = require('firebase');

admin.initializeApp(credentials.firebaseConfig);
var db = admin.firestore();

async function readFriendsList(key) {

  try {

    if(key == null || key == undefined)
      return;
    
    var reference = db.collection('userSocial').doc(key);

    const getDoc = await reference.get();

    if (!getDoc.exists) 
     return {}; 

    const friendsRef = await reference.collection('Friends').get();

    return friendsRef.docs.map(doc => doc.id);

  }
  catch (error) { 
    return error; }

}

async function getUserByPhone(phone) {

  try {

    if(phone == null || phone == undefined)
      return;
      
    const reference = db.collection('users');

    const getDoc = await reference.where('Phone', '==', phone).get();

    if(getDoc.size == 0)
      return null;

    return getDoc.docs.map(data => data.id );

  }
  catch (error) { 
    return false; }

}

async function writeUserFriend(key, friend) {

  try {

    const reference = db.collection('userSocial').doc(key).collection('Friends');

    if (!reference)
      return;

    const setFriend = await reference.doc(friend).set({});
    
    return setFriend;
  }
  catch (error) { return error; }

}

module.exports = Object.assign({}, { readFriendsList, getUserByPhone, writeUserFriend })