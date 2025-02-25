// illegal shadowing happens when a variable declared with let or const inside a block attempts to shadow a variable declared with var 

function f1(){

  var a = 10;
  let b = 20;

  if(true){

    let a = 20; //shadowing var a with let a is ok
    document.write("a= " + a + "<br>");
    
    //illegal shadowing
    var b = 30;  // Cannot redeclare block-scoped variable 'b'
    
  }
};
f1();