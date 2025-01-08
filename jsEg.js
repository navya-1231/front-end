var para1=document.createElement("p");//create a new p tag
para1.innerHTML="This is a new paragraph";//add text to the p tag
document.body.appendChild(para1);//add the p tag to the body of the page

var b1=document.createElement("button");//create a new button
b1.innerHTML="Click me";//add text to the button
document.body.appendChild(b1);//add the button to the body of the page

var h=document.getElementById("h2");//get the h2 tag
h.remove();//remove the h2 tag
