import { auth, provider, database } from './init';
import { saveUser } from './database';
import { showErrorMessage } from '../utils/error-message-handler';
import { showSuccessMessage } from '../utils/success-message-handler';


// valida si hay una sesion
export const validateSession = () => {
  if (['#/', '#/login', '#/sign-up'].includes(window.location.hash)) {
    return;
  }
  const session = localStorage.getItem('session');
  if (!session || !JSON.parse(session).user) {
    window.location.href = 'http://localhost:8080/#/login';
  }
};

// Registro con correo y contraseña
export const createUserByEmailAndPass = (email, password, city, username) => {
  const config = {
    url: 'http://localhost:8080/#/login',
  };
  auth
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      userCredential.user.updateProfile({
        displayName: username,
      });
      userCredential.user.sendEmailVerification(config)
        .then(() => {
          const user = {
            id: userCredential.user.uid,
            usuario: username,
            correo: userCredential.user.email,
            ciudad: city,
          };
          saveUser(user);
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
      window.location.href = 'http://localhost:8080/#/timeline';
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
  auth.signInWithPopup(provider).then((userCredential) => {
    const user = {
      id: userCredential.user.uid,
      usuario: userCredential.user.displayName,
      correo: userCredential.user.email,
      photo: userCredential.user.photoURL,
    };
    const users = database.collection('users');
    const consulta = users.where('id', '==', user.id).get();
    consulta.then((res) => {
      if (res.empty) {
        saveUser(user);
      } else {
        res.forEach((doc) => {
          console.log(doc.id, '=>', doc.data());
        });
      }
    }).catch((err) => {
      console.error(err);
    });
    localStorage.setItem('session', JSON.stringify(userCredential));
    window.location.href = 'http://localhost:8080/#/timeline';
  }).catch((error) => {
    showErrorMessage(error.code);
    throw error;
  });
};

// Cerrar sesion
export const logout = () => {
  auth.signOut().then(() => {
    localStorage.clear();
    window.location.href = '#/login';
  });
};
