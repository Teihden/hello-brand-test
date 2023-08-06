/* eslint-disable no-use-before-define */
import { handleEscapeKey } from './utils.js';

const modalSuccessMessage = document.querySelector('#modal-success-message');
const modalFailureMessage = document.querySelector('#modal-failure-message');

const onDocumentKeydown = (evt) => handleEscapeKey(() => modalMessage.closeModalMessage(), evt);
const onModalMessageClick = () => modalMessage.closeModalMessage();
const onModalInnerClick = (evt) => evt.stopPropagation();

const modalMessage = {
  id: null,
  modalMessage: null,
  modalInner: null,

  closeModalMessage() {
    if (this.id) {
      clearTimeout(this.id);
    }

    this.modalMessage.classList.remove('modal-message--active');
    document.body.style.removeProperty('overflow');

    this.modalInner.removeEventListener('click', onModalInnerClick);
    this.modalMessage.removeEventListener('click', onModalMessageClick);
    document.removeEventListener('keydown', onDocumentKeydown, true);

    this.modalMessage = null;
    this.modalInner = null;
  },

  showModalMessage(type) {
    this.modalMessage = type === 'success' ? modalSuccessMessage : modalFailureMessage;
    this.modalInner = this.modalMessage.querySelector('[data-label="modal-inner"]');

    this.modalMessage.classList.add('modal-message--active');
    document.body.style.setProperty('overflow', 'hidden');

    this.modalInner.addEventListener('click', onModalInnerClick);
    this.modalMessage.addEventListener('click', onModalMessageClick);
    document.addEventListener('keydown', onDocumentKeydown, true);

    this.id = setTimeout(() => this.closeModalMessage(), 4000);
  },
};

const showModalMessage = modalMessage.showModalMessage.bind(modalMessage);

export { showModalMessage };
