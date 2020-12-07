const { Router } = require('express');
const { getProducts } = require('../controllers/product.controller');

const registerRoutes = (app) => {
  const router = Router();

  router.route('/products').get(getProducts);

  app.use('/api/v1', router);

  return app;
};

module.exports = registerRoutes;
