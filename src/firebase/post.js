import { database, timeStamp } from './init';

export const saveEvent = (eventToCreate) => {
  const infLocalStorage = localStorage.getItem('session');
  const convetInfoJson = JSON.parse(infLocalStorage);
  const IdUser = convetInfoJson.user.uid;
  const nameUser = convetInfoJson.user.displayName;
  const photoURL = convetInfoJson.user.photoURL;
  const eventInfo = {
    eventToCreate,
    id: IdUser,
    nombre: nameUser,
    photo: photoURL,
    fechaPublicacion: timeStamp,
  };
  database.collection('events').add(eventInfo).then((respuesta) => {
    console.log(respuesta);
    window.location.href = '#/timeline';
  });
};

export const getEvent = id => database.collection('events').doc(id).get();

export const getEvents = () => database.collection('events').orderBy('fechaPublicacion', 'desc').get();

export const editEvent = async (id, data) => database.collection('events').doc(id).update(data);

export const getEventById = id => database.collection('events').doc(id).get();

export const deletePost = (id) => {
  database.collection('events').doc(id).delete();
};
