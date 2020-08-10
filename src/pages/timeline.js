import { getEvents } from '../firebase/post';
import eventComponent from './event';

/*
import {
  getEvents, editEvent, deletePost, getEventById,
} from '../firebase/post';

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

const event = (evento) => {
  const user = JSON.parse(localStorage.getItem('session')).user.uid;
  const eventContainer = document.createElement('article');
  eventContainer.setAttribute('class', 'eventTimeline');
  const likesQuantity = evento.likes ? evento.likes.length : 0;
  const commentQuantity = evento.comment ? evento.comment.length : 0;
  eventContainer.innerHTML = `
    <div class="event__info">
      <div class="event__upper--container">
        <div class="user">
          <img src="../assets/perfil.png">
          <h2>${evento.nombre}</h2>
        </div>
        <div class="sport">
          <img class="sport__icon" src="${getSportIcon(evento.deporte)}">
          <span>${evento.hora}</span>
          <span>${evento.fechaEvento}</span>
        </div>
      </div>
      <p><span class="event__subtitle">Lugar: </span>${evento.lugar}</p>
      <p>${evento.descripcion}</p>
      <div class="event__interaction">
        <div>
          <span class="flaticon-strong icons__timeline"></span>
          <span class="interaction__text">${likesQuantity} Asistiré</span>
        </div>
        <div class="event__interaction--position">
          <span class="flaticon-chat icons__timeline"></span>
          <span class="interaction__text commentQuantity">${commentQuantity} Comentarios</span>
          <form class="eventOptions" id="form__comment">
            <h3 class="">Comentar a ${evento.nombre}</h3>
            <textarea class="input__comment" maxlength="100" id="comment" cols="35" rows="3" required></textarea>
            <div>
              <button class="comment--btn" type="submit">Comentar</button>
              <button id="notComment" class="comment--btn" type="button">Cancelar</button>
            </div>
          </form>
        </div>
        <div class="event__interaction--position">
          <span class="flaticon-menu icons__timeline">
          </span>
          <ul class="eventOptions">
            <li>
              <button class="eventOptions__btn edit">Editar Evento</button>
            </li>
            <li>
              <button class="eventOptions__btn delete" data-id="${evento.id}">Eliminar Evento</button>
            </li>
          </ul>
        </div>
      </div>
      <div class="comment__container">
      </div>
    </div>
  `;
  // mil funciones para comentar
  const createComment = () => {
    const comment = evento.comment || [];
    const commentValue = eventContainer.querySelector('.input__comment').value;
    const { displayName, uid } = JSON.parse(localStorage.getItem('session')).user;
    comment.push({
      comment: commentValue,
      username: displayName,
      useId: uid,
    });
    editEvent(evento.eventId, { comment });
    eventContainer.querySelector('.commentQuantity').innerHTML = `${comment.length} comentarios`;
  };

  const printComment = async () => {
    const commentContainer = eventContainer.querySelector('.comment__container');
    const querySnapshot = await getEventById(evento.eventId);
    const comment = querySnapshot.data().comment;

    if (comment && !evento.open) {
      comment.forEach((com) => {
        const commentTemplate = document.createElement('p');
        commentTemplate.setAttribute('class', 'flaticon-remove delete__comment');
        commentTemplate.innerText = `${com.username}: 
        ${com.comment}`;
        commentContainer.insertAdjacentElement('beforeend', commentTemplate);
      });
    }

    if (evento.open) {
      commentContainer.innerHTML = '';
    }

    evento.open = !evento.open;

    document.querySelector('.delete__comment').addEventListener('click', () => {
      console.log('aqui deberia eliminar pero nos e me ocurre como');
    });
  };

  eventContainer.querySelector('.flaticon-chat').addEventListener('click', () => {
    eventContainer.querySelector('#form__comment').classList.toggle('hide');
    printComment();
  });

  eventContainer.querySelector('#notComment').addEventListener('click', () => {
    eventContainer.querySelector('.input__comment').value = '';
    eventContainer.querySelector('#form__comment').classList.toggle('hide');
    printComment();
  });

  eventContainer.querySelector('#form__comment').addEventListener('submit', (e) => {
    e.preventDefault();
    createComment();
    eventContainer.querySelector('#form__comment').classList.toggle('hide');
    printComment();
    eventContainer.querySelector('.input__comment').value = '';
  });


  eventContainer.querySelector('.flaticon-menu').addEventListener('click', () => eventContainer.querySelector('ul').classList.toggle('hide'));
  // funcion asistire
  eventContainer.querySelector('.flaticon-strong').addEventListener('click', () => {
    let likes = evento.likes || [];
    if (likes.includes(user)) {
      likes = likes.filter(like => like !== user);
    } else {
      likes.push(user);
    }
    editEvent(evento.eventId, { likes });
    evento.likes = likes;
    eventContainer.querySelector('.interaction__text').innerHTML = `${likes.length} Asistiré`;
  });
  // funcion eliminar evento
  eventContainer.querySelector('.delete').addEventListener('click', async () => {
    if (user === evento.id) {
      await deletePost(evento.eventId);
      // console.log(evento.eventId);
      eventContainer.innerHTML = '';
    } else {
      console.log('No puedes eliminar este evento');
    }
  });
  // funcion editar evento
  eventContainer.querySelector('.edit').addEventListener('click', async () => {
    if (user === evento.id) {
      window.location.href = `#/editarEvento?editEvent=${evento.eventId}`;
    } else {
      console.log('No puedes editar este evento');
    }
  });

  return eventContainer;
};
*/

const createEventLink = `
  <a href="#/createEvent">
    <span id="newEvent" class="flaticon-plus icons postIcon">
    </span>
  </a>
`;

const timeline = async () => {
  const container = document.createElement('section');
  container.setAttribute('class', 'timeline-container');
  container.innerHTML = createEventLink;

  const showEvent = async () => {
    const querySnapshot = await getEvents();
    querySnapshot.forEach((doc) => {
      container.insertAdjacentElement('beforeend', eventComponent({ ...doc.data(), eventId: doc.id }));
    });
  };

  showEvent();

  return container;
};

export default timeline;
