$(document).ready(function () {
  $(".selected-item").click(function () {
    $(".selected-item").removeClass("active");
    $(this).closest(".selected-item").addClass("active");
  });
});
