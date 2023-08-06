/* eslint-disable no-use-before-define */
import { handleEscapeKey, handleEnterKey } from './utils.js';

const openModalFormButton = document.querySelector('#open-modal-form-button');
const modalForm = document.querySelector('#modal-form');
const modalInner = modalForm.querySelector('[data-label="modal-inner"]');
const closeModalFormButton = modalForm.querySelector('[data-label="close-modal-form-button"]');

const onDocumentKeydown = (evt) => handleEscapeKey(closeModalForm, evt);
const onOpenModalFormButtonKeydown = (evt) => handleEnterKey(openModalForm, evt);
const onCloseModalFormButtonKeydown = (evt) => handleEnterKey(closeModalForm, evt);
const onModalInnerClick = (evt) => evt.stopPropagation();

function closeModalForm() {
  modalForm.classList.remove('modal-form--active');
  document.body.style.removeProperty('overflow');
  document.removeEventListener('keydown', onDocumentKeydown);
}

function openModalForm() {
  modalForm.classList.add('modal-form--active');
  document.body.style.setProperty('overflow', 'hidden');
  document.addEventListener('keydown', onDocumentKeydown);
}

const initModalForm = () => {
  openModalFormButton.addEventListener('click', openModalForm);
  openModalFormButton.addEventListener('keydown', onOpenModalFormButtonKeydown);

  closeModalFormButton.addEventListener('click', closeModalForm);
  closeModalFormButton.addEventListener('keydown', onCloseModalFormButtonKeydown);

  modalInner.addEventListener('click', onModalInnerClick);
  modalForm.addEventListener('click', closeModalForm);
};

export { initModalForm, closeModalForm };
