import { getUserProfile } from '../firebase/database';
import { profileDefault, sportIcons } from '../utils/imagesDefault';

const profile = async () => {
  let user;
  await getUserProfile().then((snapshot) => {
    if (snapshot.empty) {
      return;
    }
    snapshot.forEach((element) => {
      user = element.data();
    });
  }).catch((err) => {
    console.log('Error getting documents', err);
  });

  const userProfile = (photo) => {
    if (photo) {
      return photo;
    }
    return profileDefault.profileUser;
  };

  const getSportIcon = (sport) => {
    const icon = sportIcons[sport];
    if (icon) {
      return icon;
    }
    return 'assets/thinking.png';
  };

  const view = `
    <img class="profile__imageBackground" src="assets/user.jpg">
    <img class="profile__imageUser" src="${userProfile(user.photo)}">
    <div class="profile__info">
    <h2><span>Usuario: </span> ${user.usuario}</h2>
    <h2><span>Ciudad: </span> ${user.ciudad}</h2>
    </div>
    <div class="profile__sportsUser">
      <img class="profile__sport" src="${getSportIcon(user.deporte)}">
      <h3>${user.deporte}</h3>
    </div>
    <button class="profile__edit--btn" id="edit">Editar perfil</button>
  `;


  const container = document.createElement('section');
  container.setAttribute('class', 'profile');
  container.innerHTML = view;
  container.querySelector('#edit').addEventListener('click', () => {
    window.location.href = `#/editUser?userId=${user.id}`;
  });

  return container;
};

export default profile;
