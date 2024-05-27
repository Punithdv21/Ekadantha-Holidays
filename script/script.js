document.addEventListener('DOMContentLoaded', () => {
    const menuBar = document.getElementById('menu-bar');
    const navbar = document.querySelector('header .navbar');
    const imgBtns = document.querySelectorAll('.img-btn');
    const imgSlider = document.getElementById('img-slider');
    let currentImgIndex = 0;
  
    // Function to change the image in the slider
    function changeImage() {
      currentImgIndex = (currentImgIndex + 1) % imgBtns.length;
      let src = imgBtns[currentImgIndex].getAttribute('data-src');
      imgSlider.src = src;
      imgBtns.forEach(btn => btn.classList.remove('active'));
      imgBtns[currentImgIndex].classList.add('active');
    }
  
    // Automatically change the image every 3 seconds
    setInterval(changeImage, 3000);
  
    // Toggle menu and display navigation links
    menuBar.addEventListener('click', () => {
      menuBar.classList.toggle('fa-times');
      navbar.classList.toggle('active');
    });
  
    // Change image on button click
    imgBtns.forEach((btn, index) => {
      btn.addEventListener('click', () => {
        currentImgIndex = index;
        let src = btn.getAttribute('data-src');
        imgSlider.src = src;
        imgBtns.forEach(btn => btn.classList.remove('active'));
        btn.classList.add('active');
      });
    });
  
    // Initialize Swiper for review slider
    new Swiper(".review-slider", {
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
  
    // Close menu when clicking outside of it
    document.addEventListener('click', (e) => {
      if (!e.target.closest('header')) {
        menuBar.classList.remove('fa-times');
        navbar.classList.remove('active');
      }
    });
  
    // Close menu on clicking a link
    document.querySelectorAll('header .navbar a').forEach(link => {
      link.addEventListener('click', () => {
        menuBar.classList.remove('fa-times');
        navbar.classList.remove('active');
      });
    });
  });
  