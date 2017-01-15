/*jshint esversion:6 */

let productsArray = [ ];
let idCounter = 0;
 
function getAllProducts(){
  return productsArray;
}

function createNewProduct(data){
  data['id'] = idCounter;
  productsArray.push(data);
  idCounter++;
  console.log(productsArray);
} 



function getProductById(id){
  for(var i = 0; i < productsArray.length; i++){
   if(productsArray[i].id === parseInt(id)){
   return productsArray[i].id;
   }
  }
}

function deleteProductById(id){
  for(var i = 0; i < productsArray.length; i++){
    if(productsArray[i].id === parseInt(id)){
      productsArray.splice(i , 1, 0);
    }
  }
}

module.exports = {
  createNewProduct : createNewProduct,
  getAllProducts : getAllProducts,
  getProductById : getProductById,
  deleteProductById : deleteProductById
};