
export const auth = firebase.auth();
export const db = firebase.firestores();
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

export function autenticar(email, password){
  auth.signInWithEmailAndPassword(correo, contrasena)
            .then(() => {
                console.log('check!')
                window.location.hash = '#/home'
            })
            .catch(() => {
                console.log('Hay un error')
                window.location.hash = '#/';
            })

  console.log("crear la cuenta")
};