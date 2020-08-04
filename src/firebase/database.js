import { database } from './init';

export const saveUser = user => database.collection('users').doc(user.id).set(user);
