FROM node:12.20

RUN mkdir -p /app
RUN chown node:node /app
WORKDIR /app

RUN npm i nodemon -g

USER node

COPY ./package*.json ./app

RUN npm install

COPY . ./app

CMD ["npm", "run", "dev"]
