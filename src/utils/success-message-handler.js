const successCode = {
  'auth/user-registered': 'Revisa tu correo para continuar',
};

const successMessageHandler = (code) => {
  if (successCode[code]) {
    return successCode[code];
  }
  return 'Listo!';
};


export const showSuccessMessage = (code) => {
  const successMessage = successMessageHandler(code);
  const feedbackContainer = document.querySelector('.feedback-container');
  if (feedbackContainer) {
    feedbackContainer.querySelector('p').innerText = successMessage;
    feedbackContainer.classList.add('feedback-container-shown', 'feedback-container-success');
  }
};
