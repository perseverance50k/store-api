const express = require('express');
const router = express.Router();

const { getAllProducts, getAllProductsStatic } = require('../controllers/products.js');

router.route('/').get(getAllProducts);
router.route('/static').get(getAllProductsStatic); // testing route

module.exports = router;