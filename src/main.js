import router from './routes/router';
<<<<<<< HEAD
//import start from './pages/start';
=======
// import start from './pages/start';
>>>>>>> bddde8f0fd86eadb16134a317ff764b102de3a1d

import './firebase/init';
import './styles/styles.scss';

const root = document.getElementById('root');

<<<<<<< HEAD

// window.addEventListener('load', () => {
//   root.innerHTML = start();
// });
 
=======
>>>>>>> bddde8f0fd86eadb16134a317ff764b102de3a1d
window.addEventListener('load', () => {
  root.insertAdjacentElement('beforeend', router(window.location.hash));
});

window.addEventListener('hashchange', () => {
  root.innerHTML = '';
  root.insertAdjacentElement('beforeend', router(window.location.hash));
});
