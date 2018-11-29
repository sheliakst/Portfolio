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
  $(this).scrollTop(0);





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
  $('.navcontent ').click(function (e) {
    var targetHref = $(e.target).attr('href');
    $('html, body').animate({
      scrollTop: $(targetHref).offset().top - 150
    }, 1000);
    e.preventDefault();
  });


  $('.scorllNav ').click(function (e) {
    var targetHref = $(e.target).attr('href');
    $('html, body').animate({
      scrollTop: $(targetHref).offset().top - 180
    }, 1000);
    e.preventDefault();
  });



  $("#headname").on("click", function (e) {

    $('html, body').animate({
      scrollTop: 0
    }, 1000);
    e.preventDefault();

  });

  $(window).scroll(function () {
    let scrollh = $(this).scrollTop();
    let navheight = $('.navbar').height(),
      totalHeight = $('body').height();
    /* parallax */

    if (scrollh * 1.201 < 1400) {
      $('.backgroundImage2 ').css('top', (scrollh * 1.201) + 'px');
    } else {
      $('.backgroundImage2 ').css({ 'top': 1400 + 'px', 'position': 'fixed' });
    };
    /*   scroll navbar */

    if (scrollh > navheight) {

      $('.navbar').css('display', 'none');
      $('.addNav').css('display', 'block');

    } else {
      $('.navbar').css('display', 'block');
      $('.addNav').css('display', 'none');
      $('.scorllNav').css('visibility', 'hidden');
      $("#middleline").removeClass("opacityZero");
      $("#topline").removeClass("animTopBar");
      $("#bottomline").removeClass("animBottomBar");
      $(".addNav").removeClass("addNavBackground");
      $("#navicon").removeClass("animateSvgNav");
    };
  });


  $("#navicon").click(function () {
    if ($('.scorllNav').css('visibility') == 'hidden') {
      $('.scorllNav').css('visibility', 'visible');

    } else {

      $('.scorllNav').css('visibility', 'hidden');

    };
    $("#middleline").toggleClass("opacityZero");
    $("#topline").toggleClass("animTopBar");
    $("#bottomline").toggleClass("animBottomBar");
    $(".addNav").toggleClass("addNavBackground");
    $("#navicon").toggleClass("animateSvgNav");



    $(".scorllNav li a").animate({
      opacity: 0.9
    }, 500);
  });








});
