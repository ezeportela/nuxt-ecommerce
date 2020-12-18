const {Router} = require('express');
const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require('../controllers/product.controller');

const registerRoutes = (app) => {
  const router = Router();

  router.route('/products').get(getProducts).post(createProduct);

  router
    .route('/product/:id')
    .get(getProduct)
    .put(updateProduct)
    .delete(deleteProduct);

  app.use('/api/v1', router);

  return app;
};

module.exports = registerRoutes;
