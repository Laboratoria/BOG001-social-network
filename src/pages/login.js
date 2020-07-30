import { loginUser, loginUserGoogle } from '../firebase/auth';

const login = () => {
  const loginUsers = () => {
    const email = document.getElementById('loginEmail').value;
    const pass = document.getElementById('loginPassword').value;
    loginUser(email, pass);
  };
  const view = `
    <section class = "login container__form">
      <h1 class = "login__title container__form--title"> Inicia sesión</h1>
      <form id = "loginForm" class = "form">
      <div class="form-group">
        <input type = "email" id = "loginEmail" class = "form__email" placeholder = "Correo" autofocus>
        <label for="name">Correo</label>
      </div>
      <div class="form-group loginPassword--container">
        <input type = "password" id = "loginPassword" class = "form__password" placeholder = "Contraseña">
        <label for="name">Contraseña</label>
        <span class="eye__icon" id="eyeIcon"></span>
        </div>
        <a href = "#/timeline" id = "button" class = "form__button">
          Ingresar
        </a>
      </form>
      <div class='signUp__google'>
          <h3>o registrate con</h3>
          <h3>
          <a id="buttonGmail" href='#/...'><img class="google-icon" src="../assets/seo-and-web.png" alt=""></a>
          </h3>
      </div>
      <div class = "signUp__google">
      <h3> ¿Nuevo usuario?</h3>
      <a href = "#/sign-up" id="" class="login__register">Registrate</a>
      </div>
    </section>
  `;

  const container = document.createElement('div');
  container.innerHTML = view;
  const botonRegistro = container.querySelector('#button');
  const buttonGmail = container.querySelector('#buttonGmail');
  botonRegistro.addEventListener('click', () => { loginUsers(); });
  buttonGmail.addEventListener('click', (e) => { e.preventDefault(); loginUserGoogle(); });
  const eyeIcon = container.querySelector('#eyeIcon');
  const loginPassword = container.querySelector('#loginPassword');

  function mostrarContrasena() {
    if (loginPassword.type === 'password') {
      loginPassword.type = 'text';
      eyeIcon.classList.toggle('eyeblock__icon');
      eyeIcon.classList.toggle('eye__icon');
    } else {
      eyeIcon.classList.toggle('eyeblock__icon');
      eyeIcon.classList.toggle('eye__icon');
      loginPassword.type = 'password';
    }
  }

  eyeIcon.addEventListener('click', mostrarContrasena);

  return container;
};
<<<<<<< HEAD

=======
>>>>>>> bddde8f0fd86eadb16134a317ff764b102de3a1d
export default login;
