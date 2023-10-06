let menuBtn = document.querySelector('#menu-btn');
let closeBtn = document.querySelector('#close-navbar');
let navbar = document.querySelector('.navbar');
let searchBtn = document.querySelector('#search-btn');
let searchForm = document.querySelector('.search-form');



menuBtn.onclick = () => {
    navbar.classList.toggle('active');
};

closeBtn.onclick = () => {  
    navbar.classList.remove('active');
};

searchBtn.onclick = () => {
    searchForm.classList.toggle('active');
};

document.querySelector('html').onscroll = () => {
    console.log("Scrolling");
    searchForm.classList.remove('active');
    navbar.classList.remove('active');
};

let slides = document.querySelectorAll('.home .slide');
let index = 0;

function next(){
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}

var swiper = new Swiper(".products-slider", {
    slidesPerView: 3,
    spaceBetween: 20,
    centeredSlides: false,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

 
// menuBtn.onclick = function() { 
//     let computedStyle = window.getComputedStyle(navbar);
//     let leftValue = parseFloat(computedStyle.left);

//     if (leftValue < 0) {
//         navbar.style.left = '0';
//     } else if (leftValue == 0) {
//         navbar.style.left = '-110%';
//     }
// };