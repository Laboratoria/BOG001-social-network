import router from './routes/router';
import start from './pages/start';
import './styles/styles.scss';

const root = document.getElementById('root');

window.addEventListener('load', () => {
  root.innerHTML = start();
});

window.addEventListener('hashchange', () => {
  router(window.location.hash);
});
