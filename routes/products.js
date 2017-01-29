/*jshint esversion:6 */

const express = require('express');
const router = express.Router();
const productsStore = require('../db/product.js');

// const idCounter = {id: 0};

router.get('/', (req, res) =>{  
  res.render('products/products');
});

router.get('/new', (req, res) =>{
  res.render('products/new');
});

router.get('/:id', (req, res) =>{
  let productId = req.params.id;
  let singleProduct = productsStore.getProductById(productId);
  let productList = [];
  productList.push(singleProduct);
  // console.log(`result of product list`,productList);
  res.render('products/products', {productsArray: productList});
});


router.post('/', (req, res) =>{
  let products = req.body;
  let productList = [];
  if(products.name !== ''){
    productsStore.createNewProduct(products);
    productList.push(products);
    // console.log(`array of`, products);
    res.render('products/products', {productsArray: productList});
  } else {
    res.redirect('/products/new');
  }
});


router.put('/:id', (req, res) =>{
  let productId = req.params.id;
  productsStore.getProductById(productId);
  let newName = req.body.product;
  let newPrice = req.body.price;
  let newAvailability = req.body.inventory;
  let newId = req.body.id;
  let newProduct = { product : newName, price : newPrice, availability : newAvailability, id: productId };
  req.body = newProduct;
  res.render('products/edit');
});


router.delete('/:id', (req, res) =>{
  productsStore.deleteProductById(req.body);
  console.log(req.body);
  res.json({message: 'it worked'});
});


module.exports = router;