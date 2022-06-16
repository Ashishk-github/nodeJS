const path=require('path');

const express=require('express');

const productController=require('../controllers/products');

const router=express.Router();

router.get('/add-product',productController.addProduct);

router.post('/add-product',productController.getProduct);

module.exports= router;