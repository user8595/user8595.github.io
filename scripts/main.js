// navbar
document.addEventListener("DOMContentLoaded", () => {
  const navB = document.getElementById("navbar");
  let screenYOff = window.scrollY;
  document.addEventListener("scroll", () => {
    const navB = document.getElementById("navbar");
    const navBox = navB.getBoundingClientRect();
    let navH = navBox.height;
    let currScrY = window.scrollY;
    // delay on scroll
    setTimeout(() => {
      if (screenYOff > currScrY) {
        navB.style.top = "0";
      } else {
        navB.style.top = `-${navH}px`;
      }
      screenYOff = currScrY;
    }, 175);
  });
  navB.style.position = "sticky";
});
