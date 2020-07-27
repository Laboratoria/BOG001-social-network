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
          <input id='' type='text' placeholder='Ciudad'>
          <input id='' type='password' placeholder='contraseña'>
          <input id='pass' type='password' placeholder='verificar contraseña'>
          <button id="button" type='button'>Registrar</button>
      </form>
      <div class='singUp__google'>
          <h3>o registrate con</h3>
          <h3>
              <a href='#/...'>G</a>
          </h3>
      </div>
    </section>`;

  const container = document.createElement('div');
  container.innerHTML = view;
  const botonRegistro = container.querySelector('#button');
  botonRegistro.addEventListener('click', () => { createUser(); });
  return container;
};

// const singUp = () => {
//   const createUser = () => {
//     createUserByEmailAndPass('oriana.nohemi22@gmail.com', '123456');
//   };

//   const view = `
//     <section class='singUp'>
//       <h1 class='singUp__title'>
//           Registrate
//       </h1>
//       <form class='singUp__form'>
//           <input id='' type='text' placeholder='username'>
//           <input id='' type='email' placeholder='correo'>
//           <input id='' type='text' placeholder='Ciudad'>
//           <input id='' type='password' placeholder='contraseña'>
//           <input id='' type='password' placeholder='verificar contraseña'>
//           <button onclick="${createUser}" id="button" type='button'>Registrar</button>
//       </form>
//       <div class='singUp__google'>
//           <h3>o registrate con</h3>
//           <h3>
//               <a href='#/...'>G</a>
//           </h3>
//       </div>
//     </section>`;

//   return view;
// };

export default singUp;
