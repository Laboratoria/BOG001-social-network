import showFirst from './vistas/inicio.js'
import showLogin from './vistas/registro.js'

window.addEventListener('hashchange', () => {
    router(window.location.hash)

});


window.addEventListener('load', () => {
    router('#/')
    document.querySelector(".modal").style.visibility ="hidden";

});

let content = document.getElementById("container"); 

const router = (route) => {
    content.innerHTML = '';
    switch(route) {
        case '#/': 
        showLogin();
        registry();
        modalInicio();
        observer();
        break;
        case '#/Home': {
        showFirst();
        closeSession();
        break;
        }
        case '#/publicaciones':
            return console.log('Publicaciones');
        case '#/perfil':
            return console.log('Perfil');
        default:
            return console.log('No encontrado');
    }
}

const registry= () => {
// Firebase de registro 

const registro= document.querySelector('#registro');
registro.addEventListener ('submit', (e) =>{
    e.preventDefault();
    const email = document.querySelector('#input-correo').value;
    const pws1= document.querySelector('#input-psw1').value;
    const pws2= document.querySelector('#input-psw2').value;
    const message= document.querySelector('#errorMessage');
    auth
    .createUserWithEmailAndPassword(email, pws1)
    .then (()=> {
        verify();
    })
    .catch(function(error){
    let errorCode = error.code;
    let errorMessage = error.message;
    message.innerHTML=(errorMessage);
    })
});

// Firebase de inicio de sesion

const signInForm= document.querySelector('#Login');
signInForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const loginEmail = document.querySelector('#login-email').value;
    const loginPws= document.querySelector('#login-psw').value;
    const messageSing= document.querySelector('.messageSing');
    console.log(loginEmail,loginPws);
    auth
    .signInWithEmailAndPassword(loginEmail, loginPws)
    .then (( ) => {
        router('#/Home');
    })
    .catch(function(error){
    let errorCode = error.code;
    let errorMessageSing = error.message;
    messageSing.innerHTML=(errorMessageSing);
    })
});
}

const observer = () => {
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
    console.log('existe usuario');
      // User is signed in.
        let displayName = user.displayName;
        let email = user.email;
        let emailVerified = user.emailVerified;
        let photoURL = user.photoURL;
        let isAnonymous = user.isAnonymous;
        let uid = user.uid;
        let providerData = user.providerData;
      // ...
    } else {
      // User is signed out.
        console.log('vuelva a iniciar sesión');
    }
});
}
observer();

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

const closeSession = () => {
    firebase.auth().signOut()
    .then(function(){
        console.log('cerrando sesion');
    }) 
    .catch(function(error){
        console.log(error);
    })
}
    
const verify = () => {
let user = firebase.auth().currentUser;

user.sendEmailVerification().then(function() {
  // Email sent.
}).catch(function(error) {
  // An error happened.
});
} 

/*travel experiences
live traveling
time to travel*/