$(document).ready(function () {
  $("#HumberMenu").click(function (e) {
    e.preventDefault();
    $(".NavbarBottom").toggleClass("flex");
    $("#HumberMenu").toggleClass("hovered");
  });
});
