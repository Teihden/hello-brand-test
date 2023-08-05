const button = document.querySelector('.menu-button'); // id или data-*
const mobileMenu = document.querySelector('.mobile-menu'); // id или data-*

button.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'instant',
  });
  button.classList.toggle('menu-button--active');
  mobileMenu.classList.toggle('mobile-menu--active');

  document.body.style.setProperty('overflow', 'hidden');
  setTimeout(() => mobileMenu.style.setProperty('transform', 'translateX(0)'));
});
