/* eslint-disable no-use-before-define */
import { handleEscapeKey, handleEnterKey } from './utils.js';

const menuButton = document.querySelector('#menu-button');
const mobileMenu = document.querySelector('#mobile-menu');

const onDocumentKeydown = (evt) => handleEscapeKey(closeMenu, evt);
const onButtonKeydown = (evt) => handleEnterKey(toggleMenu, evt);
const onMobileMenuClick = (evt) => {
  const { target } = evt;

  if (target.tagName === 'A' && target.href) {
    closeMenu();
  }
};

function closeMenu() {
  menuButton.classList.remove('menu-button--active');
  menuButton.classList.add('menu-button--inactive');
  mobileMenu.style.setProperty('transform', 'translateX(-100%)');

  document.body.style.removeProperty('overflow');
  document.removeEventListener('keydown', onDocumentKeydown);

  setTimeout(() => mobileMenu.classList.remove('mobile-menu--active'), 600);
}

const openMenu = () => {
  menuButton.classList.add('menu-button--active');
  menuButton.classList.remove('menu-button--inactive');
  mobileMenu.classList.add('mobile-menu--active');
  document.body.style.setProperty('overflow', 'hidden');

  document.addEventListener('keydown', onDocumentKeydown);
  mobileMenu.addEventListener('click', onMobileMenuClick);

  setTimeout(() => mobileMenu.style.setProperty('transform', 'translateX(0)'));
};

const toggleMenu = () => {
  if (menuButton.classList.contains('menu-button--inactive')
    || !menuButton.classList.contains('menu-button--active')) {
    openMenu();
  } else {
    closeMenu();
  }
};

const initMenu = () => {
  menuButton.addEventListener('click', toggleMenu);
  menuButton.addEventListener('keydown', onButtonKeydown);
};

export { initMenu };
