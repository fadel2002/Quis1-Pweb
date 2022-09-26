var mainRoute = ["/quis1", "/quis1/profile", "/quis1/hometown", "/quis1/tourist", "/quis1/food"];

isMainRoute = (str) => {
  for (let i = 0; i < mainRoute.length; i++) {
    if (mainRoute[i] == str) {
      return true;
    }
  }
  return false;
};

// console.log(isMainRoute(window.location.pathname));

$(document).ready(function () {
  $(".selected-item").click(function () {
    $(".selected-item").removeClass("active");
    $(this).closest(".selected-item").addClass("active");
  });

  $(".return-item").on("click", function () {
    $(".return-item").addClass("d-none");
  });
});

$(document).bind("click", function () {
  if (isMainRoute(window.location.pathname) && !$(".return-item").hasClass("d-none")) {
    $(".return-item").addClass("d-none");
  }
  if (!isMainRoute(window.location.pathname) && $(".return-item").hasClass("d-none")) {
    $(".return-item").removeClass("d-none");
  }
});
