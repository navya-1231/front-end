function display(){
    document.getElementById('id1').innerHTML = 'Onclick event';    
}
function display1(){
    document.getElementById('id1').innerHTML = 'onmousedown event';    
}
function display2(){
    document.getElementById('id1').innerHTML = 'onmouseenter event';    
}
function display3(){
    document.getElementById('id1').innerHTML = 'onmouseleave event';    
}
// to chnage css style
function display4(){
    document.getElementById('id1').style.color ="red";
}
function display5(){
    document.getElementById('id1').style.color ="green";
    document.getElementById('id1').style.backgroundColor ="black";
}
function display6(){
    document.getElementById('id1').style.cssText = "color:blue; background-color:yellow; font-size:30px";
}
function display7(){
    var x=document.getElementById('id1');
    console.log(x);//it show the tag also
    console.log(x.innerHTML);//it show the content only
    console.log(x.innerText);//it show the content only
    document.getElementById("p1").innerHTML = x.innerText;
}