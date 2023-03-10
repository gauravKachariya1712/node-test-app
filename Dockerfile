FROM node:19-alpine3.16
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
copy .
EXPOSE 3000
cmd ["node", "index.js"]
