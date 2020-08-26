import showFirst from './vistas/inicio.js'
import showLogin from './vistas/registro.js'
import publications from './vistas/publicaciones.js'
import {registry, observer, closeSession} from './firebase/firebaseAuth.js'
import createPost from './firebase/firestore.js'


window.addEventListener('hashchange', () => {
    router(window.location.hash);
});

window.addEventListener('load', () => {
    router('#/')
    document.querySelector(".modal").style.visibility ="hidden";
});

let content = document.getElementById("container"); 

export const router = (route) => {
    content.innerHTML = '';
    switch(route) {
        case '#/':
            closeSession();
            showLogin();
            registry();
            modalInicio();
            observer();
        break;
        
        case '#/Home': 
            showFirst();
        break;
        
        case '#/Publicaciones': 
            publications();
            createPost();
        break;
        case '#/Perfil':
            return console.log('Perfil');
        break;

        default:
            return console.log('No encontrado');
    }
}

const modalInicio = () => {

    let modal = document.querySelector(".modal");
    let btn = document.getElementById("btninicio-sesion");
    let span = document.getElementsByClassName("close")[0];
    
    btn.onclick =  () => {
        modal.style.visibility= "visible";
        registro.style.visibility= "hidden";
    }
    span.onclick =  () => {
        modal.style.visibility = "hidden";
        registro.style.visibility= "visible";
    }
    }
