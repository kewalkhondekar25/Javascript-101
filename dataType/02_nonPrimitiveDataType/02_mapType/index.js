let arr = [1, 2, 3, 4, 5, 0];
let target = 5;

const findTwoNumbers = (arr, target) => {
  const myMap = new Map();

  for(let i = 0; i < arr.length; i++){
    const currentNum = arr[i];
    const more = target - currentNum;
    
    if(myMap.has(more)){
      return [more, currentNum];
    };

    myMap.set(currentNum, i);
  };

  return [];
};

console.log(findTwoNumbers(arr, target));

