import comment from '../utils/comment';
import printComment from '../utils/printComment';

const eventComponent = (event) => {
  const userID = JSON.parse(localStorage.getItem('session')).user.uid;

  const likesQuantity = event.likes ? event.likes.length : 0;
  const commentQuantity = event.comment ? event.comment.length : 0;
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
        <div class="event__interaction--position">
          <span class="flaticon-chat icons__timeline"></span>
          <span class="interaction__text commentQuantity">${commentQuantity} Comentarios</span>
          <div class="form__comment">
          </div>
        </div>
        <div class="event__interaction--position hide">
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

  eventContainer.querySelector('.flaticon-menu').addEventListener('click', (evento) => {
    if (userID === evento.id) {
      eventContainer.querySelector('ul').classList.remove('hide');
    }
  });

  eventContainer.querySelector('.flaticon-chat').addEventListener('click', () => {
    eventContainer.querySelector('.form__comment').insertAdjacentElement('beforeend', comment(event));
    eventContainer.querySelector('.comment__container').insertAdjacentElement('beforeend', printComment(event));
  });

  return eventContainer;
};

export default eventComponent;
