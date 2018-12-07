$(document).ready(function () {

    $('.selectwork li').click(function () {
        let selectWork = $(this).text();
        selectWork = selectWork.replace(/ /g, '');
        let srcDisplay = "./photos/work/Laptop/" + selectWork + ".png";
        $('.worklaptop1').attr('src', srcDisplay);
        
    });



    $('.selectworkMobile li').click(function () {
        let selectWork = $(this).text();
        selectWork = selectWork.replace(/ /g, '');
        console.log(selectWork)

        let srcDisplay = "./photos/work/Mobile/" + selectWork + ".png";
        console.log(srcDisplay)
        $('.workmobile1').attr('src', srcDisplay);
      

    });


    $(".selectwork ul li").mouseover(function () {

        $(this).find("img").toggleClass('rotate');

    });


    $(".selectwork ul li").mouseleave(function () {

        $(this).find("img").toggleClass('rotate');

    });

    $(".selectworkMobile ul li").mouseover(function () {

        $(this).find("img").toggleClass('rotate');

    });


    $(".selectworkMobile ul li").mouseleave(function () {

        $(this).find("img").toggleClass('rotate');

    });


    



});