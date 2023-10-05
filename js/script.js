let menuBtn = document.querySelector('#menu-btn');
let closeBtn = document.querySelector('#close-navbar');
let navbar = document.querySelector('.navbar');
let searchBtn = document.querySelector('#search-btn');
let searchForm = document.querySelector('.search-form')

menuBtn.onclick = () => {
    navbar.classList.toggle('active')
}

searchBtn.onclick = () => {
    searchForm.classList.toggle('active')
}

closeBtn.onclick = () => {  
    navbar.classList.remove('active')
};


document.querySelector('html').onscroll = () => {
    console.log("Scrolling")
    searchForm.classList.remove('active');
    navbar.classList.remove('active')
};



// menuBtn.onclick = function() { 
//     let computedStyle = window.getComputedStyle(navbar);
//     let leftValue = parseFloat(computedStyle.left);

//     if (leftValue < 0) {
//         navbar.style.left = '0';
//     } else if (leftValue == 0) {
//         navbar.style.left = '-110%';
//     }
// };