const arr = [1, 2, 3, 4, 5];
const result = arr.forEach(item => console.log(item));
console.log(result);  //undefined

const fruits = ["Apple", "Banana", "Cherry"];
fruits.forEach((item, i) => console.log(`Index: ${i}: ${item}`));
/*
Index 0: Apple
Index 1: Banana
Index 2: Cherry
*/

//Modifying an Array (Not Recommended)
const nums = [2, 4, 6, 8];
nums.forEach((item, i, arr) => arr[i] = item * 2);
console.log(nums);  //[ 4, 8, 12, 16 ]