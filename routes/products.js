/*jshint esversion:6 */

const express = require('express');
const router = express.Router();
const productsStore = require('../db/product.js');
//change producstStore to productsModel
// const idCounter = {id: 0};

router.get('/', (req, res) =>{
  productsStore.getAllProducts()
    .then( products =>{
      console.log(products);
      res.end();
    })
  // res.render('products/products');
});

router.post('/', (req, res) =>{
  productsStore.createNewProduct(req.body)
  .then( products =>{
    console.log('result of posting from page', products);
    req.redirect('/products');
  })
  
});

router.get('/new', (req, res) =>{
  res.render('products/new');
  res.end();
});

router.get('/:id', (req, res) =>{
  let productId = req.params.id;
  let singleProduct = productsStore.getProductById(productId);
  let productList = [];
  productList.push(singleProduct);
  res.render('products/products', {productsArray: productList});
});

router.get('/:id/edit', (req,res) =>{
  let productId = req.params.id;
  productsStore.getProductById(productId);
  let productList = [];
  productList.push(productId);
  console.log('result of product list:', productList);
  res.render('products/edit', {id : productList[1]});

});



router.put('/:id', (req, res) =>{
  let productId = req.params.id;
  productsStore.getProductById(productId);
  let newName = req.body.productName;
  let newPrice = req.body.price;
  let newAvailability = req.body.inventory;
  let newId = req.body.id;
  let newProduct = { product : newName, price : newPrice, availability : newAvailability, id: productId };
  req.body = newProduct;
});


router.delete('/:id', (req, res) =>{
  productsStore.deleteProductById(req.body);
  console.log(req.body);
  res.json({message: 'it worked'});
});


module.exports = router;