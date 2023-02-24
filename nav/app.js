const navbarToggle = document.querySelector('.navbar-toggle');
const navbarNav = document.querySelector('.navbar-nav');

navbarToggle.addEventListener('click', function() {
  navbarToggle.classList.toggle('active');
  navbarNav.classList.toggle('active');
});
