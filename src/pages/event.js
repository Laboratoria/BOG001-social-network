import swal from 'sweetalert';
import comment from '../utils/comment';
import printComment from '../utils/printComment';
import { deletePost, editEvent } from '../firebase/post';

const sportIcons = {
  Futbol: '../assets/balon.png',
  Baloncesto: '../assets/001-basketball.png',
  Senderismo: '../assets/trekking.png',
  Béisbol: '../assets/002-baseball.png',
  Ciclismo: '../assets/bycicle.png',
};

const getSportIcon = (sport) => {
  const icon = sportIcons[sport];
  if (icon) {
    return icon;
  }
  return '../assets/thinking.png';
};

const eventComponent = (event) => {
  const userID = JSON.parse(localStorage.getItem('session')).user.uid;

  const likesQuantity = event.likes ? event.likes.length : 0;
  const commentQuantity = event.commentList ? event.commentList.length : 0;

  const view = `
    <div class="event__info">
      <div class="event__upper--container">
        <div class="user">
          <img src="../assets/perfil.png">
          <h2>${event.nombre}</h2>
        </div>
        <div class="sport">
          <img class="sport__icon" src="${getSportIcon(event.deporte)}">
          <span>${event.hora}</span>
          <span>${event.fechaEvento}</span>
        </div>
      </div>
      <p><span class="event__subtitle">Lugar: </span>${event.lugar}</p>
      <p>${event.descripcion}</p>
      <div class="event__interaction">
        <div>
          <span class="flaticon-strong icons__timeline"></span>
          <span class="interaction__text">${likesQuantity} Asistiré</span>
        </div>
        <div class="event__interaction--position form__comment">
          <span class="flaticon-chat icons__timeline"></span>
          <span class="interaction__text commentQuantity">${commentQuantity} Comentarios</span>
        </div>
        <div class="event__interaction--position">
          <span class="flaticon-menu icons__timeline">
          </span>
          <ul class="eventOptions">
            <li>
              <button class="eventOptions__btn edit">Editar Evento</button>
            </li>
            <li>
              <button class="eventOptions__btn delete" data-id="${event.id}">Eliminar Evento</button>
            </li>
          </ul>
        </div>
      </div>
      <div class="comment__container">
      </div>
    </div>
  `;

  const eventContainer = document.createElement('article');
  eventContainer.setAttribute('class', 'eventTimeline');
  eventContainer.innerHTML = view;

  // funcion asistire
  eventContainer.querySelector('.flaticon-strong').addEventListener('click', () => {
    let likes = event.likes || [];
    if (likes.includes(userID)) {
      likes = likes.filter(like => like !== userID);
      eventContainer.querySelector('.flaticon-strong').classList.remove('like');
    } else {
      likes.push(userID);
      eventContainer.querySelector('.flaticon-strong').classList.add('like');
    }
    editEvent(event.eventId, { likes });
    event.likes = likes;
    eventContainer.querySelector('.interaction__text').innerHTML = `${likes.length} Asistiré`;
  });
  // Mostrar u ocultar el menu
  eventContainer.querySelector('.flaticon-menu').addEventListener('click', () => {
    eventContainer.querySelector('ul').classList.toggle('hide');
  });

  // mostrar u ocultar los comentarios
  eventContainer.querySelector('.flaticon-chat').addEventListener('click', () => {
    const commentsContainer = eventContainer.querySelector('.comment__container');
    const refreshComment = () => {
      commentsContainer.innerHTML = '';
      commentsContainer.insertAdjacentElement('beforeend', printComment(event));
    };
    eventContainer.querySelector('.form__comment').insertAdjacentElement('beforeend', comment(event, refreshComment));
    commentsContainer.innerHTML = '';
    commentsContainer.insertAdjacentElement('beforeend', printComment(event));
    eventContainer.querySelector('form').classList.toggle('hide');
  });

  // editar evento
  eventContainer.querySelector('.edit').addEventListener('click', async () => {
    if (userID === event.id) {
      window.location.href = `#/editEvent?eventId=${event.eventId}`;
    } else {
      console.log('No puedes editar este evento');
    }
  });

  // funcion eliminar evento
  eventContainer.querySelector('.delete').addEventListener('click', async () => {
    if (userID === event.id) {
      swal({
        title: '¿Estas seguro?',
        text: 'Una vez eliminado, no podras recuperar este Evento',
        icon: 'warning',
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          deletePost(event.eventId);
          swal('Tu Evento ha sido eliminado', {
            icon: 'success',
          });
          eventContainer.innerHTML = '';
        }
      });
    } else {
      swal('No puedes eliminar este evento');
    }
  });

  return eventContainer;
};

export default eventComponent;
/*
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
*/
