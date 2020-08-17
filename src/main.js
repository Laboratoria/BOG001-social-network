import showFirst from './vistas/inicio.js'
import showLogin from './vistas/registro.js'

window.addEventListener('hashchange', () => {
    router(window.location.hash)

});
window.addEventListener('load', () => {
    router('#/')
});

let content = document.getElementById("container"); 

const router = (route) => {
    content.innerHTML = '';
    switch(route) {
        case '#/': 
        showLogin();
        addEvent();
        break;
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

const addEvent= () => {
// Firebase de registro 

const registro= document.querySelector('#registro');
registro.addEventListener ('submit', (e) =>{
    e.preventDefault();
    const email = document.querySelector('#input-correo').value;
    const pws1= document.querySelector('#input-psw1').value;
    const pws2= document.querySelector('#input-psw2').value;

    auth
    .createUserWithEmailAndPassword(email, pws1)
    .then(userCredential=>{
    console.log('sing up');
    })
});

// Firebase de inicio de sesion

const signInForm= document.querySelector('#Login');
signInForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const loginEmail = document.querySelector('#login-email').value;
    const loginPws= document.querySelector('#login-psw').value;
    console.log(loginEmail,loginPws);
    auth
    .signInWithEmailAndPassword(loginEmail, loginPws)
    .then(userCredential=>{
    console.log('sing up');
    })
});
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

