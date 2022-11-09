const burger = document.getElementById('burger');
let navLinks = document.getElementById('nav-links');

const toggleNav = () => {
  if (navLinks.className === 'nav-links') {
    navLinks.className = 'nav-links-show';
  } else {
    navLinks.className = 'nav-links';
  }
};

burger.addEventListener('click', toggleNav);
