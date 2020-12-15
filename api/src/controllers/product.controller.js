const ProductRepository = require('../repositories/product.repository');

const productRepository = new ProductRepository();

exports.getProducts = async (req, res) => {
  const data = await productRepository.getAll();
  res.send({ status: true, data });
};

exports.createProduct = async (req, res) => {
  const data = await productRepository.create(req.body);
  res.send({ status: true, data });
};
