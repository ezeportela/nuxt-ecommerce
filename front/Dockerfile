FROM node:12.20

RUN mkdir -p /app
RUN chown node:node /app
WORKDIR /app

USER node

COPY . ./app

RUN npm run start
