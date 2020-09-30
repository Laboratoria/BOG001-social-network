// Your web app's Firebase configuration

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDmzAmJMq1YRvEJGVZ43qWHmqezpOnt-B0",
  authDomain: "new-style-a6dc8.firebaseapp.com",
  databaseURL: "https://new-style-a6dc8.firebaseio.com",
  projectId: "new-style-a6dc8",
  storageBucket: "new-style-a6dc8.appspot.com",
  messagingSenderId: "760891391735",
  appId: "1:760891391735:web:e4045de7247eaa3cd41df2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth(); // con esta constante le estoy diciendo al firebase que cuando le envie los datos quiero que los valide
/*auth
.createUserWithEmailAndPassword(usuario, contrasena)
.then(credencialUsuario => {
    console.log("vamos por buen camino")
})*/

export firebase