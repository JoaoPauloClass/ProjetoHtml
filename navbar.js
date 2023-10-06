document.addEventListener('DOMContentLoaded', function () {
    const mobileMenu = document.querySelector(".mobile-menu");
    const nav = document.querySelector(".nav-header");
  
    mobileMenu.addEventListener('click', () => {
      nav.classList.toggle("active");
    });
  });
  