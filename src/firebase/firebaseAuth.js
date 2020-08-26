import {router} from '../main.js'

export const registry= () => {
    // Firebase de registro 
    const registro= document.querySelector('#registro');
    registro.addEventListener ('submit', (e) => {
        e.preventDefault();
        const email = document.querySelector('#input-correo').value;
        const pws1= document.querySelector('#input-psw1').value;
        const pws2= document.querySelector('#input-psw2').value;
        
        firebase.auth().createUserWithEmailAndPassword(email, pws1)
        .then (() => {
            verify();
        })
        .catch((error) => {
        let errorCode = error.code;
        let errorMessage = error.message;
        console.log(errorMessage);
        })
    });
    
    // Firebase de inicio de sesion
    
    const signInForm= document.querySelector('#Login');
    signInForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const loginEmail = document.querySelector('#login-email').value;
        const loginPws= document.querySelector('#login-psw').value;
        console.log(loginEmail,loginPws);
        firebase.auth().signInWithEmailAndPassword(loginEmail, loginPws)
        .then ((result) => {
            let emailVerified = result.user.emailVerified;
            if(emailVerified){
                router('#/Home');
            }
            else{
                console.log('Debes verificar tu correo');
            }
        })
        .catch((error) => {
        let errorCode = error.code;
        let errorMessageSign = error.message;
        console.log(errorMessageSign);
        })
    });
    }
    
    export const observer = () => {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            console.log('Existe Usuario Activo');
            // User is signed in.
        
        let displayName = user.displayName;
        let email = user.email;
        
        console.log('########');
        console.log(user.emailVerified);
        console.log('########');
    
        let emailVerified = user.emailVerified;
        let photoURL = user.photoURL;
        let isAnonymous = user.isAnonymous;
        let uid = user.uid;
        let providerData = user.providerData;
        // ...
        } 
        else {
          // User is signed out.
            console.log('vuelva a iniciar sesión');
        }
    });
    }
    
    
    //Cerrar Sesión
    export const closeSession = () => {
        firebase.auth().signOut()
        .then(() => {
            console.log('Saliendo...');
        }) 
        .catch((error) => {
            console.log(error);
        })
    }
    
    //Verificación de usuario
    export const verify = () => {
    let user = firebase.auth().currentUser;
    user.sendEmailVerification().then(() => {
        console.log('Enviando correo...');
        // Email sent.
    }).catch((error) => {
        // An error happened.
        console.log(error);
    });
    }

