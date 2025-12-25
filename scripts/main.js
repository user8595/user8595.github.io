// navbar
document.addEventListener("DOMContentLoaded", () => {
  const navB = document.getElementById("navbar");
  let screenYOff = window.scrollY;
  let navDelay = false;
  document.addEventListener("scroll", () => {
    const navB = document.getElementById("navbar");
    const navBox = navB.getBoundingClientRect();
    let navH = navBox.height;
    let currScrY = window.scrollY;
    if (!navDelay) {
      // delay on scroll
      setTimeout(() => {
        if (screenYOff > currScrY) {
          navB.style.top = "0";
        } else {
          navB.style.top = `-${navH}px`;
        }
        screenYOff = currScrY;
        navDelay = false;
      }, 45);
      navDelay = true;
    }
  });
  navB.style.position = "sticky";
});
