import start from '../pages/start';
import login from '../pages/login';
import signUp from '../pages/signUp';
import timeline from '../pages/timeline';
import event from '../pages/createEvent';
import error404 from '../pages/error404';
import eventEdit from '../pages/eventEdit';
import profile from '../pages/profile';

const router = async (route) => {
  let editEvent = '';
  if (route.includes('#/eventEdit?editEvent=', 0)) {
    editEvent = route.substr(25);
  }
  switch (route) {
    case '#/':
      return start();
    case '#/login':
      return login();
    case '#/sign-up':
      return signUp();
    case '#/timeline':
      return timeline();
    case '#/profile':
      return profile();
    case '#/createEvent':
      return event();
    case `#/eventEdit?editEvent=${editEvent}`:
      return eventEdit(editEvent);
    default:
      return error404();
  }
};

export default router;
