const { Router } = require('express');
const { healthcheck } = require('../controllers/healthcheck.controller');

const registerRoutes = (app) => {
  const router = Router();

  router.route('/healthcheck').get(healthcheck);

  app.use('/api/v1', router);

  return app;
};

module.exports = registerRoutes;
