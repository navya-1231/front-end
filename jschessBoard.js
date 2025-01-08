
var table1=document.createElement("table");
for(var i=0;i<8;i++){
    var tr=document.createElement("tr");
    for(var j=0;j<8;j++){
        var td=document.createElement("td");
        if((i+j)%2==0){
            td.style.backgroundColor="black";
        }
        tr.appendChild(td);
    }
    table1.appendChild(tr);
}
document.body.appendChild(table1);