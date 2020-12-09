const mongoose = require('mongoose');
const logger = require('morgan');
const config = require('config');

const generateConnectionString = ({ host, port, user, password, name }) =>
  `mongodb+srv://${user}:${password}@${host}/${name}?retryWrites=true&w=majority`;

exports.connectToInstance = () => {
  mongoose.Promise = global.Promise;
  console.log(config);
  mongoose
    .connect(config.mongo_uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('Success'))
    .catch((err) => console.log(err));

  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'MongoDB connection error:'));
};
