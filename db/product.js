/*jshint esversion:6 */
const PG_PASS = process.env.PG_PASS;
const pgp = require('pg-promise')();
const db = pgp({ 
  host: 'localhost',
  port: 5432,
  database: 'articles_products_express',
  user: "articles_products_user",
  password: PG_PASS 
});
let productsArray = [ ];
let idCounter = 0;
 
function getAllProducts(){
  return db.any('SELECT * FROM products');
}

function createNewProduct(data){
  console.log(data);
  return db.none('INSERT INTO products(name, price, inventory) VALUES (${name}, ${price}, ${inventory})');
  }

function getProductById(id){
  for(var i = 0; i < productsArray.length; i++){
   if(productsArray[i].id === parseInt(id)){ 
   return productsArray[i];
   }
  }
}

function deleteProductById(id){
  for(var i = 0; i < productsArray.length; i++){
    if(productsArray[i].id === parseInt(productsArray[i].id)){
      productsArray.splice(i , 1, 0);
      return productsArray;
    }
  }
}

// function isProductDataValid(data){
//  for(var key in productsArray.data){
//     if(productsArray[key].data === ''){
//       return false;
//     } else {
//       return true;
//     }
//   }
// }

module.exports = {
 
  createNewProduct : createNewProduct,
  getAllProducts : getAllProducts,
  getProductById : getProductById,
  deleteProductById : deleteProductById,
  // isProductDataValid : isProductDataValid
};