const product = "mobile";
stock = true;
let productStatus;

if(stock == true){
  productStatus = "Available"
}else{
  productStatus = "out of stock"
};

console.log(`product: ${product}, status: ${productStatus}`);
