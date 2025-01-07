// //if statement

// var a=10;
// if (a>5) {
//     document.write("a is greater than 5<br>");
// }

// //--------------------------------------------------

// //if else statement
// var a=10;
// if (a>5) {
//     document.write("a is greater than 5<br>");
// }
// else{
//     document.write("a is less than 5<br>");
// }

// //--------------------------------------------------

// //if else if statement
// var a=5;
// if (a>5) {
//     document.write("a is greater than 5<br>");
// }
// else if(a==5){
//     document.write("a is equal to 5<br>");
// }
// else{
//     document.write("a is less than 5<br>");
// }

// //to check whether the number is positive or negative

// function display1(aa){
//     a=Number(aa);
//     if(a>0){
//         document.getElementById("result1").innerHTML=a+" is positive";
//     }
//     else if(a==0){
//         document.getElementById("result1").innerHTML=a+" is zero"
//     }
//     else{
//         document.getElementById("result1").innerHTML=a+" is negative"
//     }
// }


// ///to check whether the number is even or odd

// function display2(aa){
//     a=Number(aa);
//     if(a==0){
//         document.getElementById("result2").innerHTML=a+" is zero<br>";
//     }
//     else if(a%2==0){
//         document.getElementById("result2").innerHTML=a+" is even<br>";
//     }
//     else{
//         document.getElementById("result2").innerHTML=a+" is odd<br>";
//     }
// }

// //--------------------------------------------------

// //switch statement

// var grade="I";
// var result;
// switch(grade){
//     case "A":
//         result="grade is a<br>";
//         break;
//     case "B":
//         result="grade is b<br>";
//         break;
//     case "C":
//         result="grade is c<br>";
//         break;
//     default:
//         result="invalid choice<br>";
// }
// document.write(result);

// function result1(aa){
//     a=Number(aa);
//     switch(a){
//         case 1:
//             document.getElementById("r").innerHTML="sunday";
//             break;
//         case 2:
//             document.getElementById("r").innerHTML="modday";
//             break;
//         case 3:
//             document.getElementById("r").innerHTML="tuesday";
//             break;
//         case 4:
//             document.getElementById("r").innerHTML="wednesday";
//             break;
//         case 5:
//             document.getElementById("r").innerHTML="thursday";
//             break;
//         case 6:
//             document.getElementById("r").innerHTML="friday";
//             break;
//         case 7:
//             document.getElementById("r").innerHTML="saturday";
//             break;
//         default:
//             document.getElementById("r").innerHTML="invalid choice";
//             break;
//     }
// }

// //--------------------------------------------------

// //while loop

// // while(condition){
// //     code block to be executed
// // }

// var i=1;
// while(i<=10){
//     document.write(i+"<br>");
//     i++;
// }

// //--------------------------------------------------

// //do while loop

// // do{
// //     code block to be executed
// // }
// // while(condition)

// var i=0;
// do{
//     document.write(i+"<br>");
//     i++;
// }
// while(i<=5);

// //===============================================

// // // diff btw while loop and do-while loop

// // //the below code shows empty
// // var i=1;
// // while(i<1){
// //     document.write(i+"<br>");
// //     i++;
// // }
// // //but below code shows output as 1
// // var i=1;
// // do{
// //     document.write(i+"<br>");
// //     i++;
// // }
// // while(i<1);

// //===============================================

// function result2(x){
//     y=Number(x);
//     var i=0;
//     while(i<=y){
//         i++;
//     }
//     document.getElementById("re").innerHTML=i;
// }


// function result2(x){
//     y=Number(x);
//     var text="";
//     var i=0;
//     while(i<=y){
//         text+=i+" ";
//         i++;
//     }
//     document.getElementById("re").innerHTML=text;
// }

// function result2(x){
//     y=Number(x);
//     var text="";
//     var i=0;
//     do{
//         i++;
//     }
//     while(i<=y);

//     document.getElementById("re").innerHTML=i;
// }

// function display(x,y){
//     xx=Number(x);
//     yy=Number(y);
//     document.getElementById("re").innerHTML=xx+yy;
// }

//javascript threats values obtained from html as string also if its type number

//===============================================

// for loop

// function display(x){
//     xx=Number(x);
//     for(var i=0;i<=xx;i++){
//         document.getElementById("re").innerHTML=i;

//     }
// }


//i of
function display(){
    var ary=[10,20,30];
    var txt="";
    for(var i of ary){
        txt+=i+" ";
    }
    document.getElementById("re").innerHTML=txt;
}

////i in-gives the index
function display(){
    var ary=[10,20,30];
    var txt="";
    for(var i in ary){
        txt+=i+" ";
    }
    document.getElementById("re").innerHTML=txt;
}

function display(){
    var ary=[10,20,30];
    var txt="";
    for(var i in ary){
        txt+=ary[i]+" ";
    }
    document.getElementById("re").innerHTML=txt;
}

