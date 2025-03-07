const productOne = {
  name: "iphone",
  price: 50000,
  qty: 2,
  total: function(){
    console.log(this);//current-context
    return this.price * this.qty
  }
};
console.log(this);//global-context
console.log(productOne.total());

