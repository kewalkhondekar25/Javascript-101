class User {
  
  constructor(userName, email, password){
    this.userName = userName;
    this.email = email;
    this.password = password;
  };

  encryptPassword(){
    return `${this.password}abc`;
  };
};

const tom = new User("tom", "tom@gmail.com", "tom@");
console.log(tom);//User { userName: 'tom', email: 'tom@gmail.com', password: 'tom@' }
console.log(tom.encryptPassword());//tom@abc

//BTS
/*

function User(userName, email, password){
  
this.userName = userName;
this.email = email;
this.password = password;

return this;
};

User.prototype.encryptPassword = function(){
  return `${this.password}abc`;
};

const tom = new User("tom", "tom@gmail.com", "tom@");
console.log(tom);//User { userName: 'tom', email: 'tom@gmail.com', password: 'tom@' }
console.log(tom.encryptPassword());//tom@abc

*/