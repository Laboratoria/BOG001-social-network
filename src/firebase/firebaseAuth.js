import { router } from '../main.js'

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
            alert(errorCode);
            let errorMessage = error.message;
            alert(errorMessage);
        })
    });
    
    // Firebase de inicio de sesion
    
    const signInForm= document.querySelector('#Login');
    signInForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const loginEmail = document.querySelector('#login-email').value;
        const loginPws= document.querySelector('#login-psw').value;
        //console.log(loginEmail,loginPws);
        firebase.auth().signInWithEmailAndPassword(loginEmail, loginPws)
        .then ((result) => {
            let emailVerified = result.user.emailVerified;
            //const user = JSON.parse(result.user);
            let user = result.user;
            if(emailVerified){
                localStorage.setItem('activeUserName', user.displayName);
                localStorage.setItem('activeUserEmail', user.email);
                localStorage.setItem('activeUserPhoto', user.photoURL);
                console.log(result.user);
                router('#/Home');
            }
            else{
                alert('Debes verificar tu correo');
            }
        })
        .catch((error) => {
            let errorCode = error.code;
            alert(errorCode);
            let errorMessageSign = error.message;
            console.log(errorMessageSign);
        })
    });
    
    let provider = new firebase.auth.GoogleAuthProvider();
    const signWithGoogle = document.querySelector ('.google-btn');
    signWithGoogle.addEventListener('click', (e) => {
        firebase.auth().signInWithPopup(provider).then((result) => {
            /* console.log(result.user); */
            
            let emailVerified = result.user.emailVerified;
            let user = result.user;
            if(emailVerified){
                localStorage.setItem('activeUserName', user.displayName);
                localStorage.setItem('activeUserEmail', user.emailVerified);
                localStorage.setItem('activeUserPhoto', user.photoURL);
                router('#/Home');
            }
            else{
                alert('Debes verificar tu correo');
            }
        })
    });
}

export const observer = () => {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            console.log('Existe Usuario Activo');
            // User is signed in.    
            //console.log(user.emailVerified);
            let emailVerified = user.emailVerified;
        } 
        else {
            // User is signed out.
            console.log('vuelva a iniciar sesión');
        }
    });
}

export const userProfile = () => {
    let user = firebase.auth().currentUser;
    if (user != null) {
        const contentProfile= document.getElementById('containerProfile');
        contentProfile.innerHTML = '';
        user.providerData.forEach(function (profile) {
            contentProfile.innerHTML += 
            `<p>Name: ${profile.displayName}</p>
            <p>Email: ${profile.email}</p>
            <img src= "${profile.photoURL}" style="max-width: 100%;">`
        });
    }
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
    user.sendEmailVerification()
    
    .then(() => {
        console.log('Enviando correo...');
        // Email sent.
    })
    .catch((error) => {
        // An error happened.
        console.log(error);
    });
}