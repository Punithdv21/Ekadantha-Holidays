// Selecting elements from the DOM
let formBtn = document.querySelector('#menu-bar');
let loginForm = document.querySelector('.nav');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.nav');
let imgBtns = document.querySelectorAll('.img-btn');
let imgSlider = document.querySelector('#img-slider');
let currentImgIndex = 0;

// Function to change the image in the slider
function changeImage() {
    // Get the next image index
    currentImgIndex = (currentImgIndex + 1) % imgBtns.length;
    // Get the source of the next image
    let src = imgBtns[currentImgIndex].getAttribute('data-src');
    // Change the source of the image in the slider
    imgSlider.src = src;
    // Remove the 'active' class from all image buttons
    imgBtns.forEach(btn => {
        btn.classList.remove('active');
    });
    // Add the 'active' class to the current image button
    imgBtns[currentImgIndex].classList.add('active');
}

// Automatically change the image every 3 seconds
setInterval(changeImage, 3000);

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
imgBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        currentImgIndex = index;
        let src = btn.getAttribute('data-src');
        imgSlider.src = src;
        imgBtns.forEach(btn => {
            btn.classList.remove('active');
        });
        btn.classList.add('active');
    });
});

// Initializing swiper for review slider
document.addEventListener('DOMContentLoaded', function () {
    var reviewSwiper = new Swiper(".review-slider", {
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
});
