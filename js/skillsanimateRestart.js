


    $(window).scroll(function () {
        let scrollh = $(this).scrollTop();
console.log(scrollh)
        if (scrollh == 2450 ) {
            $(".skillsclass").removeClass("skillsvg").addClass("skillsvg");
        }
    });



