import { createUserByEmailAndPass } from '../firebase/auth';

const singUp = () => {
  const createUser = () => {
    const email = document.getElementById('email').value;
    const pass = document.getElementById('pass').value;
    createUserByEmailAndPass(email, pass);
  };

  const view = `
    <section class='singUp'>
      <h1 class='singUp__title'>
          Registrate
      </h1>
      <form class='singUp__form'>
          <input id='' type='text' placeholder='username'>
          <input id='email' type='email' placeholder='correo'>
          <input id='' type='text' placeholder='ciudad'>
          <input id='pass' type='password' placeholder='contraseña'>
          <button id="button" type='button'>Registrar</button>
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
  return container;
};

export default singUp;
