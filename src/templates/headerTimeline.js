import { logout } from '../firebase/auth';

const getNameUser = () => {
  const session = JSON.parse(localStorage.getItem('session'));
  const sessionName = session.user.email;
  return sessionName;
};

const headerTimeline = () => {
  const view = `
      <a href="#/timeline"><img class="header__logo" src="../assets/logoWhite.png" alt="phySport logo"></a>
      <div class="flaticon-user icons" id="menu">
        <ul class="list hide" id="menuList">
          <li class="header__menu__item" >${getNameUser()}</li>
          <li class="header__menu__item" ><a href="#/profile"> Perfil</li>
          <li class="header__menu__item logout" id="exit">Cerrar Sesion</li>
        </ul>
      </div>
    `;
  const container = document.createElement('header');
  container.setAttribute('class', 'header');
  container.innerHTML = view;

  container.querySelector('#exit').addEventListener('click', logout);
  container.querySelector('#menu').addEventListener('click', () => {
    container.querySelector('.list').classList.toggle('hide');
  });
  return container;
};

export default headerTimeline;
