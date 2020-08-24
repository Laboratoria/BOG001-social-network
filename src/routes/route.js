import initialSession from '../views/initialSession.js';
import formRegister from '../views/form-register.js';
import postAdoption from '../views/post-adoption.js';
import adopt from "../views/adopt.js";
import error404 from "../views/error404.js";



const router = (route) => {
    const content = document.getElementById('root');
    content.innerHTML = '';
    let pedazoDelDom = window.location.hash;

    /* content.appendChild(initialSession()); */
    switch (route) {
        //RUTA LOGIN USER REGISTER
        case '#/':
            pedazoDelDom = initialSession();
            break;

        case '#/postAdoption':
            pedazoDelDom = postAdoption();
            break;
        //RUTA USER NOT REGISTER
        case '#/formRegister':
            pedazoDelDom = formRegister();
            break;
        case '#/adopt':
            pedazoDelDom = adopt();
            break;

        default:
            console.log(route, "Aqui deberia salir la ruta")
            pedazoDelDom = initialSession();
    }
    content.appendChild(pedazoDelDom);

};

export default router;

