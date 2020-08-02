const errorCodes = {
  'auth/wrong-password': 'Contraseña inválida',
  'auth/user-not-found': 'Usuario no encontrado',
};

const errorMessageHandler = (code) => {
  if (errorCodes[code]) {
    return errorCodes[code];
  }
  return 'Hubo un error, intente de nuevo';
};

export const showErrorMessage = (code) => {
  const errorMessage = errorMessageHandler(code);
  const feedbackContainer = document.querySelector('.feedback-container');
  if (feedbackContainer) {
    feedbackContainer.querySelector('p').innerText = errorMessage;
    feedbackContainer.classList.add('feedback-container-shown');
  }
};

export const hideErrorMessage = () => {
  const feedbackContainer = document.querySelector('.feedback-container');
  if (feedbackContainer) {
    feedbackContainer.querySelector('p').innerText = '';
    feedbackContainer.classList.remove('feedback-container-shown');
  }
};

export const setFeedbackHidingHandler = () => {
  const feedbackContainer = document.querySelector('.feedback-container');
  if (feedbackContainer) {
    feedbackContainer.querySelector('button').addEventListener('click', hideErrorMessage);
  }
};
