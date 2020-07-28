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
        <input type = "email" id = "loginEmail" class = "form__email" placeholder = "Email" autofocus>
        <input type = "password" id = "loginPassword" class = "form__password" placeholder = "Password">
        <a href = "#/timeline" id = "button" class = "form__button">
          Ingresar
        </a>
      </form>
      <div class='singUp__google'>
          <h3>o registrate con</h3>
          <h3>
          <a id="buttonGmail" href='#/...'><img class="google-icon" src="../assets/seo-and-web.png" alt=""></a>
          </h3>
      </div>
      <div class = "singUp__google">
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

  return container;
};

export default login;
