/* eslint-disable no-restricted-syntax */
const _ = require('lodash');

const environment = {};
for (const key of Object.keys(process.env)) {
  environment[key.toLowerCase()] = process.env[key];
}

const keys = Object.keys(environment);

const prefixes = _.pickBy(
  _.countBy(keys.map((item) => item.split('_')[0])),
  (item) => item > 1
);

for (const prefix of Object.keys(prefixes)) {
  const keysToDelete = keys.filter((item) => item.startsWith(prefix));

  const props = {};
  for (const key of keysToDelete) {
    Object.assign(props, { [key.replace(`${prefix}_`, '')]: environment[key] });
    delete environment[key];
  }

  environment[prefix] = props;
}

module.exports = {
  ...environment,
};
