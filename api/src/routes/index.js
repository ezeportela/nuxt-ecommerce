const express = require('express');
const productRoutes = require('./product.route');
const healthcheckRoutes = require('./healthcheck.route');

const app = express();

productRoutes(app);
healthcheckRoutes(app);

module.exports = app;
