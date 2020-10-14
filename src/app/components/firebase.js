
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
            .then(userCredentials => {
                
                console.log('check!')
                window.location.hash = '#/home'
            })
            .catch((e) => {
                console.log(e)
                window.location.hash = '#/error';
            })

  console.log("autenticando")
};