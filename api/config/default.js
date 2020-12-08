/* eslint-disable quote-props */
const env = (name) => process.env[name];

console.log(process.env);

module.exports = {
  db: {
    host: env('MONGO_DB_HOST'),
    user: env('MONGO_DB_USER'),
    password: env('MONGO_DB_PASSWORD'),
    name: env('MONGO_DB_NAME'),
  },
};
