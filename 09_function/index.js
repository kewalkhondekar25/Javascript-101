//function declaration
function sum(num1, num2){
  return num1 + num2;
};
console.log(sum(1, 2));

//function expresson
const printName = (name) => {
  console.log(`hi! ${name}`);
};
printName("john");

//first class function
const multiplyBy2 = (num) => {
  return num * 2;
};
const printMultiplyBy2 = (input, multiplyBy2) => {
  console.log(multiplyBy2(input));
};
printMultiplyBy2(5, multiplyBy2);

//IIFE
(() => console.log("hello world"))();
((name) => console.log(`greetings! ${name}`))("omen");
((x) => {//closure
  return ((y) => {
    console.log(x)
  })()
})(1);

for(let i = 0; i < 5; i++){  
  setTimeout(() => {
    console.log(i);
  }, i * 1000)
};//0,1,2,3,4

for(var i = 0; i < 5; i++){
  setTimeout(() => {
    console.log(i);
  }, i * 1000)
};//5,5,5,5,5

//output ques
var x = 1;
const func = () => {
  console.log("hoisting in func ", x);//undefined
  var x = 2;
};
func();

//spread operator
const printSpread = (num1, num2, num3) => {
  console.log(num1 + num2 + num3);
};
const arr = [69, 70, 71];
printSpread(...arr);

//rest operator/parameter
const printRest = (...arr) => {
  const [one, two, ...rest] = arr;
  console.log("one: ", one);
  console.log("two: ",two);
  console.log(...rest);
};
printRest(1, 2, 3, 4, 5);

const rest = (ten, twenty, ...rest) => {
  console.log(ten, twenty);
  console.log(...rest);
};
rest(10, 20, 30, 40, 50);

//callback func
const printIsEven = (num, cb) => {
  return cb(num);
};

const checksEven = (num) => {
  if(num % 2 === 0){
    return "true";
  };
  return "false"
};

console.log(printIsEven(2, checksEven));
