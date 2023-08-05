import { initMenu } from './modules/menu.js';

const contactsForm = document.querySelector('#contacts-form');

initMenu();

contactsForm.addEventListener('submit', (evt) => evt.preventDefault());
