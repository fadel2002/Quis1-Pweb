const animationInterval = setInterval(animation, 200);

function animation() {
  if (document.readyState === "complete") {
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
          // console.log(entry.target);
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

    clearInterval(animationInterval);
  }
}
