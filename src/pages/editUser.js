import { getUserProfile, userUpdate } from '../firebase/database';

const editUser = async () => {
  const updateUser = () => {
    const email = document.getElementById('email').value;
    const city = document.getElementById('city').value;
    const username = document.getElementById('username').value;
    const image = document.getElementById('image');
    const sport = document.getElementById('sport').value;
    userUpdate({
      usuario: username,
      correo: email,
      ciudad: city,
      photo: image,
      deporte: sport,
    });
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
      <form id="formUpdate" class="event_form form">
        <div class="form-group">
          <input id="username" type="text" placeholder="Nombre de Usuario" required value="${user.usuario}">
          <label for="username">Nombre de Usuario</label>
        </div>
        <div class="form-group">
          <input id="email" type="email" placeholder="Correo" required value="${user.correo}">
          <label for="email">Correo</label>
        </div>
        <div class="form-group">
          <input id="city" type="text" placeholder="Ciudad" required value="${user.ciudad}">
          <label for="city">Ciudad</label>
        </div>
        <div class="form-group">
        <label for="sport">Deporte</label>
        <select type="text" id="sport" required autocomplete = "off" >
          <option value="select">Selecciona tu deporte preferido</option>
          <option value="Futbol">Futbol</option>
          <option value="Baloncesto">Baloncesto</option>
          <option value="Senderismo">Senderismo</option>
        </select>
      </div>
        <div class="form-group">
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
