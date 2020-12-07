FROM node:12.20

RUN mkdir -p /app
RUN chown node:node /app
WORKDIR /app

RUN npm i nodemon -g

USER node

COPY ./api/package*.json ./

RUN npm install

COPY ./api ./

CMD ["npm", "run", "dev"]
