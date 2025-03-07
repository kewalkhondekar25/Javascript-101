function createUser(userName, loginCount, isLoggedIn){
  
  this.userName = userName;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  return this;
};

const userOne = new createUser("john", 1, true);
const userTwo = new createUser("david", 0, false);

console.log(userOne);
console.log(userTwo);

