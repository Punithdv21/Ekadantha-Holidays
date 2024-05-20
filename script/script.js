// Selecting elements from the DOM
let formBtn = document.querySelector('#menu-bar');
let loginForm = document.querySelector('.nav');
let formClose = null; // No form-close element found in the provided HTML
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.nav');
let imgBtns = document.querySelectorAll('.img-btn');

// Handling scroll event to close menu and login form
window.addEventListener('scroll', () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
});

// Adding click event listener to toggle menu
menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

// Adding click event listener to image buttons to change slider image
imgBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        let activeBtn = document.querySelector('.img-btn.active');
        activeBtn.classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('.img-container img').src = src;
    });
});

// Initializing swiper for review slider
var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});
