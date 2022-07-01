const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: false,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
//arrow up and down
const footer = document.getElementById("footer").offsetTop;
const navbar = document.getElementById("navbar").offsetTop;
const arrUpDown = document.getElementById("arr-up");
window.addEventListener("scroll", () => {
  if (scrollY > 0)arrUpDown.classList.add("arr-up");
  else arrUpDown.classList.remove("arr-up");
});
arrUpDown.addEventListener("click", () => {
  if (!arrUpDown.classList.contains("arr-up")) window.scrollTo({ top: footer, behavior: "smooth" });
  else window.scrollTo({ top: navbar, behavior: "smooth" });
});
//burger menu
let burger = document.getElementById("burger");
let menu = document.getElementById("menu");
burger.addEventListener("click", () => {
  //change burger on cross
  burger.classList.toggle("burger-on-cross");
  //show and close menu
  menu.classList.toggle("burger-menu-active");
  //remove activ class of <a> when burger menu are closed
  menu.querySelector("a.active")?.classList.remove("active");
});
// add active class to <a> on click
menu.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", (e) => {
    e.preventDefault()
    menu.querySelector("a.active")?.classList.remove("active");
    a.classList.add("active");
    let href = a.getAttribute('href').slice(1)
    let el = document.getElementById(href)
    let top = el.offsetTop;
    window.scrollTo({ top:top, behavior: "smooth" });
  })})
//send request button
const contacts = document.getElementById('contacts').offsetTop
document.getElementById('request').addEventListener('click', ()=>{
  window.scrollTo({top:contacts, behavior:"smooth"})
})
document.getElementById('consult').addEventListener('click', ()=>{
  window.scrollTo({top:contacts, behavior:"smooth"})
})
