// Initialize AOS (Animate on Scroll) library
AOS.init({ 
  duration: 800, 
  once: true, 
  offset: 50 
});

// Mobile Menu Toggle Functionality
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  const navLinks = document.querySelectorAll('.nav-links a');

  // Toggle menu on hamburger icon click
  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      nav.classList.toggle('active');
    });
  }

  // Close menu when a navigation link is clicked
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (nav.classList.contains('active')) {
        nav.classList.remove('active');
      }
    });
  });
});