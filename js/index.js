/* mouse back move */
var lFollowX = 0,
  lFollowY = 0,
  x = 0,
  y = 0,
  friction = 1 / 40;

function moveBackground() {
  x += (lFollowX - x) * friction;
  y += (lFollowY - y) * friction;

  translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)';

  $('.backgroundImage').css({
    '-webit-transform': translate,
    '-moz-transform': translate,
    'transform': translate
  });



  window.requestAnimationFrame(moveBackground);
}

$(window).on('mousemove click', function (e) {

  var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
  var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
  lFollowX = (10 * lMouseX) / 90; // 100 : 12 = lMouxeX : lFollow
  lFollowY = (10 * lMouseY) / 90;

});

moveBackground();
$(document).ready(function () {
  AOS.init();



  /* animations */
  $("#headname").mouseenter(function () {
    $(this).animate({ "letter-spacing": ".5vw" }, 1200);
    $(this).animate({ "letter-spacing": "0vw" }, 1200);

  });

  /* skill animation
   */
  $(".skillsvg").on("click", function () {
    var skillShow = $(this).find('#path815');

    $(skillShow).animate({ "stroke-dashoffset": "400" }, 1000
    );
    $(skillShow).animate({ "stroke-dashoffset": "140" }, 1111
    );
  });

  /*   scroll events */
  $('.navcontent').click(function (e) {
    var targetHref = $(e.target).attr('href');
    $('html, body').animate({
      scrollTop: $(targetHref).offset().top-50
    },1000);
   e.preventDefault();
  });

  $("#headname").on("click", function (e) {

    $('html, body').animate({
      scrollTop: 0
    },1000);
   e.preventDefault();

  });

  $(window).scroll(function () {
    let scrollh = $(this).scrollTop();
    let navheight = $('.navbar').height(),
    totalHeight=$('body').height();
console.log(scrollh)

    /* parallax */
  
    if (scrollh* 1.201 <2300){
    $('.backgroundImage2 ').css('top', (scrollh * 1.201) + 'px');
    }else{ $('.backgroundImage2 ').css('top', 2500 + 'px');
  };
    /*   scroll navbar */

    if (scrollh > navheight) {

      $('.navbar').css('background-image', ' linear-gradient(rgba(119, 119, 119, 1),rgba(119, 119, 119, 0.9),rgba(119, 119, 119, 0.8) ,rgba(119, 119, 119, 0))');


    } else {
      $('.navbar').css('background', 'rgba(119, 119, 119, 0)');

    }
  });


});
