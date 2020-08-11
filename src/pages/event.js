import { saveEvent } from '../firebase/post';

const event = () => {
  const view = `
  <section class = "event">
  <a href="#/timeline"><span class="flaticon-remove postIcon"></span></a>
    <h1 class="login__title container__form--title">Crea tu evento</h1>
    <form class="event_form form" id="event-form" action = "" method = "">    
      <div class="">
        <label for = "fname" class="">Fecha</label>
        <input class="event__input"  type="date" id="fecha" name="Fecha" required autocomplete="off" >
      </div>
      <div class="">
        <label for = "Hora" class="">Hora</label>    
        <input class="event__input" type="time" id="hora" name ="hora" required autocomplete = "off" >
      </div>      
      <div>
        <label class="" for = "fname">Deporte</label>
        <select class="event__input" type="text" id="deporte" name="Deporte" required autocomplete="off" >
          <option class="" value="Futbol">Fútbol</option>
          <option class="" value="Baloncesto">Baloncesto</option>
          <option class="" value="Senderismo">Senderismo</option>
          <option class="" value="Béisbol">Béisbol</option>
          <option class="" value="Ciclismo">Ciclismo</option>
        </select>
      </div>      
      <div class="">
        <textarea name="place" id="place" cols="35" rows="3" maxlength="80" placeholder="Lugar, maximo 80 caracteres" required></textarea>        
      </div>
      <div class="">
        <textarea name="description" id="description" cols="35" rows="8" maxlength="150" placeholder="Descripcion maximo 150 caracteres" required></textarea>        
      </div>      
      <div class="">
        <button type="submit" class="button" id = "publicar">Publicar</button>
      </div>
    </form>  
  </section>
  `;
  const container = document.createElement('div');
  container.innerHTML = view;
  const eventForm = container.querySelector('#event-form');

  const createEvent = () => {
    const hour = document.getElementById('hora').value;
    const date = document.getElementById('fecha').value;
    const sport = document.getElementById('deporte').value;
    const place = document.getElementById('place').value;
    const description = document.getElementById('description').value;

    saveEvent(hour, date, sport, place, description);
  };

  eventForm.addEventListener('submit', (e) => { e.preventDefault(); createEvent(); });
  return container;
};

export default event;
