//prototypal inheritance
const user = {
  name: "dumbledore`"
};

const teacher = {
  isTeaching: true,
  __proto__: user
};

console.log(teacher.__proto__.name);
Object.setPrototypeOf(teacher, user);//new syntax

//class Inheritance
class User {

  constructor(userName, email, password){
    this.userName = userName;
    this.email = email;
    this.password = password;
  };

  printOne(){
    return `UserName: ${this.userName}`
  };
};

class Teacher extends User {

  constructor(userName, email, password, role){
    super(userName, email, password);
    this.role = role;
  };

  printTwo(){
    return `Username: ${this.userName} email: ${this.email} role: ${this.role}`
  };
};

const tommy = new Teacher("tommy", "tommy@gmail.com", "tommy@", "science teacher");
console.log(tommy);
console.log(tommy.printTwo());

