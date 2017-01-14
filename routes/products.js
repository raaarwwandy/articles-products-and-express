/*jshint esversion:6 */

const express = require('express');
const router = express.Router();
const productsStore = require('../db/product.js');

const idCounter = {id: 0};
const productTemplate = { };

router.get('/', (req, res) =>{  
  res.send({productTemplate});
});

router.post('/', (req, res) =>{
  productsStore.createNewProduct(req.body);
  res.end();
});

router.put('/product/:id', (req, res) =>{

});


router.delete('/product/:id', (req, res) =>{

});


module.exports = router;