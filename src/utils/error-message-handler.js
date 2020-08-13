const errorCodes = {
  'auth/wrong-password': 'Contraseña inválida',
  'auth/user-not-found': 'Usuario no encontrado',
  'auth/email-not-verified': 'Valida tu correo para poder ingresar',
  'auth/email-already-in-use': 'El usuario ya existe',
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
    feedbackContainer.classList.add('feedback-container-shown', 'feedback-container-error');
  }
};
