import router from './routes/router';
import headerRouter from './routes/headers';
import feedback from './templates/feedback';
import start from './pages/start';
import { validateSession } from './firebase/auth';
import { setFeedbackHidingHandler } from './utils/feedback-handler';

import './firebase/init';
import './styles/styles.scss';

const root = document.getElementById('root');

window.addEventListener('load', () => {
  window.location.hash = '/';
  root.insertAdjacentElement('beforeend', start());
  setTimeout(() => {
    window.location.hash = '/timeline';
    validateSession();
  }, 1500);
});

window.addEventListener('hashchange', async () => {
  root.innerHTML = '';
  if (window.location.hash !== '#/') {
    root.insertAdjacentElement('beforeend', headerRouter(window.location.hash));
  }
  root.insertAdjacentElement('beforeend', await router(window.location.hash));
  validateSession();
});

feedback();
setFeedbackHidingHandler();
