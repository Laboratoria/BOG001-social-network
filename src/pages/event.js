import comment from '../utils/comment';
import printComment from '../utils/printComment';
import { deletePost, editEvent } from '../firebase/post';

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
          <img class="sport__icon" src="../assets/balon.png">
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
      await deletePost(event.eventId);
      // console.log(evento.eventId);
      eventContainer.innerHTML = '';
    } else {
      console.log('No puedes eliminar este evento');
    }
  });

  return eventContainer;
};

export default eventComponent;
