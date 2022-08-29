const express = require('express');
const routes = express.Router();

const Products = require('../controller/controller')
routes.post("/products", Products.Create);
routes.get("/products", Products.Get);
routes.get("/products/:id", Products.GetProduct);
routes.delete("/products/:id", Products.Delete);
routes.put("/products/:id", Products.Update);

module.exports = routes