//global scope
var globalValue = 69;

function f1(){
  
  window.globalValue2 = 69;
  
  //var - function scope

  var x;
  x = 10;

  if(x == 10){
    //var - function scope
    var y = 20;
  };

  document.write("x= " + x + " " + "y= " + y + "<br>");
  document.write(globalValue);
};
f1();


//let - block scope variable
function f2(){
  let a;  // function block scope
  a = 10;

  if(a == 10){
    let b = 20; //block scope
    document.write("inside block scope: " + "a= " + a + " " + "b= " + b + "<br>");  // a & b are accessible here
  };

  // document.write("a= " + a + "<br>" + "b= " + b); //b is only accessible inside block
};
f2();

//const
function f3(){
  //const - block scope, init mandatory
  const fullName = "john doe";
  document.write("fullName: " + fullName + "<br>");
  document.write(globalValue);
  document.write(globalValue2);
};
f3();