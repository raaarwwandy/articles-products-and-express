/*jshint esversion:6 */

let productsArray = [ ];
let idCounter = 0;
 
function getAllProducts(){
  return productsArray;
}

function createNewProduct(data){
  data.id = idCounter;
  productsArray.push(data);
  idCounter++;
  // console.log(productsArray);
} 



function getProductById(id){
  for(var i = 0; i < productsArray.length; i++){
    // console.log(`restult of checking id`, productsArray[i].id);
    // console.log(parseInt(id));
   if(productsArray[i].id === parseInt(id)){ 
   return productsArray[i];
   console.log(`result of product productsArray`, productsArray[i]);
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