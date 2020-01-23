'use strict';
const util = require('util');
const pubsub = require('@google-cloud/pubsub');
const {PubSub} = require('@google-cloud/pubsub');

async function readMessageAsync(timeout, subscriptionName, key) {
    return new Promise(function(resolve, reject) {
    
    const pubsubclient = new PubSub();
    const subscription = pubsubclient.subscription(subscriptionName);
    subscription.setOptions({ackDeadline: 30, flowControl:{allowExcessMessages: false}, batching:{ maxMessages: 1}, streamingOptions:{ maxStreams:1 } } );
    
    let objectList = [];

    const messageHandler = async function(message) {
       
        let object = JSON.parse(message.data); 
        let keyObject='';
      
        Object.keys(object.recipient).forEach(
            value => keyObject+=object.recipient[value]
        )
              
        if(keyObject == key )
        {
            message.ack();
            objectList.push(object.message);
        }       
    };

    const errorHandler = async function(error) {
        console.error(`ERROR: ${error}`);
        reject(error);
    };

        subscription.on(`message`, messageHandler);
        subscription.on(`error`, errorHandler);

        setTimeout(() => {
            subscription.removeListener(`message`, messageHandler);
            subscription.removeListener(`error`, errorHandler);
            resolve(objectList)
        }, timeout * 1000);
    });

}

module.exports = Object.assign({}, {readMessageAsync});