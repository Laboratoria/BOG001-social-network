import { loginUser, loginUserGoogle } from '../firebase/auth';

const login = () => {
  const loginUsers = () => {
    const email = document.getElementById('email').value;
    const pass = document.getElementById('password').value;
    loginUser(email, pass);
  };
  const view = `
    <section class="login container__form">
      <div class="form__box">
        <h1 class="login__title container__form--title"> Inicia sesión</h1>
        <form id="loginForm" class="form">
        <div class="form-group">
          <input type="email" id="email" placeholder="Correo" required>
          <label for="email">Correo</label>
        </div>
        <div class="form-group password--container">
          <input type="password" id="password" placeholder="Contraseña" required>
          <label for="password">Contraseña</label>
          <span class="eye__icon" id="eyeIcon"></span>
        </div>
          <button id="button" class="form__button" type="submit">Ingresar</button>
        </form>
        <div class='signUp__google'>
            <h3>o registrate con</h3>
            <button id="buttonGmail" type="button"><img class="google-icon" src="../assets/seo-and-web.png" alt=""></button>
        </div>
        <div class="signUp__google">
        <h3> ¿Nuevo usuario?</h3>
        <a href = "#/sign-up" id="" class="login__register">Registrate</a>
        </div>
      </div>
    </section>
  `;

  window.history.forward(1);

  const container = document.createElement('div');
  container.innerHTML = view;
  const botonRegistro = container.querySelector('#loginForm');
  const buttonGmail = container.querySelector('#buttonGmail');
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

  botonRegistro.addEventListener('submit', (e) => { e.preventDefault(); loginUsers(); });
  buttonGmail.addEventListener('click', (e) => { e.preventDefault(); loginUserGoogle(); });
  eyeIcon.addEventListener('click', mostrarContrasena);

  return container;
};
export default login;
