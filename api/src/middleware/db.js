const mongoose = require('mongoose');
const logger = require('morgan');
const config = require('config');

const generateConnectionString = () => '';

exports.connectToInstance = () => {
  mongoose.Promise = global.Promise;
  console.log(config);
  const uri =
    'mongodb+srv://root:root@cluster0.aqlav.mongodb.net/cdscds?retryWrites=true&w=majority';
  mongoose
    .connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('Success'))
    .catch((err) => console.log(err));

  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'MongoDB connection error:'));
};
