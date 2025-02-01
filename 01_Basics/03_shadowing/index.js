//shadowing - re-declaring same name identifier within scope
function f1(){
  
  var y = 20;
  document.write("y in function scope: " + y + "<br>");

  if(y==20){
    var y = 30;//shadowing
    document.write("y in block scope: " + y);
  };
};

f1();

//let - will not allow hoisting 
function f2(){
  let z = 10;
  // let z = 20; -  Cannot redeclare block-scoped variable 'z'

  var x = 10;
  let x = 10;  //Identifier 'x' has already been declared

  document.write("x in f2: " + x); 
};
f2();