function display(){
    var s="this is a string data IS";
    console.log(s);
    console.log(typeof(s));
    console.log(typeof s);
    document.getElementById("h1").innerHTML=s.length;
    document.getElementById("h1").innerHTML=s.toUpperCase();
    document.getElementById("h1").innerHTML=s.toLowerCase();
    var ss="second string";
    document.getElementById("h1").innerHTML=s.concat(ss);
    document.getElementById("h1").innerHTML=s.replace("is","@");//only first is replaced by @
    document.getElementById("h1").innerHTML=s.replace(/is/g,"@");//g means global so all is are replaced by @ except uppercase is
    document.getElementById("h1").innerHTML=s.replace(/is/gi,"@");//g means global so all is are replaced by @ including uppercase is also


    document.getElementById("h1").innerHTML=s.split(" ");
    document.getElementById("h1").innerHTML=s.slice(12,18);//start from index 12 to 17
    document.getElementById("h1").innerHTML=s.slice(-18,-12);//start from back 12 to 17 
    document.getElementById("h1").innerHTML=s.slice(12);//from index 12 to last
    document.getElementById("h1").innerHTML=s.substring(12,18);
    document.getElementById("h1").innerHTML=s.substring(12);
    document.getElementById("h1").innerHTML=s.substring(-18,-12);//it not work becase the index is lower than zero s zre considered as zero 
}