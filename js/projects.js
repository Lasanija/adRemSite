const project1 = new Swiper(".project1", {
  // Optional parameters
  direction: "horizontal",
  loop: false,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination1",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next1",
    prevEl: ".swiper-button-prev1",
  },
});

const project2 = new Swiper(".project2", {
  // Optional parameters
  direction: "horizontal",
  loop: false,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination2",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next2",
    prevEl: ".swiper-button-prev2",
  },
});
const project3 = new Swiper(".project3", {
  // Optional parameters
  direction: "horizontal",
  loop: false,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination3",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next3",
    prevEl: ".swiper-button-prev3",
  },
});
const project4 = new Swiper(".project4", {
  // Optional parameters
  direction: "horizontal",
  loop: false,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination4",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next4",
    prevEl: ".swiper-button-prev4",
  },
});
const project5 = new Swiper(".project5", {
  // Optional parameters
  direction: "horizontal",
  loop: false,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination5",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next5",
    prevEl: ".swiper-button-prev5",
  },
});
//details about projects on click
let details = document.getElementById("details");
let detailsBtn = document.getElementById("details-btn");
detailsBtn.addEventListener("click", () => {
  details.classList.toggle("show-details");
});
let details2 = document.getElementById("details2");
let detailsBtn2 = document.getElementById("details-btn2");
detailsBtn2.addEventListener("click", () => {
  details2.classList.toggle("show-details");
});
let details3 = document.getElementById("details3");
let detailsBtn3 = document.getElementById("details-btn3");
detailsBtn3.addEventListener("click", () => {
  details3.classList.toggle("show-details");
});
let details4 = document.getElementById("details4");
let detailsBtn4 = document.getElementById("details-btn4");
detailsBtn4.addEventListener("click", () => {
  details4.classList.toggle("show-details");
});
let details5 = document.getElementById("details5");
let detailsBtn5 = document.getElementById("details-btn5");
detailsBtn5.addEventListener("click", () => {
  details5.classList.toggle("show-details");
});
//arrow up and down
const footer = document.getElementById("footer").offsetTop;
const navbar = document.getElementById("navbar").offsetTop;
const arrUpDown = document.getElementById("arr-up");
window.addEventListener("scroll", () => {
  if (scrollY > 0) arrUpDown.classList.add("arr-up");
  else arrUpDown.classList.remove("arr-up");
});
arrUpDown.addEventListener("click", () => {
  if (!arrUpDown.classList.contains("arr-up")) window.scrollTo({ top: footer, behavior: "smooth" });
  else window.scrollTo({ top: navbar, behavior: "smooth" });
});
