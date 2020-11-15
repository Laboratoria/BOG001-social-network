export const auth = firebase.auth();
export const db = firebase.firestore();
export function createUser(email, password) {
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
export function autenticar(email, password) {
  auth
    .signInWithEmailAndPassword(email, password)
    .then(userCredentials => {
      console.log(userCredentials)
      return userCredentials;
    })
    .catch((e) => {
      console.log(e)
      window.location.hash = '#/error';
    })

  console.log("autenticando")
};

export function loginListener() {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      window.location = "#/createPost"
    } else {
      window.location = "#/login"
    }
  });
}

export function signOffSesion() {
  firebase.auth().signOut()
    .then(cerrando => {
      alert("Ha cerrado sesión correctamente")
      window.location.hash = "#/";
      return cerrando;
    }).catch(function (error) {
      alert("error al cerrar sesión");
    });
}


export const getPost = () => db.collection("posts").get()
  .then(function (querySnapshot) {
    return querySnapshot
    })

  .catch(function (error) {
    console.log("Error getting documents: ", error);
  })

