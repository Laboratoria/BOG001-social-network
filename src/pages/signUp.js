import { createUserByEmailAndPass, loginUserGoogle } from '../firebase/auth';

const signUp = () => {
  const createUser = () => {
    const email = document.getElementById('email').value;
    const pass = document.getElementById('loginPassword').value;
    createUserByEmailAndPass(email, pass);
  };

  const view = `
    <section class='signUp container__form'>
      <h1 class='container__form--title'>
          Registrate
      </h1>
      <form id="formSignUp" class='form'>
        <div class="form-group">
          <input id='username' type='text' placeholder='username'>
          <label for="name">Username</label>
        </div>
        <div class="form-group">
          <input id='email' type='email' placeholder='Correo'>
          <label for="name">Correo</label>
        </div>
        <div class="form-group">
          <input id='city' type='text' placeholder='Ciudad'>
          <label for="name">Ciudad</label>
        </div>
        <div class="form-group loginPassword--container">
          <input id = "loginPassword" type='password' placeholder='Contraseña'>
          <label for="name">Contraseña</label>
          <span class="eye__icon" id="eyeIcon"></span>
        </div>
        <button id="button" type='submit'>Registrar</button>
      </form>
      <div class = "signUp__google">
      <h3> ¿Ya tienes cuenta?</h3>
      <a href = "#/login" id="" class="login__register">Inicia Sesion</a>
      </div>
      </div>
    </section>`;

  const container = document.createElement('div');
  container.innerHTML = view;
  const botonRegistro = container.querySelector('#formSignUp');
  const signupGoogle = container.querySelector('#signupGoogle');
  signupGoogle.addEventListener('click', (e) => {
    e.preventDefault();
    loginUserGoogle();
  });
  botonRegistro.addEventListener('submit', (e) => {
    e.preventDefault();
    createUser();
  });
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

export default signUp;
