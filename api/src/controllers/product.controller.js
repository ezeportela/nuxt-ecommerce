const ProductRepository = require('../repositories/ProductRepository');

const repository = new ProductRepository();

exports.getProducts = async (req, res) => {
  const data = await repository.getAll();
  res.send({status: true, data});
};

exports.getProduct = async ({params}, res) => {
  const {id} = params;
  const data = await repository.getById(id);
  res.send({status: true, data});
};

exports.createProduct = async ({body}, res) => {
  const data = await repository.create(body);
  res.send({status: true, data});
};

exports.updateProduct = async ({params, body}, res) => {
  const {id} = params;
  const data = await repository.update(id, body);
  res.send({status: true, data});
};

exports.deleteProduct = async ({params}, res) => {
  const {id} = params;
  await repository.delete(id);
  res.send({status: true});
};
