"use strict";

const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toogle");
const navClose = document.getElementById("nav-close");

// show navbar
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show_menu");
  });
}
// close navbar
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show_menu");
  });
}

// remove menu from mobile
const navLinks = document.querySelectorAll(".nav_link");
const linkAction = () => {
  navMenu.classList.remove("show_menu");
};
navLinks.forEach((navLink) => navLink.addEventListener("click", linkAction));

// swiper sneakers
let swiperImages = new Swiper(".home_swiper", {
  loop: true,
  spaceBetween: 64,
  grabCursor: true,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
let swiperTittles = new Swiper(".home_titles", {
  loop: true,
  spaceBetween: 64,
  grabCursor: true,
  centeredSlides: true,
});
swiperImages.controller.control = swiperTittles;
swiperTittles.controller.control = swiperImages;
