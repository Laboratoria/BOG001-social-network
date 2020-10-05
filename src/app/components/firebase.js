

export function createUser(email, password){
   firebase.auth().createUserWithEmailAndPassword(email, password)
   .then(userCredentials => {
     userCredentials
   })
   .catch((error) => {
    console.log(error);
   })
  console.log("desesperada")
}

