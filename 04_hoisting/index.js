"use strict"

x = 10;
document.write("x= " + x);
var x;  //shadowing - use variable before declaring

//let - will not allow hoisting
y = 20;
document.write("y= " + y);
let y;  //Cannot access 'y' before initialization