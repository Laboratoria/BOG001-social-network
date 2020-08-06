import { getEvents } from '../firebase/post';

const event = (evento) => {
  const eventContainer = document.createElement('article');
  eventContainer.setAttribute('class', 'eventTimeline');
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
    </div>
    <div class="event__interaction">
      <div>
        <span class="flaticon-strong icons__timeline"></span>
        <span class="interaction__text">${console.log('200')} Asistiré</span>
      </div>
      <div class="event__interaction--position">
        <span class="flaticon-speech-bubble icons__timeline"></span>
        <span class="interaction__text">Comentar</span>
      </div>
      <div class="event__interaction--position">
      <span class="flaticon-menu icons__timeline">
      </span>
      <ul class="hide eventList">
        <li>
          Editar Evento
        </li>
        <li>
          Eliminar Evento
        </li>
      </ul>
    </div>
    </div>
    <a href="#/event"><span id="newEvent" class="flaticon-edit icons postIcon"></span></a>
  `;
  eventContainer.querySelector('.flaticon-menu').addEventListener('click', () => eventContainer.querySelector('ul').classList.toggle('hide'));

  return eventContainer;
};

const timeline = async () => {
  const container = document.createElement('section');
  container.setAttribute('class', 'timeline-container');


  const exportData = async () => {
    const querySnapshot = await getEvents();
    querySnapshot.forEach((doc) => {
      container.insertAdjacentElement('beforeend', event(doc.data()));
    });
  };

  exportData();

  return container;
};

export default timeline;
