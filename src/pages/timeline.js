import { getEvents } from '../firebase/post';

<<<<<<< HEAD
function timeline(valor) {
  const listElement = document.createElement('li');
  listElement.innerHTML = `
    <h1>HOLAAAAAAAAA</H1>
    <p>${valor.lugar}</p>
    <p>${valor.descripcion}</p>`;
  console.log(valor);
  return listElement;
}
// console.log(timeline());

const exportData = async () => {
  const querySnapshot = await getEvents();
  querySnapshot.forEach((doc) => {
    const data = doc.data();
    console.log(timeline(data));
  });
};

exportData();
export default timeline;

// console.log(exportData());
=======
const event = (evento) => {
  const eventContainer = document.createElement('article');
  eventContainer.setAttribute('class', 'event');
  eventContainer.innerHTML = `
    <div class="event__info">
      <div class="event__upper--container">
        <div class="user">
          <img src="../assets/perfil.png">
          <h2></h2>
        </div>
        <div class="sport">
          <img src="../assets/balon.png">
          <span>HORA</span>
          <span>FECHA</span>
        </div>
      </div>
      <p><span class="event__subtitle">Lugar:</span>${evento.lugar}</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat eaque ipsum non fugit aspernatur praesentium ab qui dolorem.</p>
    </div>
    <div class="event__interaction">
      <div>
        <span class="flaticon-strong icons"></span>
        <span>Asistiré</span>
      </div>
      <div>
        <span class="flaticon-speech-bubble icons"></span>
        <span>Comentar</span>
      </div>
    </div>
  `;
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
>>>>>>> cfc5371ab271d297dd51ca5451ad0ce264323843
