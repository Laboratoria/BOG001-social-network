import { logout } from '../firebase/auth';

const getNameUser = () => {
  const session = JSON.parse(localStorage.getItem('session'));
  const sessionName = session.user.email;
  return sessionName;
};

const headerTimeline = () => {
  const view = `
      <section class="header">
        <img class="header__logo" src="../assets/logoWhite.png" alt="phySport logo">
        <div class="flaticon-user icons" id="menu">
          <ul class="list" id="menuList">
            <li class="header__menu__item" >${getNameUser()}</li>
            <li class="header__menu__item" id="exit">Cerrar Sesion</li>
          </ul>
        </div>
      </section>
    `;
  const container = document.createElement('div');
  container.innerHTML = view;

  container.querySelector('#exit').addEventListener('click', logout);
  container.querySelector('#menu').addEventListener('click', () => {
    container.querySelector('.list').classList.toggle('hide');
  });
  return container;
};

export default headerTimeline;
