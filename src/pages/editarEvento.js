import { getEvent, editEvent } from '../firebase/post';

const editarEvento = async (eventId) => {
  const container = document.createElement('div');
  const doc = await getEvent(eventId);
  const event = doc.data();
  console.log(doc);  
  const view = `
  <section class = "event">
  <a href="#/timeline"><span class="flaticon-remove postIcon"></span></a>
    <h1 class="login__title container__form--title">Edita tu evento</h1>
    <form class="event_form form" id="event-form" action = "" method = "">    
      <div class="">
        <label for = "fname" class="">Fecha</label>
        <input  type="date" id="fecha" name="Fecha" required autocomplete = "off" value="${event.fechaEvento}" >
      </div>
      <div class="">
        <label for = "Hora" class="">Hora</label>    
        <input class="" type = "time" id = "hora" name  = "hora" required autocomplete = "off" value="${event.hora}" >
      </div>      
      <div>
        <label class="" for = "fname">Deporte</label>
        <select class="" type = "text" id = "deporte" name = "Deporte" required autocomplete = "off" >
          <option class="" value="${event.deporte}">${event.deporte}</option>
          <option class="" value="Futbol">Futbol</option>
          <option class="" value="Baloncesto">Baloncesto</option>
          <option class="" value="Senderismo">Senderismo</option>
        </select>
      </div>      
      <div class="">
        <textarea name="place" id="place" cols="35" rows="3" maxlength="80" placeholder="Lugar, maximo 80 caracteres" required>${event.lugar}</textarea>        
      </div>
      <div class="">
        <textarea name="description" id="description" cols="35" rows="8" maxlength="150" placeholder="Descripcion maximo 150 caracteres" required>${event.descripcion}</textarea>        
      </div>      
      <div class="">
        <button type="submit" class="button" id = "actualizar">Actualizar</button>
      </div>
    </form>  
  </section>
  `;
  container.innerHTML = view;
  const eventForm = container.querySelector('#event-form');

  const updateEvents = () => {
    const hour = document.getElementById('hora').value;
    const date = document.getElementById('fecha').value;
    const sport = document.getElementById('deporte').value;
    const place = document.getElementById('place').value;
    const description = document.getElementById('description').value;    

    editEvent(eventId, {
      hora: hour,
      fechaEvento: date,
      deporte: sport,
      lugar: place,
      descripcion: description,
    });
    window.location.href = '#/timeline';
  }

  eventForm.addEventListener('submit', (e) => { e.preventDefault(); updateEvents(); });
    
    
  //   updateEvent(eventId, {
  //     fechaEvento: date,
  //     hora: hour,
  //     deporte: sport,
  //     lugar: place,
  //     descripcion: description,
  //   })
  // })  
  
  
  return container;
};

export default editarEvento;
