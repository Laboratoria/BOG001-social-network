import router from './routes/router';
import start from './pages/start';
import { validateSession } from './firebase/auth';
import headerRouter from './routes/headers';
import { setFeedbackHidingHandler } from './utils/feedback-handler';
import feedback from './templates/feedback';

import './firebase/init';
import './styles/styles.scss';

const root = document.getElementById('root');
const header = document.getElementById('header');

window.addEventListener('load', () => {
  window.location.hash = '/';
  root.insertAdjacentElement('beforeend', start());
  setTimeout(() => {
    window.location.hash = '/timeline';
    validateSession();
  }, 1500);
});

window.addEventListener('hashchange', () => {
  if (window.location.hash !== '#/') {
    header.innerHTML = '';
    header.insertAdjacentElement('beforeend', headerRouter(window.location.hash));
  }
  root.innerHTML = '';
  root.insertAdjacentElement('beforeend', router(window.location.hash));
  validateSession();
});

feedback();
setFeedbackHidingHandler();
