import router from './routes/router';
// import start from './pages/start';

import './firebase/init';
import './styles/styles.scss';

const root = document.getElementById('root');

window.addEventListener('load', () => {
  root.insertAdjacentElement('beforeend', router(window.location.hash));
});

window.addEventListener('hashchange', () => {
  root.innerHTML = '';
  root.insertAdjacentElement('beforeend', router(window.location.hash));
});
