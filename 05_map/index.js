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