///filter - return all elements that matches the condition

const arr = [100, 200, 300, 400, 500];

function expensive(val){
  return val >= 300;
};

console.log(arr.filter(expensive)); //[ 300, 400, 500 ]
console.log(arr.filter(item => item <= 300)); //[ 100, 200, 300 ]
console.log(arr.filter(item => item != 500)); //[ 100, 200, 300, 400 ]


