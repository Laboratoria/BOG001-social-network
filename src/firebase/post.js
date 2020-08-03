import { database } from './init';

export const saveEvent = (hour, date, sport, place, description) => {
  const infLocalStorage = localStorage.getItem('session');
  const convetInfoJson = JSON.parse(infLocalStorage);
  const IdUser = convetInfoJson.user.uid;
  const nameUser = convetInfoJson.user.displayName;
  console.log(IdUser);
  database.collection('events').add({
    id: IdUser,
    nombre: nameUser,
    hora: hour,
    fecha: date,
    deporte: sport,
    lugar: place,
    descripcion: description,
  }).then((respuesta) => {
    console.log(respuesta);
  });
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
