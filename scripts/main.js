// navbar
const navB = document.getElementById("navbar");
let screenYOff = window.scrollY;
window.onscroll = function () {
  const navB = document.getElementById("navbar");
  let currScrY = window.scrollY;
  if (screenYOff > currScrY) {
    navB.style.top = "0";
  } else {
    navB.style.top = "-68px";
  }
  screenYOff = currScrY;
};

document.addEventListener("DOMContentLoaded", function() {
    const navB = document.getElementById("navbar");
    navB.style.position = "sticky"
});
