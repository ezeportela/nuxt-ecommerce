const express = require('express');
const productRoutes = require('./product.route');

const app = express();

productRoutes(app);

module.exports = app;
