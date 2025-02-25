const arr = [ 1, 2, 3];
const multiplyBy2 = arr.map(item => item * 2);
console.log(multiplyBy2);

const obj = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 28 }
];
const objNames = obj.map(item => item.name);
console.log(objNames);

//map chaining
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = numbers.filter(item => item % 2 === 0).map(item => item * 2).reduce((acc, curVal) => acc + curVal , 0);
console.log(result);
