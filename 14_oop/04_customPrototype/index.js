const userName = "john    ";
const userArr = ["david", "emily"]

Object.prototype.trueLength = function(){
  return this.trim().length;
};

Array.prototype.capitalize = function(){
  for(let i = 0; i < this.length; i++){
    this[i] = this[i].charAt(0).toUpperCase() + this[i].slice(1); 
  }
  return this;
};

console.log(userName.length);//8
console.log(userName.trueLength());//4
console.log(userArr.capitalize());//[ 'David', 'Emily' ]
