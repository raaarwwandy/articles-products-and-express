/*jshint esversion:6 */

const express = require('express');
const router = express.Router();
const productsStore = require('../db/product.js');

// const idCounter = {id: 0};
// const productTemplate = { };
const productList = productsStore.getAllProducts();

router.get('/', (req, res) =>{  
  res.render('products/products');
});


router.get('/new', (req, res ) =>{
  res.render('products/new');
});


router.post('/', (req, res) =>{
  let product = req.body;
  if(product.name !== ''){
    productsStore.createNewProduct(product);
    console.log(product);
    res.redirect('/products');
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
  res.end();
});


router.delete('/:id', (req, res) =>{
  productsStore.deleteProductById(req.body);
  console.log(req.body);
  res.json({message: 'it worked'});
});


module.exports = router;