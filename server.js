/*jshint esversion:6 */

const express = require('express');
const handlebars = require('express-handlebars');
const products = require('./routes/products');
const bodyParser = require('body-parser');
const querystring = require('querystring');
let app = express();

app.use(bodyParser.urlencoded({extended: false}));

const hbs = handlebars.create({
  extname: '.hbs',
  defaultLayout: 'app'
});

app.use('/products', products);

app.get('/', (req, res) =>{
  console.log('testing server');
});

app.engine('hbs', hbs.engine);

app.set('view engine', 'hbs');


module.exports = app;