
'use strict';

const { PubSub } = require('@google-cloud/pubsub');

async function publishMessage(topicName, data) {
  const pubsub = new PubSub();

  const dataBuffer = Buffer.from(data);

  try {
    const messageId = await pubsub.topic(topicName).publish(dataBuffer);
    return messageId;
  }
  catch (error) { return error}
}

module.exports = publishMessage;