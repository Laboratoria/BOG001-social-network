// Este es el punto de entrada de tu aplicacion


import router from "./routes/route.js"
router(window.location.hash);
window.addEventListener('hashchange', () => {
  router(window.location.hash);
  console.log(router);
});


/* export const oneView = () => {
  document.getElementById('root').innerHTML = initialSession();
};
oneView();
 */

/* const twoView = () => {
  document.getElementById('root').innerHTML = postAdoption();
};
twoView();


const threeView = () => {
  document.getElementById('root').innerHTML = formRegister();
};
threeView();
 */



/*
function locationHashChanged() {
  if (location.hash === '#postadoption') {
    postAdoption();
  }
}

window.addEventListener('hashchange', locationHashChanged);
 */