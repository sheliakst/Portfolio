$(document).ready(function () {


    $(".backgroundImage").animate({ "margin-left": "-10vw" }, 800
    );

    setTimeout(function () {

        $(".container").css("display", "grid")


    }, 900);
 
    setTimeout(function () {

        $(".navbar").css({"top":"0vh","opacity":".98"});

    }, 950); 

    setTimeout(function () {

        $(".footer").css("display", "block");

    }, 1200);
})