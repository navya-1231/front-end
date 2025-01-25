

$(document).ready(function(){
    // //click
    // $("button").click(function(){
    //     $("p").hide();
    //     $("#h1").hide();//hide using id
    //     $(".h6").hide();//hide using class
    // })  

    // //double click
    // $("button").dblclick(function(){
    //     $("p").hide();
    // })  

    // //mouse enter
    // $("button").mouseenter(function(){
    //     $("#h1").hide();
    // }) 

    // //mouse leave
    // $("button").mouseleave(function(){
    //     $(".h6").hide();
    // }) 

    // //hover
    // $("button").hover(function(){
    //     $("p").hide();
    // }) 

    //keyup
    $("button").keyup(function(){
        $(".h6").hide();
    }) 

    //keydown
    $("button").keydown(function(){
        $("#h1").hide();
    }) 

    //keypress
    $("button").keypress(function(){
        $("p").hide();
    }) 
})



