import { auth } from './init';

const createUserByEmailAndPass = (email, password) => {
  auth
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      console.log(userCredential);
    });
};

export { createUserByEmailAndPass };
