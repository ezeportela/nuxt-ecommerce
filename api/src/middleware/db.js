const mongoose = require('mongoose');
const config = require('config');

exports.openDbConnection = () => {
  mongoose.Promise = global.Promise;
  console.log(config.mongo_uri);
  mongoose
    .connect(config.mongo_uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    })
    .then(() => console.log('Success'))
    .catch((err) => console.log(err));

  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'MongoDB connection error:'));
};
