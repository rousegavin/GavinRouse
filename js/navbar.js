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

// NOT WORKING RIGHT NOW
// $(window).scroll(function () {
//   var position = $(this).scrollTop();

//   $('.section').each(function () {
//     var target = $(this).offset().top;
//     var id = $(this).attr('id');

//     if (position >= target) {
//       $('.nav-link').removeClass('active');
//       $('.nav-link[href=#' + id + ']').addClass('active');
//     }
//   });
// });