import router from './routes/router';
import start from './pages/start';
import { validateSession } from './firebase/auth';
import headerRouter from './routes/headers';
import { setFeedbackHidingHandler } from './utils/feedback-handler';
import feedback from './templates/feedback';
import footerTemplate from './templates/footer';

import './firebase/init';
import './styles/styles.scss';

const root = document.getElementById('root');
const header = document.getElementById('header');
const footer = document.getElementById('footer');

window.addEventListener('load', () => {
  window.location.hash = '/';
  root.insertAdjacentElement('beforeend', start());
  setTimeout(() => {
    window.location.hash = '/timeline';
    validateSession();
  }, 1500);
});

window.addEventListener('hashchange', async () => {
  if (window.location.hash !== '#/') {
    footer.innerHTML = '';
    header.innerHTML = '';
    header.insertAdjacentElement('beforeend', headerRouter(window.location.hash));
  }

  root.innerHTML = '';
  root.insertAdjacentElement('beforeend', await router(window.location.hash));
  validateSession();

  if (window.location.hash === '#/timeline') {
    footer.innerHTML = footerTemplate();
  }
});

feedback();
setFeedbackHidingHandler();
