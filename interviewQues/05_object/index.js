//q1 - access property
const obj1 = {
  name: "john",
  "is adult": true
};
console.log(obj1["name"], obj1["is adult"]);
//to delete property
delete obj1["is adult"];
console.log(obj1);

//q2 - add dynamic key, value
const firstName = "randy";
const lastName = "orton";
const obj2 = {
  [firstName]: lastName
};
console.log(obj2);

//q3 - loop values in obj
const obj3 = {
  firstName: "john",
  lastName: "cena",
  age: 35,
};
for(const val in obj3){
  console.log(obj3[val]);
};

//q4 
const obj4 = {
  one: 1,
  two: 2,
  one: 3
};
console.log(obj4);

//q5 - func to multiply each property in obj by 2
const obj5 = {
  a: 100,
  b: 200,
  title: "nums"
};
const multiplyByTwo = (obj) => {
  for(const key in obj){
    if(typeof obj[key] === "number"){
      obj[key] = obj[key] * 2;
    };
  };
};
multiplyByTwo(obj5);
console.log(obj5);
console.log(JSON.stringify(obj5));
//JSON.stringify
const jsonString = JSON.stringify(obj5);
//JSON.parse
console.log(JSON.parse(jsonString));
//local storage
// localStorage.setItem("data", jsonString);

//q6
console.log([..."john"]);//[ 'j', 'o', 'h', 'n' ]
const user = { name: "harry", age: 13 };
const admin = { admin: true, ...user};//{ name: 'harry', age: 13 } 
console.log(user, admin);//{ admin: true, name: 'harry', age: 13 }






