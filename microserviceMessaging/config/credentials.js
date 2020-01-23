

const firebaseConfig =
{
    apiKey: "AIzaSyCdhJy8-d8SujJ8c936sw1y9Vb_oIbsFEo",
    authDomain: "chatychatbackend.firebaseapp.com",
    databaseURL: "https://chatychatbackend.firebaseio.com",
    projectId: "chatychatbackend",
    storageBucket: "chatychatbackend.appspot.com",
    messagingSenderId: "834530499057",
    appId: "1:834530499057:web:3b175edfbc46e0d40e8c50",
    measurementId: "G-JV8P3CLEH4"

}

const topicName= "projects/microapp-257519/topics/PostMessage"

const subscriberName = "ReadMessages"

module.exports = Object.assign({}, { firebaseConfig, topicName, subscriberName })