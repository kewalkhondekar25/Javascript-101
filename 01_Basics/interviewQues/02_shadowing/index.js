//shadowing

function f1(){
  
  let a = 10;
  
  if(true){
    let a = 20;
    document.write("a= " + a + "<br>");
  };

  document.write("a= " + a + "<br>");
  
};
f1();