
export const auth = firebase.auth();
//export const db = firebase.firestores();
export function createUser(email, password){
   firebase.auth().createUserWithEmailAndPassword(email, password)
   .then(userCredentials => {
     userCredentials
   })
   .catch((error) => {
    console.log(error);
   })
  console.log("desesperada")
};


//con este metodo autenticamos la contraseña y password
export function autenticar(email, password){
  auth
  .signInWithEmailAndPassword(email, password)
            .then(userCredentials => { //ojo guardar el usercredential en el local o sessionstorage, cuando se carga las vistas revisar que en local storage verifique la sesion
              //guardarlo en el login y en el registro
                
                console.log('check!')
                window.location.hash = '#/createPost';
            })
            .catch((e) => {
                console.log(e)
                window.location.hash = '#/error';
            })

  console.log("autenticando")
};


// con este metodo permitimos a los usuarios registrados ingresar sin volver hacer login
function signedIn  (email, password) {
firebase.auth().onAuthStateChanged(function(email, password) {
  if (user) {
    // User is signed in.
    var displayName = user.displayName;
    var email = user.email;
    var emailVerified = user.emailVerified;
    var photoURL = user.photoURL;
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    var providerData = user.providerData;
    // ...
  } else {
    // User is signed out.
    // ...
  }
});
}