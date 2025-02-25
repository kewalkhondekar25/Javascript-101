const arr = [1, 2, 3, 4, 5, 6];

const evenNum = arr.filter(item => item % 2 === 0);
console.log(evenNum);

const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 17 },
  { name: "Charlie", age: 30 }
];

const adults = users.filter(item => item.age >= 18);
console.log(adults);