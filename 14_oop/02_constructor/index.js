function createUser(userName, loginCount, isLoggedIn){
  
  this.userName = userName;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;
  this.greetings = function(){
    console.log(`Greetings!!! ${this.userName}`);
  }

  return this;
};

const userOne = new createUser("john", 1, true);
//createUser { userName: 'john', loginCount: 1, isLoggedIn: true }

const userTwo = new createUser("david", 0, false);
// createUser { userName: 'david', loginCount: 0, isLoggedIn: false }

console.log(userOne.greetings());//Greetings!!! john
console.log(userTwo);

