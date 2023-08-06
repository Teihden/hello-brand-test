/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-param-reassign */
import { sendData } from './http.js';
import { closeModalForm } from './modal-form.js';
import { showModalMessage } from './modal-message.js';

const forms = document.querySelectorAll('[data-label="form"]');

const SubmitButtonText = {
  IDLE: 'Send',
  SUBMITTING: 'Sending...',
};

const switchSubmitButtonState = (state, text, submitButton) => {
  submitButton.disabled = state;
  submitButton.textContent = text;
};

const onSuccessRequestSend = (form) => {
  if (form.id === 'modal-form') {
    closeModalForm();
  }
  form.reset();

  showModalMessage('success');
};

const onFailureRequestSend = () => showModalMessage('failure');

const sendFormData = (form, data) =>
  sendData(() => onSuccessRequestSend(form), onFailureRequestSend, data);

const createFormData = (targetForm) => {
  const data = new FormData(targetForm);
  [...data.entries()].forEach(([key, value]) => data.set(key, value.trim()));

  return data;
};

const onFormSubmit = async (evt) => {
  const form = evt.target;
  evt.preventDefault();

  if (form.checkValidity()) {
    const submitButton = form.querySelector('[data-label="submit-button"]');

    switchSubmitButtonState(true, SubmitButtonText.SUBMITTING, submitButton);

    const data = createFormData(form);
    await sendFormData(form, data);

    switchSubmitButtonState(false, SubmitButtonText.IDLE, submitButton);
  }
};

const initForms = () => {
  forms.forEach((form) => form.addEventListener('submit', onFormSubmit));
};

export { initForms };
