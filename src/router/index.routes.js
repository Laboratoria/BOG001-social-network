import inicio from '..vistas/home'

let content = document.getElementById("container"); 

const router = (route) => {
    content.innerHTML = '';
    switch(route) {
        case '#/Home': {
            return content.appendChild(inicio())
        }
        case '#/publicaciones':
            return console.log('Publicaciones');
        case '#/perfil':
            return console.log('Perfil');
        default:
            return console.log('No encontrado');
    }
}

export {router};