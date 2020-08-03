import { database } from './init';

export const saveEvent = (post) => {
  database.collection('events').doc().set(post);
};

export const allEvents = () => {
  database
    .collection('events')
    .orderBy('fecha', 'asc')
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(`Descripcion post => ${doc.data().descripcion}`);
      });
    });
};

allEvents();
