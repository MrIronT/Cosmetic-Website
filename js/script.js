let menuBtn = document.querySelector('#menu-btn');
let closeBtn = document.querySelector('#close-navbar');

let sideMenu = document.querySelector('.navbar');


// menuBtn.onclick = function() { 
//         if (sideMenu.style.left < 0 ) {
//             sideMenu.style.left = 0;}
// }

menuBtn.onclick = function() { 
    let computedStyle = window.getComputedStyle(sideMenu);
    let leftValue = parseFloat(computedStyle.left);

    if (leftValue < 0) {
        sideMenu.style.left = '0';
    } else if (leftValue == 0) {
        sideMenu.style.left = '-110%';
    }
};


// menuBtn.onclick = function() { 
//     let computedStyle = window.getComputedStyle(sideMenu);
//     if (computedStyle.display === "flex") {
//         sideMenu.style.display = "none";
//     } else if (computedStyle.display === "none") {
//         sideMenu.style.display = "flex";
//     }
// };

closeBtn.onclick = function() {  
    sideMenu.style.left = '-110%';
};