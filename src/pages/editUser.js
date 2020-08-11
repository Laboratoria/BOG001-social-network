import { getUserProfile, userUpdate } from '../firebase/database';

const editUser = async () => {
  const updateUser = () => {
    const email = document.getElementById('email').value;
    const pass = document.getElementById('password').value;
    const city = document.getElementById('city').value;
    const username = document.getElementById('username').value;
    const image = document.getElementById('image');
  };
  let user;
  await getUserProfile().then((snapshot) => {
    if (snapshot.empty) {
      return;
    }
    snapshot.forEach((element) => {
      user = element.data();
    });
  }).catch((err) => {
    console.log('Error getting documents', err);
  });
  const view = `
  <a href="#/profile"><span class="flaticon-remove postIcon"></span></a>
    <div class="form__box">
      <h1 class="login__title container__form--title">
          Edita tu usuario
      </h1>
      <form id="formUpdate" class="form">
        <div class="form-group">
          <input id="username" type="text" placeholder="Nombre de Usuario" required value="${user.usuario}">
          <label for="username">Nombre de Usuario</label>
        </div>
        <div class="form-group">
          <input id="email" type="email" placeholder="Correo" required value="${user.email}">
          <label for="email">Correo</label>
        </div>
        <div class="form-group">
          <input id="city" type="text" placeholder="Ciudad" required value="${user.ciudad}">
          <label for="city">Ciudad</label>
        </div>
        <div class="form-group password--container">
          <input type="password" id="password" placeholder="Contraseña" required>
          <label for="password">Contraseña</label>
          <span class="eye__icon" id="eyeIcon"></span>
        </div>
        <div class="form-group password--container">
        <input type="file" id="image" placeholder="Imagen" required>
        <label for="password">Imagen</label>
      </div>
        <button id="button" type="submit">Actualizar</button>
      </form>
    </div>
`;
  const container = document.createElement('div');
  container.setAttribute('class', 'container__form');
  container.innerHTML = view;
  container.querySelector('#formUpdate').addEventListener('submit', (e) => {
    e.preventDefault();
    updateUser();
  });
  return container;
};

export default editUser;
