const router = require('express').Router();
const { Router } = require('express');
const {product_controller} = require('../controllers');

router.get('/list', product_controller.getAllProducts);
router.post('add', product_controller.addProduct);

module.exports = router;