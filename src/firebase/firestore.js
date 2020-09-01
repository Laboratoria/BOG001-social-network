import { router } from '../main.js'

export const createPost = () => {
    let publicar = document.querySelector(".publicar");
    publicar.addEventListener('click', (e) => {
        e.preventDefault();
        
        let title = document.getElementById('title-post').value;
        let description = document.getElementById('description').value;
        const urlPost = localStorage.getItem("imgNewPost");
        //console.log(urlPost);

        const firestore = firebase.firestore(); 
        const ref = firestore.collection("fechaYhora").doc(); 
        ref.set ({ 
            createdAt: firebase.firestore.FieldValue.serverTimestamp() 
        })
        .then (() => { 
        console.log ('Listo') 
        }) 
        .catch (error => { 
        console.error (error) 
        })

        //Inicialize Cloud Firestore throught Firebase
        firebase.firestore().collection("publications").add({
            title: title,
            description: description,
            url: urlPost,
            createdAt: firebase.firestore.FieldValue.serverTimestamp ()
        })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {console.error("Error adding document: ", error);
        });
    })
    
    let contenedor = document.getElementById('containerPost');
    firebase.firestore().collection("publications").onSnapshot((querySnapshot) => {
        let data = [];
        contenedor.innerHTML = '';
        querySnapshot.forEach((doc) => {
            data.push(doc.data());
            //console.log(data);
            contenedor.innerHTML += 
            `<div class = "cardPost">
            <h1>${doc.data().title}</h1>
            <p>${doc.data().description}</p>
            <img src="${doc.data().url}">
            <p>${doc.data().createdAt.toDate()}</p>
            </div>`
    });
});
};







