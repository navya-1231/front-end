// $(document).ready(function(){
//     $(element).action();
// })

//=====================================================

// $(document).ready(function(){
//     $("p").hide();
// })

// $(document).ready(function(){
//     $("button").click(function(){
//         $("p").hide();
//         $("#h1").hide();//hide using id
//         $(".h6").hide();//hide using class

//     })  
// })

// //hide using this keyword
// $(document).ready(function(){
//     $("button").click(function(){
//         $(this).hide();//this indicate current element as button
//     })  
// })

//=====================================================

// $(document).ready(function(){
//     $("button").click(function(){
//         $("p").css("background-color","red");
//     })  
//     $("input").focus(function(){//click inside
//         $(this).css("background-color","green");
//     })
//     $("input").blur(function(){//click outside
//         $(this).css("background-color","yellow");
//     })
// })

//=====================================================
//jquery effects

// $(document).ready(function(){
//     $("#b1").click(function(){
//         $("p").hide();
//     })  
//     $("#b2").click(function(){
//         $("p").show();
//     })  
//     $("#b3").click(function(){
//         $("p").toggle();
//     })  
// })

// //=====================================================
// //jquery fading methods

// $(document).ready(function(){
//     $("#b1").click(function(){
//         $("div").fadeIn();
//     })  
//     $("#b2").click(function(){
//         $("div").fadeOut();
//     })  
//     $("#b3").click(function(){
//         $("div").fadeToggle();
//     })  
// })

//=====================================================
//jquery sliding methods

// $(document).ready(function(){
    // $("#b1").click(function(){
    //     $("div").slideUp();
    // })  
    // $("#b2").click(function(){
    //     $("div").slideDown();
    // })  
    // $("#b3").click(function(){
    //     $("div").slideToggle();
    // })  

//     $("#b1").click(function(){
//         $("div").slideUp("slow");//sliding speed
//     })  
//     $("#b2").click(function(){
//         $("div").slideDown("fast");
//     })  
//     $("#b3").click(function(){
//         $("div").slideToggle(4000);
//     }) 
// })

//=====================================================
//jquery on() methods

// $(document).ready(function(){
//     $('p').on({
//         mouseenter: function(){
//             $(this).css("background-color","lightgray");
//         },
//         mouseleave: function(){
//             $(this).css("background-color","lightblue");
//         },
//         click: function(){
//             $(this).css("background-color","yellow");
//         }
//     })
// })

// $(document).ready(function(){
//     $("#b1").on({
//         click: function(){
//             $('h1').css("background-color","lightgray");
//         },
//         dblclick: function(){
//             $('h2').css("background-color","lightblue");
//         },
//         mouseenter: function(){
//             $('h3').css("background-color","yellow");
//         },
//         mouseleave: function(){
//             $('h4').css("background-color","red");
//         }
//     })
// })

//=====================================================
//jquery rollback function-callback fn is executed after the current effect is 100% finished.


// $(document).ready(function(){
//     //without rollback-here first alert then hide the p tag
//     $("#b1").click(function(){
//         $("p").hide(1000);
//         alert("The paragraph is now hidden");
//     })
//     //with rollback
//     $("#b1").click(function(){
//         $("p").hide(1000,function(){
//             alert("The paragraph is now hidden");
//         });
//     })
// })


//=====================================================
//jquery chaining

$(document).ready(function(){

    // $("#b1").click(function(){
    //     $("p").css("color","red").slideUp(2000).slideDown(2000);
    // })
    
    $("#b1").click(function(){
        $("p").css("color","red").slideUp(2000,function(){
            $("p").css("color","yellow").slideDown(2000);
        })
    })

    $("#b2").click(function(){
        $("div").css("background-color","green").slideUp(2000,function(){
            $("div").css("background-color","yellow").slideDown(2000);
        })
    })
})

