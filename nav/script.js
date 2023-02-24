const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

function toggleNav() {
  nav.classList.toggle('nav-active');
  burger.classList.toggle('toggle');
}

burger.addEventListener('click', toggleNav);

const navLinks = document.querySelectorAll('.nav-links li');

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('nav-active');
    burger.classList.remove('toggle');
  });
});
