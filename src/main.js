import router from './routes/router';
// import start from './pages/start';
import { validateSession } from './firebase/auth';
import headerRouter from './routes/headers';
import { setFeedbackHidingHandler } from './utils/error-message-handler';

import './firebase/init';
import './styles/styles.scss';

const root = document.getElementById('root');
const header = document.getElementById('header');

window.addEventListener('load', () => {
  header.insertAdjacentElement('beforeend', headerRouter(window.location.hash));
  root.insertAdjacentElement('beforeend', router(window.location.hash));
  validateSession();
});

window.addEventListener('hashchange', () => {
  header.innerHTML = '';
  header.insertAdjacentElement('beforeend', headerRouter(window.location.hash));
  root.innerHTML = '';
  root.insertAdjacentElement('beforeend', router(window.location.hash));
  validateSession();
});

setFeedbackHidingHandler();
