const { version } = require('../../package.json');

exports.healthcheck = async (req, res) => {
  res.send({
    online: true,
    timestamp: Date.now(),
    version,
  });
};
