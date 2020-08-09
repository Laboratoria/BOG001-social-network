import { auth } from '../firebase/auth';

const profile = () => {
  const view = `
    <section class="profile">
      <img class="profile__imageBackground" src="../assets/user.jpg">
      <img class="profile__imageUser" src="../assets/perfil.png">
      <div class="profile__info">
      <h2>Nombre</h2>
      <p>Descripcion Usuario</p>
      </div>
      <div class="profile__sportsUser">
        <img class="profile__sport" src="../assets/perfil.png">
        <img class="profile__sport" src="../assets/perfil.png">
        <img class="profile__sport" src="../assets/perfil.png">
      </div>
      <button>Editar perfil<button>
    </section>
  `;

  const container = document.createElement('div');
  container.innerHTML = view;

  return container;
};


export default profile;
