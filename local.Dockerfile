FROM node:22.11.0-slim

WORKDIR /usr/src/app

RUN npm install -g nodemon

RUN npm install -g typescript

EXPOSE 8080 5550