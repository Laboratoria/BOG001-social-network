import { logout } from '../firebase/auth';

const headerTimeline = () => {
  const view = `
      <section class="header">
      <img class="header__logo" src="../assets/logoWhite.png" alt="phySport logo">
      <div class="flaticon-user-1 icons" id="menu">
        <ul class="list hide" id="menuList">
        <li class="" >Nombre</li>
        <li class="" id="exit">Cerrar Sesion</li>
        </ul>
      </div>
      </section>
    `;
  const container = document.createElement('div');
  container.innerHTML = view;

  container.querySelector('#exit').addEventListener('click', logout);
  container.querySelector('#menu').addEventListener('click', () => {
    container.querySelector('#menuList').classList.toggle('hide');
  });
  return container;
};

export default headerTimeline;
