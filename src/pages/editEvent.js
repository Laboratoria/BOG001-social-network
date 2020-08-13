import { getEvent, editEvent } from '../firebase/post';
import { fileRegister } from '../firebase/storage';

const editEventComponent = async (eventId) => {
  const container = document.createElement('section');
  container.setAttribute('class', 'event');
  const doc = await getEvent(eventId);
  const event = doc.data();
  const view = `
  <a href="#/timeline" title="Descartar los cambios"><span class="flaticon-remove postIcon"></span></a>
    <h1 class="login__title container__form--title">Edita tu evento</h1>
    <form class="event_form form" id="event-form">
      <div class="form-group">
      <label for="date">Fecha</label>
      <input type="date" id="date" required autocomplete = "off" value ="${event.fechaEvento}">
      </div>
      <div class="form-group">
        <label for="time" class="">Hora</label>
        <input type="time" id="time" required autocomplete = "off" value ="${event.hora}" >
      </div>      
      <div class="form-group">
        <label for="sport">Deporte</label>
        <select type="text" id="sport" required autocomplete = "off" >
          <option value="${event.deporte}">${event.deporte}</option>
          <option value="Futbol">Fútbol</option>
          <option value="Baloncesto">Baloncesto</option>
          <option value="Senderismo">Senderismo</option>
          <option value="Beisbol">Béisbol</option>
          <option value="Ciclismo">Ciclismo</option>
        </select>
      </div>
      <div class="form-group">
        <label for="place">Lugar</label>
        <textarea name="place" id="place" cols="35" rows="3" maxlength="80" placeholder="Lugar, maximo 80 caracteres" required>${event.lugar}</textarea>
      </div>
      <div class="form-group">
        <label for="description">Descripcion</label>
        <textarea name="description" id="description" cols="35" rows="8" maxlength="150" placeholder="Descripcion maximo 150 caracteres" required>${event.descripcion}</textarea>        
      </div>
      <div class="form-group">
        <input type="file" id="image" placeholder="Imagen" accept="image/*">
        <label for="password">Imagen</label>
      </div>
        <button type="submit" class="button" id="actualizar">Actualizar</button>
    </form>
  `;
  container.innerHTML = view;
  const eventForm = container.querySelector('#event-form');

  const saveImg = async (file) => {
    const fileType = file.name.split('.').reverse()[0];
    const fileName = `${event.image} + '.' + ${fileType}`;
    if ((fileType === 'jpg') || (fileType === 'png') || (fileType === 'jpeg') || (fileType === 'svg') || (fileType === 'gif')) {
      const promise = new Promise((resolver) => {
        const success = async (url) => {
          resolver(url);
        };
        fileRegister(file, fileName, success);
      });
      return promise;
    }
    return Promise.reject();
  };

  const updateEvents = async () => {
    const hour = document.getElementById('time').value;
    const date = document.getElementById('date').value;
    const sport = document.getElementById('sport').value;
    const place = document.getElementById('place').value;
    const description = document.getElementById('description').value;

    const file = container.querySelector('#image').files;
    let imgURL = '';
    if (file.length) {
      imgURL = await saveImg(file[0]);
    }

    const eventToEdit = {
      hora: hour,
      fechaEvento: date,
      deporte: sport,
      lugar: place,
      descripcion: description,
    };

    if (imgURL) {
      eventToEdit.image = imgURL;
    }

    editEvent(eventId, eventToEdit);
    window.location.href = '#/timeline';
  };

  eventForm.addEventListener('submit', (e) => { e.preventDefault(); updateEvents(); });
  return container;
};

export default editEventComponent;
