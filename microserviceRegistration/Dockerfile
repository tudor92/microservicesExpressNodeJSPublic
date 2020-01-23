FROM node:10
ENV GOOGLE_APPLICATION_CREDENTIALS="/Users/tudor/Documents/microserviceMessaging/services/MicroApp-afa4ba0ea55a.json"
WORKDIR /home/registrationService

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000
CMD [ "node", "server.js" ]