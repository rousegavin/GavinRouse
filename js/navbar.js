window.onload = function () {

  var navbar = $('.navbar');
  var origOffsetY = navbar.offset().top;

  function scroll() {
    if ($(window).scrollTop() >= origOffsetY) {
      $('.navbar').addClass('sticky');
    } else {
      $('.navbar').removeClass('sticky');
    }


  }

  document.onscroll = scroll;

};