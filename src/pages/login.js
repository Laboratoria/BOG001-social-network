import { loginUser, loginUserGoogle } from '../firebase/auth';
import { saveUser } from '../firebase/database';
import { database } from '../firebase/init';

const login = () => {
  const view = `
    <section class="login container__form">
      <h1 class="login__title container__form--title"> Inicia sesión</h1>
      <form id="loginForm" class = "form">
      <div class="form-group">
        <input type="email" id="email" class="form__email" placeholder="Correo" autofocus required>
        <label for="email">Correo</label>
      </div>
      <div class="form-group password--container">
        <input type="password" id="password" class="form__password" placeholder="Contraseña" required>
        <label for="password">Contraseña</label>
        <span class="eye__icon" id="eyeIcon"></span>
        </div>
        <button id="button" class="form__button" type="submit">
          Ingresar
        </button>
        <p id="errors"></p>
      </form>
      <div class="signUp__google">
          <h3>o registrate con</h3>
          <button id="buttonGmail" type="button"><img class="google-icon" src="../assets/seo-and-web.png" alt=""></button>
      </div>
      <div class="signUp__google">
      <h3> ¿Nuevo usuario?</h3>
      <a href = "#/sign-up" id="" class="login__register">Registrate</a>
      </div>
    </section>
  `;

  const container = document.createElement('div');
  container.innerHTML = view;
  const botonRegistro = container.querySelector('#button');
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

  const printError = (value) => {
    container.querySelector('#errors').innerHTML = value;
  };

  // valida si hay una sesion
  const validateSession = () => {
    if (['#/', '#/login', '#/sign-up'].includes(window.location.hash)) {
      return;
    }
    const session = localStorage.getItem('session');
    if (!session || !JSON.parse(session).user) {
      window.location.href = '#/login';
    }
  };

  const loginUsers = () => {
    const email = document.getElementById('email').value;
    const pass = document.getElementById('password').value;
    loginUser(email, pass).then((userCredential) => {
      localStorage.setItem('session', JSON.stringify(userCredential));
      window.location.href = '#/timeline';
      setTimeout(validateSession, 3000);
    }).catch((error) => {
      printError(error);
    });
  };

  const loginGoogle = () => {
    loginUserGoogle().then((userCredential) => {
      const user = {
        id: userCredential.user.uid,
        usuario: userCredential.user.displayName,
        correo: userCredential.user.email,
        photo: userCredential.user.photoURL,
      };
      const users = database.collection('users');
      const consulta = users.where('id', '==', user.id).get();
      consulta.then((res) => {
        if (res.empty) {
          saveUser(user);
        } else {
          res.forEach((doc) => {
            console.log(doc.id, '=>', doc.data());
          });
        }
      }).catch((err) => {
        console.error(err);
      });
      setTimeout(validateSession, 3000);
      window.location.href = '#/timeline';
    }).catch((error) => {
      printError(error);
    });
  };

  botonRegistro.addEventListener('click', (e) => { e.preventDefault(); loginUsers(); });
  buttonGmail.addEventListener('click', (e) => { e.preventDefault(); loginGoogle(); });
  eyeIcon.addEventListener('click', mostrarContrasena);

  return container;
};
export default login;
