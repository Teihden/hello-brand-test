const isEscapeKey = (evt) => evt.key === 'Escape';

const isEnterKey = (evt) => evt.key === 'Enter';

const handleEscapeKey = (callback, evt) => {
  if (isEscapeKey(evt)) {
    evt.stopPropagation();
    evt.preventDefault();
    callback();
  }
};

const handleEnterKey = (callback, evt) => {
  if (isEnterKey(evt)) {
    evt.stopPropagation();
    evt.preventDefault();
    callback();
  }
};

export { handleEscapeKey, handleEnterKey };
