
import formRegister from '../views/form-register.js';
import postAdoption from '../views/post-adoption.js';
import adopt from "../views/adopt.js";
import error404 from "../views/error404.js";

let content = document.getElementById('root');

const router = (route) => {
    content.textContent = '';
    switch (route) {
        //RUTA LOGIN USER REGISTER
        case '#/postAdoption':
            return content.appendChild(postAdoption());
        //RUTA USER NOT REGISTER
        case '#/formRegister':
            return content.appendChild(formRegister());

        //RUTA 
    }
};

export default router;

