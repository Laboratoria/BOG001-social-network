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
            if(emailVerified){
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
    console.log(result.user);
    
    let emailVerified = result.user.emailVerified;
    localStorage.setItem('activeUser', emailVerified);
    if(emailVerified){
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

export const changeStatus = () =>  {
firebase.auth().onAuthStateChanged( firebaseUser => {
    if(firebaseUser) {
        console.log(firebaseUser);
    } 
    else {
        console.log('no logueado');
    }
})
};



