import { saveEvent } from '../firebase/post';
import { fileRegister } from '../firebase/storage';
import { timeStamp } from '../firebase/init';

const event = () => {
  const view = `
  <a href="#/timeline"><span class="flaticon-remove postIcon"></span></a>
    <h1 class="login__title container__form--title">Crea tu evento</h1>
    <form class="event_form form" id="event-form">
      <div class="form-group">
        <label for="date" class="">Fecha</label>
        <input class="event__input"  type="date" id="date" name="Fecha" required autocomplete="off" >
      </div>
      <div class="form-group">
        <label for="time" class="">Hora</label>
        <input class="event__input" type="time" id="time" name ="hora" required autocomplete = "off" >
      </div>
      <div class="form-group">
        <label for="sport">Deporte</label>
        <select class="event__input" type="text" id="sport" name="Deporte" required autocomplete="off" >
          <option value="Futbol">Fútbol</option>
          <option value="Baloncesto">Baloncesto</option>
          <option value="Senderismo">Senderismo</option>
          <option value="Beisbol">Béisbol</option>
          <option value="Ciclismo">Ciclismo</option>
        </select>
      </div>
      <div class="form-group">
        <label for="place">Lugar</label>
        <textarea name="place" id="place" cols="35" rows="3" maxlength="80" placeholder="Maximo 80 caracteres. Kr 28c, Calle 20, Cancha de Futbol Es un Ejemplo, Localidad elEjemplo." required></textarea>        
      </div>
      <div class="form-group">
        <label for="description">Descripcion</label>
        <textarea name="description" id="description" cols="35" rows="8" maxlength="150" placeholder="Descripcion maximo 150 caracteres" required></textarea>        
      </div>
      <div class="form-group">
        <input type="file" id="image" placeholder="Imagen" accept="image/*">
        <label for="image">Imagen</label>
      </div>
      <button type="submit" class="button" id="publicar">Publicar</button>
      </div>
    </form>
  `;
  const container = document.createElement('section');
  container.setAttribute('class', 'event');
  container.innerHTML = view;
  const eventForm = container.querySelector('#event-form');

  const saveImg = async (file) => {
    const fileType = file.name.split('.').reverse()[0];
    const fileName = `${Date.now()} + '.' + ${fileType}`;
    if ((fileType === 'jpg') || (fileType === 'png') || (fileType === 'jpeg') || (fileType === 'svg') || (fileType === 'gif')) {
      const promise = new Promise((resolver) => {
        const success = async (url) => {
          resolver(url);
        };
        fileRegister(file, fileName, success);
      });
      return promise;
    }
    return Promise.reject(new Error(''));
  };

  const createEvent = async () => {
    const infLocalStorage = localStorage.getItem('session');
    const convetInfoJson = JSON.parse(infLocalStorage);
    const IdUser = convetInfoJson.user.uid;
    const nameUser = convetInfoJson.user.displayName;
    const photoURL = convetInfoJson.user.photoURL;
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

    const eventToCreate = {
      id: IdUser,
      nombre: nameUser,
      photo: photoURL,
      fechaPublicacion: timeStamp,
      hora: hour,
      fechaEvento: date,
      deporte: sport,
      lugar: place,
      descripcion: description,
    };

    if (imgURL) {
      eventToCreate.image = imgURL;
    }

    saveEvent(eventToCreate);
  };

  eventForm.addEventListener('submit', (e) => { e.preventDefault(); createEvent(); });
  return container;
};

export default event;
