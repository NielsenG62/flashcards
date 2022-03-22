$(document).ready(function () {
  $("button").click(function () {
    $(this).next("p").toggleClass("hidden");
  });
});
