import { getEvents } from '../firebase/post';
import eventComponent from './event';

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
