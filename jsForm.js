function validate(){
    var content=document.forms['regform']['name'].value;
    if(content==""|content==null){
        return false;
    }
    else{
        return true;
    }
}