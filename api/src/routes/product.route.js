const { Router } = require('express');
const {
  getProducts,
  createProduct,
} = require('../controllers/product.controller');

const registerRoutes = (app) => {
  const router = Router();

  router.route('/products').get(getProducts).post(createProduct);

  app.use('/api/v1', router);

  return app;
};

module.exports = registerRoutes;
