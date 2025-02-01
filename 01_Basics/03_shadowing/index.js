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