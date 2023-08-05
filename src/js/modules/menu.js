/* eslint-disable no-use-before-define */
import { handleEscapeKey, handleEnterKey } from './utils.js';

const button = document.querySelector('#menu-button');
const mobileMenu = document.querySelector('#mobile-menu');

const onDocumentKeydown = (evt) => handleEscapeKey(closeMenu, evt);

const onButtonKeydown = (evt) => handleEnterKey(toggleMenu, evt);

function closeMenu() {
  button.classList.remove('menu-button--active');
  button.classList.add('menu-button--inactive');
  mobileMenu.style.setProperty('transform', 'translateX(-100%)');

  document.body.style.removeProperty('overflow');
  document.removeEventListener('keydown', onDocumentKeydown);

  setTimeout(() => mobileMenu.classList.remove('mobile-menu--active'), 600);
}

const openMenu = () => {
  button.classList.add('menu-button--active');
  button.classList.remove('menu-button--inactive');
  mobileMenu.classList.add('mobile-menu--active');

  document.body.style.setProperty('overflow', 'hidden');
  document.addEventListener('keydown', onDocumentKeydown);

  setTimeout(() => mobileMenu.style.setProperty('transform', 'translateX(0)'));
};

const toggleMenu = () => {
  if (button.classList.contains('menu-button--inactive')
    || !button.classList.contains('menu-button--active')) {
    openMenu();
  } else {
    closeMenu();
  }
};

const initMenu = () => {
  button.addEventListener('click', toggleMenu);
  button.addEventListener('keydown', onButtonKeydown);
};

export { initMenu };
