function f1(){
  //var - function scope
  var x;
  x = 10;

  if(x == 10){
    //var - function scope
    var y = 20;
  };

  document.write("x= " + x + " " + "y= " + y);
};

f1();