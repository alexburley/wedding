$(function () {
  $(document).scroll(function () {
    var $nav = $(".sticky-header");
    var $banner = $(".banner");
    $nav.toggleClass(
      "scrolled",
      $(this).scrollTop() > $nav.height() + $banner.height()
    );
  });
});
