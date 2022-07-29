// Navbar JS

const hamburger = document.querySelector(".hamburger");
const linksBtns = document.querySelector(".links-btns");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  linksBtns.classList.toggle("active");
});
