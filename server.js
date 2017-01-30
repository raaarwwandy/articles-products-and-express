/*jshint esversion:6 */

const express = require('express');
const handlebars = require('express-handlebars');
const products = require('./routes/products');
const bodyParser = require('body-parser');
const querystring = require('querystring');
const methodOverride = require('method-override');
let app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));

const hbs = handlebars.create({
  extname: '.hbs',
  defaultLayout: 'index'
});

app.use('/products', products);

app.get('/', (req, res) =>{
  res.end();
});

app.engine('hbs', hbs.engine);

app.set('view engine', 'hbs');


module.exports = app;