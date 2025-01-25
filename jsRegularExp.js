function display(x){
    document.getElementById("h1").innerHTML=x;
    document.getElementById("h1").innerHTML=x.search("is");//show the index of first occurance
    document.getElementById("h1").innerHTML=x.search(/is/g);
    document.getElementById("h1").innerHTML=x.search(/is/gi);

    document.getElementById("h1").innerHTML=x.match(/[is]/);//show the first i
    document.getElementById("h1").innerHTML=x.match(/[is]/g);//show the all i,s
    document.getElementById("h1").innerHTML=x.match(/[is]/gi);//show all if,s irrespective of uppercase lowercase
    document.getElementById("h1").innerHTML=x.match(/[abcde]/gi);
    document.getElementById("h1").innerHTML=x.match(/[a-z]/gi);
    document.getElementById("h1").innerHTML=x.match(/[0-9]/gi);
    document.getElementById("h1").innerHTML=x.match(/[a-z0-9]/gi);
    document.getElementById("h1").innerHTML=x.match(/is|my/g);//check is or my present

}

//date functions
function display(){
    // var d=Date();
    // document.getElementById("h1").innerHTML=d;

    var d=new Date();
    //for get date
    document.getElementById("h1").innerHTML=d.getDate();
    document.getElementById("h1").innerHTML=d.getDay();//no.of day like wednesday is 3
    document.getElementById("h1").innerHTML=d.getMonth(); //jan is 0
    document.getElementById("h1").innerHTML=d.getFullYear();
    document.getElementById("h1").innerHTML=d.getHours();
    document.getElementById("h1").innerHTML=d.getMinutes();
    document.getElementById("h1").innerHTML=d.getSeconds();
    document.getElementById("h1").innerHTML=d.getTime();//milliseconds from 1970 jan 1 


    //for set date
    d.setDate(3);
    d.setMonth(9);
    d.setFullYear(2001);
    d.setMinutes(20);
    d.setSeconds(30);
    d.setHours(13);
    document.getElementById("h1").innerHTML=d;





}