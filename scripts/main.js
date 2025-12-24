// navbar
var navB = document.getElementById("navbar");
var screenYOff = window.scrollY;
window.onscroll = function () {
  navB = document.getElementById("navbar");
  var currScrY = window.scrollY;
  if (screenYOff > currScrY) {
    navB.style.top = "0";
  } else {
    navB.style.top = "-68px";
  }
  screenYOff = currScrY;
};

document.addEventListener("DOMContentLoaded", function() {
    navB = document.getElementById("navbar");
    navB.style.position = "sticky"
});