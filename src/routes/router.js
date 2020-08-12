import start from '../pages/start';
import login from '../pages/login';
import signUp from '../pages/signUp';
import timeline from '../pages/timeline';
import event from '../pages/createEvent';
import error404 from '../pages/error404';
import editEventComponent from '../pages/editEvent';
import profile from '../pages/profile';
import editUser from '../pages/editUser';

let userID;
if (localStorage.getItem('session')) {
  const infLocalStorage = localStorage.getItem('session');
  const convetInfoJson = JSON.parse(infLocalStorage);
  userID = convetInfoJson.user.uid;
}

const router = async (route) => {
  let eventId = '';
  if (route.includes('#/editEvent?eventId=', 0)) {
    eventId = route.substr(20);
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
    case `#/editUser?userId=${userID}`:
      return editUser(userID);
    case '#/event':
      return event();
    case `#/editEvent?eventId=${eventId}`:
      return editEventComponent(eventId);
    default:
      return error404();
  }
};

export default router;
