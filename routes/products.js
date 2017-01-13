/*jshint esversion:6 */

//import express then express.router
const express = require('express');
const router = express.Router();


const productTemplate = { };

router.get('/', (req, res) =>{
  res.send({'product': productTemplate});
});

router.post('/', (req, res) =>{
  console.log(req.body);
  res.end();
});


module.exports = router;