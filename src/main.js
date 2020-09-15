import showFirst from './vistas/inicio.js'
import showLogin from './vistas/registro.js'
import publications from './vistas/publicaciones.js'
import { registry, observer, closeSession, userProfile } from './firebase/firebaseAuth.js'
import { createPost } from './firebase/firestore.js'
import profile from './vistas/perfil.js'

window.addEventListener('hashchange', () => {
    router(window.location.hash);
});

window.addEventListener('DOMContentLoaded', () => {
    router('#/')
    document.querySelector("#contenedor-registro").style.visibility ="hidden";
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
            profile();
            userProfile();
            return console.log('Perfil');
        break;

        default:
            return console.log('No encontrado');
    }
}

const modalInicio = () => {
    let modal = document.querySelector("#contenedor-registro");
    let btn = document.getElementById("registry");
    let span = document.getElementsByClassName("startSession")[0];
    let inicio = document.querySelector('.inicioSession');
    
    btn.onclick =  () => {
        modal.style.visibility= "visible";
        inicio.style.visibility= "hidden";
    }
    span.onclick =  () => {
        modal.style.visibility = "hidden";
        inicio.style.visibility= "visible";
    }
}