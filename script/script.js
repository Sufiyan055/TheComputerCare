let slider = document.querySelector(".slider .list");
let items = document.querySelectorAll(".slider .list .item");
let next = document.getElementById("next");
let prev = document.getElementById("prev");
let dots = document.querySelectorAll(".slider .dots li");

let lengthItems = items.length - 1;
let active = 0;
next.onclick = function () {
  active = active + 1 <= lengthItems ? active + 1 : 0;
  reloadSlider();
};
prev.onclick = function () {
  active = active - 1 >= 0 ? active - 1 : lengthItems;
  reloadSlider();
};
let refreshInterval = setInterval(() => {
  next.click();
}, 3000);
function reloadSlider() {
  slider.style.left = -items[active].offsetLeft + "px";
  //
  let last_active_dot = document.querySelector(".slider .dots li.active");
  last_active_dot.classList.remove("active");
  dots[active].classList.add("active");

  clearInterval(refreshInterval);
  refreshInterval = setInterval(() => {
    next.click();
  }, 5000);
}

dots.forEach((li, key) => {
  li.addEventListener("click", () => {
    active = key;
    reloadSlider();
  });
});
window.onresize = function (event) {
  reloadSlider();
};

const testinomials = [
  {
    name: "Shivshankar Jaiswar",
    image: "images/customer1.png",
    testinomial: ` Good service, Had taken my old Dell laptop and they did a good quick job, They are reliable & trust worthy. Highly recommended Thank you guys 👍`,
  },
  {
    name: "Shahzad Shaikh",
    image: "images/customer2.png",
    testinomial:
      "Quick and efficient laptop repair, excellent customer service.",
  },
  {
    name: "Manikant Shukla",
    image: "images/customer3.png",
    testinomial: `Great service provided by laptop point,
Minimum charge awesome services.`,
  },
  {
    name: "Yogesh Girase",
    image: "images/customer4.png",
    testinomial:
      " Excellent service at a reasonable price. Highly recommended for getting your laptop fixed.",
  },
];

let i = 0;

let j = testinomials.length;

let testinomialContainer = document.getElementById("review");
let nextBtn = document.getElementById("reviewnextBtn");
let prevBtn = document.getElementById("reviewprevBtn");

nextBtn.addEventListener("click", () => {
  i = (j + i + 1) % j;
  displayTestimnial();
});

prevBtn.addEventListener("click", () => {
  i = (j + i - 1) % j;
  displayTestimnial();
});

let displayTestimnial = () => {
  testinomialContainer.innerHTML = `
    <div class="peopleImg"> 
    <img src=${testinomials[i].image}>
    </div>
    <span>${testinomials[i].name}</span>
    <div class="star">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
    <p>${testinomials[i].testinomial}</p>
      `;
};

displayTestimnial();
