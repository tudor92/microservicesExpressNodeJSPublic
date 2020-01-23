FROM node:10

WORKDIR /home/serviceSocial

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000
CMD [ "node", "server.js" ]