function createDrinks(name, price ){
  
  this.name = name;
  this.price = price;
  
  return this;
};

createDrinks.prototype.increment = function(){//adds method in a func using prototype
  return this.price += 10;
};

const juice = new createDrinks("pineapple", 60);
console.log(juice);//createDrinks { name: 'pineapple', price: 60 }
console.log(juice.increment());//70

const coffee = new createDrinks("cappachino", 90);
console.log(coffee);//createDrinks { name: 'cappachino', price: 90 }
console.log(coffee.increment());//100
