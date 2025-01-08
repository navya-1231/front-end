var ary1=[10,20,30,40,50];
var txt="";
for(var i of ary1){
    txt+=i+" ";
}
document.getElementById("id1").innerHTML=txt;

//diff btw arrays and indexes is,
//array use numbered indexes
//eg:var ary1=[10,20,30,40,50];
//objects use named indexes
//eg: var obj={firstName:"navya",lastName:"saju"};