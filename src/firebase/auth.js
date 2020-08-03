import { auth, provider } from './init';
import { showErrorMessage } from '../utils/error-message-handler';
import { showSuccessMessage } from '../utils/success-message-handler';


// valida si hay una sesion
export const validateSession = () => {
  if (['#/', '#/login', '#/sign-up'].includes(window.location.hash)) {
    return;
  }
  const session = localStorage.getItem('session');
  if (!session || !JSON.parse(session).user) {
    window.location.href = '#/login';
  }
};

// Registro con correo y contraseña
export const createUserByEmailAndPass = (email, password) => {
  auth
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      userCredential.user.sendEmailVerification()
        .then(() => {
          showSuccessMessage('auth/user-registered');
        })
        .catch((error) => {
          showErrorMessage(error.code);
          throw error;
        });
    })
    .catch((error) => {
      showErrorMessage(error.code);
      throw error;
    });
};

// Inicio de sesion
export const loginUser = (email, password) => auth
  .signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    if (userCredential.user.emailVerified) {
      localStorage.setItem('session', JSON.stringify(userCredential));
      window.location.href = '#/timeline';
    } else {
      showErrorMessage('auth/email-not-verified');
    }
  })
  .catch((error) => {
    showErrorMessage(error.code);
    throw error;
  });


// Inicio de Sesion Google
export const loginUserGoogle = () => {
  auth.signInWithPopup(provider).then((res) => {
    localStorage.setItem('session', JSON.stringify(res));
    window.location.href = '#/timeline';
  }).catch((error) => {
    showErrorMessage(error.code);
    throw error;
  });
};
