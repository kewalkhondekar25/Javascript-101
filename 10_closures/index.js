//closure & lexical scope
const outer = () => {

  let counter = 0;
  const increment = () => {
    return ++counter;
  };

  return increment;
};

const displayCount = outer();
console.log(displayCount());

//closure chain
const sum = (a) => {
  return (b) => {
    return (c) => {
      return (d) => {
        return a + b + c + d;
      };
    };
  };
};
console.log(sum(1)(2)(3)(4));

//output - 1
let count = 1;
const outside = () => {
  if(true){
    let count = 2;
    console.log(count);
  }
  console.log(count);
}
outside();

//output - 2
//create a func

const createBase = (num1) => {
  return (num2) => {
    return num1 + num2;
  };
};

const addSix = createBase(6);
console.log(addSix(10));//16

