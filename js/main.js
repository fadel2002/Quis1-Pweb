var mainRoute = ["/quis1", "/quis1/profile", "/quis1/hometown", "/quis1/tourist", "/quis1/food"];

isMainRoute = (str) => {
  for (let i = 0; i < mainRoute.length; i++) {
    if (mainRoute[i] == str) {
      return true;
    }
  }
  return false;
};

var blueFooterRoute = ["/quis1/profile/more-about", "/quis1/profile", "/quis1", "/"];

isBlueFooter = (str) => {
  for (let i = 0; i < blueFooterRoute.length; i++) {
    if (blueFooterRoute[i] == str) {
      return true;
    }
  }
  return false;
};

// console.log(isMainRoute(window.location.pathname));

// "/quis1": "/pages/home.html",
// "/quis1/profile": "/pages/profile/index.html",
// "/quis1/profile/more-about": "/pages/profile/moreAbout.html",
// "/quis1/hometown": "/pages/hometown.html",
// "/quis1/food": "/pages/food.html",
// "/quis1/tourist": "/pages/tourist.html",

$(document).ready(function () {
  if (window.location.pathname.includes("profile")) {
    $(".profile").addClass("active");
  } else if (window.location.pathname.includes("hometown")) {
    $(".hometown").addClass("active");
  } else if (window.location.pathname.includes("food")) {
    $(".food").addClass("active");
  } else if (window.location.pathname.includes("tourist")) {
    $(".tourist").addClass("active");
  } else {
    $(".home").addClass("active");
  }

  if (isBlueFooter(window.location.pathname)) {
    $(".footer").addClass("blue-footer");
  }
  $(".btn-close-alert").click(function () {
    $(".kirim-sukses-alert").addClass("d-none");
  });
  // $(".selected-item").click(function () {
  //   $(".selected-item").removeClass("active");
  //   $(this).closest(".selected-item").addClass("active");
  // });
  // $(".return-item").on("click", function () {
  //   $(".return-item").addClass("d-none");
  // });
});

// $(document).bind("click", function () {
//   if (isMainRoute(window.location.pathname) && !$(".return-item").hasClass("d-none")) {
//     $(".return-item").addClass("d-none");
//   }
//   if (!isMainRoute(window.location.pathname) && $(".return-item").hasClass("d-none")) {
//     $(".return-item").removeClass("d-none");
//   }
// });
