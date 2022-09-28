// const myTimeout = setTimeout(animation, 200);

// function animation() {
//   if ($(".fade-in").size() || $(".slide-in").size()) {
//     window.requestAnimationFrame(animation);
//   } else {

//   }
// }

// const observer = new MutationObserver(function () {
//   console.log(document.getElementsByClassName(".fade-in"));
//   if (document.getElementById(".fade-in") && document.getElementsByClassName(".slide-in")) {
//     const faders = document.querySelectorAll(".fade-in");
//     const sliders = document.querySelectorAll(".slide-in");
//     //   console.log(faders);

//     const appearOptions = {
//       threshold: 0,
//       rootMargin: "0px 0px -150px 0px",
//     };

//     const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
//       entries.forEach((entry) => {
//         if (!entry.isIntersecting) {
//           return;
//         } else {
//           console.log(entry.target);
//           entry.target.classList.add("appear");
//           if (entry.target.classList.contains("no-card")) {
//             entry.target.classList.add("card");
//           }

//           appearOnScroll.unobserve(entry.target);
//         }
//       });
//     }, appearOptions);

//     faders.forEach((fader) => {
//       appearOnScroll.observe(fader);
//     });

//     sliders.forEach((slider) => {
//       appearOnScroll.observe(slider);
//     });

//     console.log("tes");
//     observer.disconnect();
//   }
// });

// const target = document.querySelector("body");

// const config = { childList: true };

// observer.observe(target, config);

window.addEventListener("load", function () {
  const faders = document.querySelectorAll(".fade-in");
  const sliders = document.querySelectorAll(".slide-in");
  //   console.log(faders);

  const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -150px 0px",
  };

  const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      } else {
        console.log(entry.target);
        entry.target.classList.add("appear");
        if (entry.target.classList.contains("no-card")) {
          entry.target.classList.add("card");
        }

        appearOnScroll.unobserve(entry.target);
      }
    });
  }, appearOptions);

  faders.forEach((fader) => {
    appearOnScroll.observe(fader);
  });

  sliders.forEach((slider) => {
    appearOnScroll.observe(slider);
  });
});
