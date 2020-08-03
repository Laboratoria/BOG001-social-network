import { createUserByEmailAndPass } from '../firebase/auth';
// import { saveUser } from '../firebase/database';

const signUp = () => {
  const view = `
    <section class="signUp container__form">
      <h1 class="container__form--title">
          Registrate
      </h1>
      <form class="form">
        <div class="form-group">
          <input id="username" type="text" placeholder="Nombre de Usuario" required>
          <label for="username">Nombre de Usuario</label>
        </div>
        <div class="form-group">
          <input id="email" type="email" placeholder="Correo" required>
          <label for="email">Correo</label>
        </div>
        <div class="form-group">
          <input id="city" type="text" placeholder="Ciudad" required>
          <label for="city">Ciudad</label>
        </div>
        <div class="form-group password--container">
          <input id = "password" type="password" placeholder="Contraseña" required>
          <label for="password">Contraseña</label>
          <span class="eye__icon" id="eyeIcon"></span>
        </div>
        <button id="button" type="submit">Registrar</button>
      </form>
      <div class='signUp__google'>
      <div class = "signUp__google">
      <h3> ¿Ya tienes cuenta?</h3>
      <a href = "#/login" id=" class="login__register">Inicia Sesion</a>
      </div>
    </section>`;

  const container = document.createElement('div');
  container.innerHTML = view;
  const botonRegistro = container.querySelector('#button');
  const eyeIcon = container.querySelector('#eyeIcon');
  const password = container.querySelector('#password');

  const mostrarContrasena = () => {
    if (password.type === 'password') {
      password.type = 'text';
      eyeIcon.classList.toggle('eyeblock__icon');
      eyeIcon.classList.toggle('eye__icon');
    } else {
      password.type = 'password';
      eyeIcon.classList.toggle('eyeblock__icon');
      eyeIcon.classList.toggle('eye__icon');
    }
  };

  const createUser = () => {
    const email = document.getElementById('email').value;
    const pass = document.getElementById('password').value;
    // const city = document.getElementById('city').value;
    // const username = document.getElementById('username').value;
    createUserByEmailAndPass(email, pass);
    // .then((userCredential) => {
    //   const user = {
    //     id: userCredential.user.uid,
    //     usuario: username,
    //     correo: userCredential.user.email,
    //     ciudad: city,
    //   };
    //   saveUser(user);
    //   window.location.href = '#/timeline';
    //   console.log(userCredential);
    // }).catch((error) => {
    //   printError(error);
    // });
  };

  eyeIcon.addEventListener('click', mostrarContrasena);
  botonRegistro.addEventListener('submit', (e) => { e.preventDefault(); createUser(); });

  return container;
};

export default signUp;
