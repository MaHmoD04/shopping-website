const btnTop = document.querySelector(".top-btn");

window.onscroll = function () {
  this.scrollY >= 150
    ? btnTop.classList.add("show")
    : btnTop.classList.remove("show");
};
btnTop.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// GSAP
gsap.to(".arrivals", {
  scrollTrigger: ".box", // start the animation when ".box" enters the viewport (once)
  x: -100,
});
