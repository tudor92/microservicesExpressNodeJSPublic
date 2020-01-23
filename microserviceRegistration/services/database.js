'use strict';

var credentials = require('../config/credentials')
var admin = require('firebase');

admin.initializeApp(credentials.firebaseConfig);
var db = admin.firestore();

async function readUser(key, phone) {

  try {

    if(key == null || key == undefined)
      return;
      
    var reference = db.collection('users').doc(key);//address.shift()).doc(address.shift()).collection(address.shift()).doc(timestamp.toString());

    let getDoc = await reference.get();

    if (!getDoc .exists) 
      return false;

    const object = getDoc.data();

    if(object.Phone != phone)
        return false;
    
    return true;

  }
  catch (error) { 
    return false; }

}

async function writeUser(name, phone) {

  try {

    if(name== null || name == undefined)
      return;

      if(phone== null || phone == undefined)
      return;

    var reference = db.collection('users').doc();//address.shift()).doc(address.shift()).collection(address.shift()).doc(timestamp.toString());

    if (!reference)
      return;

    let setWithOptions = reference.set({
     Name: name,
     Phone: phone
    }, { merge: true });
    
    return reference.id;
  }
  catch (error) { console.log(error); }

}

async function isPhoneNumberReg(phone) {

  try {

    if(phone == null || phone == undefined)
      return;
      
    var reference = db.collection('users');

    let getDoc = await reference.where('Phone', '==', phone).get();

    if(getDoc.size == 0)
      return false;
    else
      return true;

  }
  catch (error) { 
    console.log(error)
    return false; }

}

module.exports = Object.assign({}, { readUser, isPhoneNumberReg, writeUser })