const user1 = {
  name: "will",
  score: 0,
  increment: function(){
    return user1.score + 1;
  }
};
console.log(user1.increment());

//creating object
const user2 = {};
user2.name = "tim",
user2.score = 3;
user2.increment = function(){
  return user2.score + 1;
};
console.log(user1, user2);

//using js in built method
const user3 = Object.create(null);
user3.name = "Eva",
user3.score = 10;
user3.increment = function(){
  return user3.score + 1;
};
console.log(user3);

//Avoid DRY
const createUser = (name, score) => {
  
  const user = Object.create(null);
  
  user.name = name;
  user.score = score;
  user.increment = function(){
    return user.score + 1;
  };
  
  return user;
};

const user4 = createUser("charles", 16);
console.log(user4);



