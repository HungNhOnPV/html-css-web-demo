$(function () {
  $(window).scroll(function () {
    if ($("body").scrollTop() > 100) {
      $(".logo").addClass("orange");
      $(".navbar")
        .addClass("backgroundWhite")
        .removeClass("navbar-dark")
        .addClass("navbar-light");
    } else {
      $(".logo").removeClass("orange");
      $(".navbar")
        .removeClass("backgroundWhite")
        .addClass("navbar-dark")
        .removeClass("navbar-light");
    }
  });
});
