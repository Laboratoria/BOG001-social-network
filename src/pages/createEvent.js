import { saveEvent } from '../firebase/post';

const event = () => {
  const view = `
  <a href="#/timeline" title="Volver al Timeline"><span class="flaticon-remove postIcon"></span></a>
    <h1 class="login__title container__form--title">Crea tu evento</h1>
    <form class="event_form form" id="event-form">
      <div class="form-group">
      <label for="date">Fecha</label>
      <input type="date" id="date" required autocomplete = "off" >
      </div>
      <div class="form-group">
        <label for="time" class="">Hora</label>
        <input type="time" id="time" required autocomplete = "off" >
      </div>
      <div class="form-group">
        <label for="sport">Deporte</label>
        <select type="text" id="sport" required autocomplete = "off" >
          <option value="Futbol">Fútbol</option>
          <option value="Baloncesto">Baloncesto</option>
          <option value="Senderismo">Senderismo</option>
          <option value="Béisbol">Béisbol</option>
          <option value="Ciclismo">Ciclismo</option>
        </select>
      </div>
      <div class="form-group">
        <label for="place">Lugar</label>
        <textarea name="place" id="place" cols="35" rows="3" maxlength="80" placeholder="Maximo 80 caracteres. Kr 28c, Calle 20, Cancha de Futbol Es un Ejemplo, Localidad elEjemplo." required></textarea>        
      </div>
      <div class="form-group">
      <label for="description">Descripcion</label>
        <textarea name="description" id="description" cols="35" rows="8" maxlength="150" placeholder="Descripcion maximo 150 caracteres. Jugaremos futbol en la cancha a las 6:00pm, nos faltan 3 jugadores. Traer agua y mucho animo." required></textarea>        
      </div>
        <button type="submit" class="button" id="publicar">Publicar</button>
    </form>
  `;
  const container = document.createElement('section');
  container.setAttribute('class', 'event');
  container.innerHTML = view;
  const eventForm = container.querySelector('#event-form');

  const createEvent = () => {
    const hour = document.getElementById('time').value;
    const date = document.getElementById('date').value;
    const sport = document.getElementById('sport').value;
    const place = document.getElementById('place').value;
    const description = document.getElementById('description').value;

    saveEvent(hour, date, sport, place, description);
  };

  eventForm.addEventListener('submit', (e) => { e.preventDefault(); createEvent(); });
  return container;
};

export default event;
