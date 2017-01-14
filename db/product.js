/*jshint esversion:6 */

let productsArray = [ ];
let idCounter = 0;
 
function createNewProduct(data){
  data['id'] = idCounter;
  productsArray.push(data);
  idCounter++;
  console.log(productsArray);
} 

function getProductById(id){
  console.log('id');
}

function getAllProducts(){
  console.log('id');
}

function deleteProductById(id){
  console.log('id');
}

module.exports = {
  createNewProduct : createNewProduct,
  getAllProducts : getAllProducts,
  getProductById : getProductById,
  deleteProductById : deleteProductById
};