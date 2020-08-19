// Este es el punto de entrada de tu aplicacion

import initialSession from './views/initial-session.js';
/*  import formRegister from "./views/form-register.js"; */
import postAdoption from './views/post-adoption.js';
/* import adopt from "./views/adopt.js";
import error404 from "./views/error404.js";   */

const oneView = () => {
  document.getElementById('root').innerHTML = initialSession();
};
oneView();

const twoView = () => {
  document.getElementById('root').innerHTML = postAdoption();
};
twoView();


function locationHashChanged() {
  if (location.hash === '#postadoption') {
    postAdoption();
  }
}

window.addEventListener('hashchange', locationHashChanged);
