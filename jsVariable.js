//var

var a=10;
document.write(a);  
document.write("<br>");

var a;
a=20;
document.write(a);
document.write("<br>");

a=30;
var a;
document.write(a);
document.write("<br>");

a=40;
var a;
a=50;
document.write(a);
document.write("<br>");

var a=300;
var a=400;
document.write(a);
document.write("<br>");

//----------------------------------

//let

let a1=1000;
document.write(a1);
document.write("<br>");

//let a1;//error because 'let' can't be redeclared

let a2;
a2=2000;
document.write(a2);
document.write("<br>");

// a3=3000;
// let a3;
// document.write(a3);//no output because 'a3' can't access before declaration
// document.write("<br>");
 
// a4=4000;
// let a4;
// a4=5000;
// document.write(a4);//same error as above
// document.write("<br>");

// let a5=10000;
// let a5=20000;//error because 'let' can't be redeclared
// document.write(a5);
// document.write("<br>");

//can change the value of 'let' variable after declaration
let a6=30000;
a6=40000;
document.write(a6);
document.write("<br>");

//-----------------------------

//const

const a7=100000;
document.write(a7);
document.write("<br>");

// no other cases are valid for const

