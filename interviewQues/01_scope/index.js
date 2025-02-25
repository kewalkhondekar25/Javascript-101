// scope - refers to the accessibility or visibility of variables, functions, and objects in different parts of your code.

//this is a global scope

//var is functional scope
var a = 5;
document.write("a in global scope: " + a + "<br>");


function f1(){
  //this is functional scope
  
  var b = 10;
  document.write("b in function scope: " + b + "<br>");

  
  if(true){
    //this is block scope
    let c = 15;
    document.write("b in block scope: " + b + "<br>");
  }
  document.write("c in block scope: " + c + "<br>");  //c is not defined, not acceible in block scope
};
f1();