import showFirst from './vistas/inicio.js'

window.addEventListener('hashchange', () => {
    router(window.location.hash)

});

let content = document.getElementById("container"); 

const router = (route) => {
    content.innerHTML = '';
    switch(route) {
        case '#/Home': {
            return content.appendChild(showFirst());
        }
        case '#/publicaciones':
            return console.log('Publicaciones');
        case '#/perfil':
            return console.log('Perfil');
        default:
            return console.log('No encontrado');
    }
}


let modal = document.getElementById("myModal");

let btn = document.getElementById("btninicio-sesion");

let span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

