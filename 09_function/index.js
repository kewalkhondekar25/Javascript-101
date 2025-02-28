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