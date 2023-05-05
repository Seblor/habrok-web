// tippy.js
tippy("[data-tippy-content]");

// aos.js
AOS.init({
  duration: 700,
  once: true
});

// navbar burger
document.addEventListener('DOMContentLoaded', () => {
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  if ($navbarBurgers.length > 0) {
    $navbarBurgers.forEach(el => {
      el.addEventListener('click', () => {
        const target = el.dataset.target;
        el.classList.toggle('is-active');
      });
    });
  }
});

document.querySelectorAll(".navbar-burger").forEach(el => {
  el.addEventListener("click", () => {
    document.querySelectorAll(".navbar-burger").forEach(burger => burger.classList.toggle("is-active"))

    document.querySelectorAll(".navbar-menu").forEach(menu => menu.classList.toggle("is-active"))
  });
})

// navbar on scroll
const nav = document.querySelector("nav");
const menu = document.querySelector(".navbar-menu");
const items = document.querySelectorAll(".navbar-item, .navbar-link");
const burger = document.querySelector(".navbar-burger");

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 700) {
    nav.classList.add("nav-w");
    menu.classList.add("nav-w");
    items.forEach(function (item) {
      item.classList.add("nav-dark");
    });
  } else {
    nav.classList.remove("nav-w");
    menu.classList.remove("nav-w");
    items.forEach(function (item) {
      item.classList.remove("nav-dark");
    });
  }
});

// back to top
const btn = document.querySelector("#backtotop");

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 100) {
    btn.classList.add("show");
  } else {
    btn.classList.remove("show");
  }
});

btn.addEventListener("click", function (e) {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// copyright year
document.getElementById("cp-year").innerHTML = new Date().getFullYear();