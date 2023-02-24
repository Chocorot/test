const menuToggle = document.querySelector('.burger');
const menu = document.querySelector('.nav-links');

menuToggle.addEventListener('click', function() {
  menu.classList.toggle('show-nav-links');
});