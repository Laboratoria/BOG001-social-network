import { auth } from './init';

// Registro con correo y contraseña
export const createUserByEmailAndPass = (email, password) => {
  auth
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      console.log(userCredential);
    });
};

// Inicio de sesion
export const loginUser = (email, password) => {
  auth
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      console.log(userCredential);
    });
};

// Inicio de Sesion Google

