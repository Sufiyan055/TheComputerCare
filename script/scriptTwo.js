let ulBar = document.querySelector(".ulBar");
let menuToggle = document.querySelector(".menuToggle");
let gotoTop = document.querySelector(".gotoTop");
let pureNavbar = document.querySelector(".pureNavbar");
let LogoNameImg = document.querySelector(".LogoNameImg");

const navMainBarDisplay = () => {
  if (window.scrollY >= 500) {
    pureNavbar.style.position = "fixed";
    pureNavbar.style.width = "100%";
    pureNavbar.style.top = "0px";
    pureNavbar.style.background = "#fff";
    pureNavbar.style.padding = "8px 30px";
  } else {
    pureNavbar.style.position = "relative";
    pureNavbar.style.padding = "5px 30px";
  }
};

window.addEventListener("scroll", navMainBarDisplay);

toggleNav = () => {
  ulBar.classList.toggle("ulBarActive");
  menuToggle.classList.toggle("active");
  document.body.classList.toggle("hideScrollbar");
  LogoNameImg.classList.toggle("borderforLogoNameImg");
};

function BacktoTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

window.onscroll = function () {
  scrollForTopBtn();
};

const scrollForTopBtn = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    gotoTop.style.display = "block";
  } else {
    gotoTop.style.display = "none";
  }
};
