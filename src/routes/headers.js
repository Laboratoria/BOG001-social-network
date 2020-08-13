import header from '../templates/header';
import headerTimeline from '../templates/headerTimeline';

const headerRouter = (route) => {
  switch (route) {
    case '#/login':
      return header();
    case '#/sign-up':
      return header();
    case '#/timeline':
      return headerTimeline();
    case '#/profile':
      return headerTimeline();
    case '#/createEvent':
      return headerTimeline();
    default:
      return header();
  }
};

export default headerRouter;
