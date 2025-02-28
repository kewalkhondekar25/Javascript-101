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
