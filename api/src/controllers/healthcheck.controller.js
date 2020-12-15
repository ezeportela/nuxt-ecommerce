const { version } = require('../../package.json');

exports.healthcheck = async (req, res) => {
  res.send({
    status: true,
    timestamp: Date.now(),
    version,
  });
};
