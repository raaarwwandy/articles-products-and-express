/*jshint esversion:6 */

const express = require('express');
const router = express.Router();
const productsStore = require('../db/product.js');

// const idCounter = {id: 0};
// const productTemplate = { };
// const productList = productsStore.getAllProducts();

router.get('/', (req, res) =>{  
  res.render('products/products');
});


router.get('/new', (req, res ) =>{
  res.render('products/new');
});


router.post('/', (req, res) =>{
  // go through the length of body
  let product = productsStore.createNewProduct(req.body);
  for(var i = 0; i < product.length; i++){
    console.log(product);
  }
  // check to see if there is a value in each property
  // post if there is a value in each one
  // if not then redirect to products/new 
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
  res.end();
});


router.delete('/:id', (req, res) =>{
  productsStore.deleteProductById(req.body);
  console.log(req.body);
  res.json({message: 'it worked'});
});


module.exports = router;