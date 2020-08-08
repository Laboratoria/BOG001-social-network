import { getEvents, editEvent, deletePost } from '../firebase/post';

const event = (evento) => {
  const user = JSON.parse(localStorage.getItem('session')).user.uid;
  const eventContainer = document.createElement('article');
  eventContainer.setAttribute('class', 'eventTimeline');
  const likesQuantity = evento.likes ? evento.likes.length : 0;
  eventContainer.innerHTML = `
    <div class="event__info">
      <div class="event__upper--container">
        <div class="user">
          <img src="../assets/perfil.png">
          <h2>${evento.nombre}</h2>
        </div>
        <div class="sport">
          <img class="sport__icon" src="../assets/balon.png">
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
          <span class="interaction__text">Comentar</span>
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
    </div>
  `;

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
      console.log(evento.eventId);
      eventContainer.innerHTML = '';
    } else {
      console.log('No puedes eliminar este evento');
    }
  });

  eventContainer.querySelector('.edit').addEventListener('click', async () => {
    if (user === evento.id) {
      window.location.href = `#/editarEvento?editEvent=${evento.eventId}`;
    } else {
      console.log('No puedes editar este evento');
    }
  });

  return eventContainer;
};

const createEventLink = `
  <a href="#/event">
    <span id="newEvent" class="flaticon-plus icons postIcon">
    </span>
  </a>
`;

const timeline = async () => {
  const container = document.createElement('section');
  container.setAttribute('class', 'timeline-container');
  container.innerHTML = createEventLink;

  const exportData = async () => {
    const querySnapshot = await getEvents();
    querySnapshot.forEach((doc) => {
      container.insertAdjacentElement('beforeend', event({ ...doc.data(), eventId: doc.id }));
    });
  };

  exportData();

  return container;
};

export default timeline;
