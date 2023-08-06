/* eslint-disable implicit-arrow-linebreak */
const URL = () => 'https://httpbin.org/post';

const sendData = (onSuccessRequestSend, onFailureRequestSend, body) =>
  fetch(URL(), { method: 'POST', body })
    .then((response) => {
      const { ok } = response;

      if (!ok) {
        throw new Error('Ошибка');
      }

      return response;
    })
    .then(onSuccessRequestSend)
    .catch(onFailureRequestSend);

export { sendData };
