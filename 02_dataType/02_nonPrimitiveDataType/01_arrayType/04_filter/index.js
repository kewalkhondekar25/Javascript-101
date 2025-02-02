const arr = [100, 200, 300, 400, 500];

function expensive(val){
  return val >= 300;
};

console.log(arr.filter(expensive));
console.log(arr.filter(item => item <= 300));
console.log(arr.filter(item => item != 500));


