var ary1=[10,20,30,40,50];
var txt="";
for(var i of ary1){
    txt+=i+" ";
}
document.getElementById("id1").innerHTML=txt;


var ary1=[10,20,30,40,50];
var txt="";
for(var i in ary1){
    txt+=ary1[i]+" ";
}
document.getElementById("id2").innerHTML=txt;

//diff btw arrays and indexes is,
//array use numbered indexes
//eg:var ary1=[10,20,30,40,50];
//objects use named indexes
//eg: var obj={firstName:"navya",lastName:"saju"};

var obj={firstName:"navya",lastName:"saju"};
var txt="";
for(let j in obj){
    txt+=obj[j]+" ";
}
document.getElementById("id3").innerHTML=txt;
document.getElementById("id3").innerHTML=obj.firstName;
document.getElementById("id3").innerHTML=obj.lastName;

