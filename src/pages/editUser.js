import swal from 'sweetalert';

import { getUserProfile, userUpdate } from '../firebase/database';
import { fileRegister } from '../firebase/storage';

const editUser = async () => {
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
      <h1 class="login__title container__form--title">
          Edita tu usuario
      </h1>
      <form id="formUpdate" class="form">
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
          <select class="event__input" type="text" id="sport" name="Deporte11" required autocomplete="off" >
            <option value="Futbol">Fútbol</option>
            <option value="Baloncesto">Baloncesto</option>
            <option value="Senderismo">Senderismo</option>
            <option value="Beisbol">Béisbol</option>
            <option value="Ciclismo">Ciclismo</option>
          </select>
        </div>
        <div class="form-group">
          <input type="file" id="image" placeholder="Imagen" accept="image/*">
          <label for="password">Imagen</label>
        </div>
       <button id="button" type="submit">Actualizar</button>
      </form>
`;

  const container = document.createElement('section');
  container.setAttribute('class', 'event');
  container.innerHTML = view;

  const saveImg = async (file) => {
    const fileType = file.name.split('.').reverse()[0];
    const fileName = user.id.concat('.', fileType);
    if ((fileType === 'jpg') || (fileType === 'png') || (fileType === 'jpeg') || (fileType === 'svg')) {
      const promise = new Promise((resolver) => {
        const success = async (url) => {
          resolver(url);
        };
        fileRegister(file, fileName, success);
      });
      return promise;
    }
    return Promise.reject(new Error(''));
  };

  const updateUser = async () => {
    const email = document.getElementById('email').value;
    const city = document.getElementById('city').value;
    const username = document.getElementById('username').value;
    const sport = document.getElementById('sport').value;

    const file = container.querySelector('#image').files;
    let imgURL = '';
    if (file.length) {
      imgURL = await saveImg(file[0]);
      console.log(imgURL);
    }

    const userToUpdate = {
      id: user.id,
      correo: email,
      ciudad: city,
      deporte: sport,
      usuario: username,
    };

    if (imgURL) {
      userToUpdate.photo = imgURL;
    }

    userUpdate(userToUpdate).then(() => {
      window.location.href = '#/profile';
    }).catch((err) => {
      console.error(err);
      swal({
        title: 'Ha ocurrido un error al tratar de actualizar el usuario',
        text: 'Intente de nuevo',
        icon: 'error',
        buttons: true,
        dangerMode: true,
      });
    });
  };

  container.querySelector('#formUpdate').addEventListener('submit', (e) => {
    e.preventDefault();
    updateUser();
  });
  return container;
};

export default editUser;
