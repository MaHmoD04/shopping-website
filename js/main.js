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

// Scroll Reveal
ScrollReveal().reveal('.circle', {
  delay: 450,
    distance: '350px'
});
ScrollReveal().reveal('.circle-1', {
  duration: 200
});
ScrollReveal().reveal('.circle-2', {
  duration: 400
});
ScrollReveal().reveal('.circle-3', {
  duration: 600
});

// AOS 
AOS.init();
//start values
AOS.init({
  dispaly: true,
  startEvent: 'DOMContentLoaded',
  initClassName: 'aos-init',
  
});