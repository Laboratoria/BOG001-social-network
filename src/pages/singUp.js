import { createUserByEmailAndPass } from '../firebase/auth';

const singUp = () => {
  const createUser = () => {
    const email = document.getElementById('email').value;
    const pass = document.getElementById('pass').value;
    createUserByEmailAndPass(email, pass);
  };

  const view = `
    <section class='singUp container__form'>
      <h1 class='container__form--title'>
          Registrate
      </h1>
      <form class='singUp__form form'>
          <input id='' type='text' placeholder='username'>
          <input id='email' type='email' placeholder='correo'>
          <input id='' type='text' placeholder='ciudad'>
          <div class="loginPassword--container">
            <input type = "password" id = "loginPassword" class = "form__password" placeholder = "Password">
            <span class="eye__icon" id="eyeIcon"></span>
          </div>
          <a id="button" href="#/..." type='button'>Registrar</a>
      </form>
      <div class='singUp__google'>
          <h3>o registrate con</h3>
          <h3>
          <a href='#/...'><img class="google-icon" src="../assets/seo-and-web.png" alt=""></a>
          </h3>
      </div>
    </section>`;

  const container = document.createElement('div');
  container.innerHTML = view;
  const botonRegistro = container.querySelector('#button');
  botonRegistro.addEventListener('click', () => { createUser(); });
  const eyeIcon = container.querySelector('#eyeIcon');
  const loginPassword = container.querySelector('#loginPassword');

  function mostrarContrasena() {
    if (loginPassword.type === 'password') {
      loginPassword.type = 'text';
    } else {
      loginPassword.type = 'password';
    }
  }

  eyeIcon.addEventListener('click', mostrarContrasena);
  return container;
};

export default singUp;
