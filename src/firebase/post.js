import { database, timeStamp } from './init';

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
    fechaEvento: date,
    deporte: sport,
    lugar: place,
    descripcion: description,
    fechaPublicacion: timeStamp,
  }).then((respuesta) => {
    console.log(respuesta);
    window.location.href = '#/timeline';
  });
};

export const getEvents = () => database.collection('events').get();

export const editEvent = (id, data) => database.collection('events').doc(id).update(data);

// window.addEventListener('DOMContentLoaded', async (e) => {
//   const querySnapshot = await getEvents();
//   querySnapshot.forEach(doc => {
//     console.log(doc.data());

//   })
// })

// export const allEvents = () => {
//   database
//     .collection('events')
//     .orderBy('fecha', 'asc')
//     .get()
//     .then((querySnapshot) => {
//       querySnapshot.forEach((doc) => {
//         console.log(`Descripcion post => ${doc.data().lugar}`);
//       });
//     });
// };

// allEvents()
