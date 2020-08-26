const createPost = () => {
    let publicar = document.querySelector(".publicar");
    publicar.addEventListener('click', (e) => {
        e.preventDefault();
        
        let title = document.getElementById('title-post').value;
        let description = document.getElementById('description').value;

        //Inicialize Cloud Firestore throught Firebase
        firebase.firestore().collection("publications").add({
            Titulo: title,
            descripcion: description,
        })

        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {console.error("Error adding document: ", error);
        });
    })
};

firebase.firestore().collection("users").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
    });
});

export default createPost;