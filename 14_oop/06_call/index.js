function setUserName(userName){
  return this.userName = userName;
};

function createUser(userName, email, password){

  // this.userName = userName;
  setUserName.call(this, userName);
  this.email = email;
  this.password = password;

  return this;
};

const tom = new createUser("tom", "tom@gmail.com", "tom123");
console.log(tom);// createUser { userName: 'tom', email: 'tom@gmail.com', password: 'tom123'}