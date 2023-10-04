let menuBtn = document.querySelector('#menu-btn');
let closeBtn = document.querySelector('#close-navbar');
let navbar = document.querySelector('.navbar');


menuBtn.onclick = () => {
    navbar.classList.toggle('active')
}

// menuBtn.onclick = function() { 
//     let computedStyle = window.getComputedStyle(navbar);
//     let leftValue = parseFloat(computedStyle.left);

//     if (leftValue < 0) {
//         navbar.style.left = '0';
//     } else if (leftValue == 0) {
//         navbar.style.left = '-110%';
//     }
// };

closeBtn.onclick = function() {  
    navbar.classList.remove('active')
};

22:07