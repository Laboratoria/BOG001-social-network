import start from '../pages/start';
import login from '../pages/login';
import signUp from '../pages/signUp';
import timeline from '../pages/timeline';
import event from '../pages/event';
import error404 from '../pages/error404';

const router = (route) => {
  switch (route) {
    case '#/':
      return start();
    case '#/login':
      return login();
    case '#/sign-up':
      return signUp();
    case '#/timeline':
      return timeline();
    case '#/event':
      return event();
    default:
      return error404();
  }
};

export default router;
