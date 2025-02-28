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
