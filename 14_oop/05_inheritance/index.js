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