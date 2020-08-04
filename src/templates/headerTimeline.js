import { logout } from '../firebase/auth';

const headerTimeline = () => {
  const view = `
      <section class="header">
        <ul class="flaticon-list icons" id="menu">
          <li class="list" id="exit">Cerrar Sesion</li>
        </ul>
        <img class="header__logo" src="../assets/logoWhite.png" alt="phySport logo">
        <a href="#/event"><span id="newEvent" class="flaticon-edit icons postIcon"></span></a>
      </section>
    `;
  const container = document.createElement('div');
  container.innerHTML = view;

  container.querySelector('#exit').addEventListener('click', logout);
  container.querySelector('#menu').addEventListener('click', () => {
    container.querySelector('#exit').classList.toggle('list');
  });
  return container;
};

export default headerTimeline;
