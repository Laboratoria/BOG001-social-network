import { database } from './init';

export const saveUser = user => database.collection('users').doc(user.id).set(user);

export const getUserProfile = async () => {
  const infLocalStorage = localStorage.getItem('session');
  const convetInfoJson = JSON.parse(infLocalStorage);
  const userId = convetInfoJson.user.uid;

  return database.collection('users').where('id', '==', userId).get();
};

export const userUpdate = async user => database.collection('users').doc(user.id).update(user);
