
$(document).ready(function () {

    $(window).scroll(function () {
        var scrollh = $(this).scrollTop();
        console.log(scrollh)

        if (scrollh > 2200 ) {




        testscrol =false;
        }

    });



    $('.skillredRING').animate({ "stroke-dashoffset": "400" }, 1000
    );
    $('.skillredRING').animate({ "stroke-dashoffset": "140" }, 1111
    );
    $('.skillredRING').stop();




})



