import { router } from '../main.js'

export const createPost = () => {
    let publicar = document.querySelector(".publicar");
    publicar.addEventListener('click', (e) => {
        e.preventDefault();
        
        let title = document.getElementById('title-post').value;
        let description = document.getElementById('description').value;
        const urlPost = localStorage.getItem("imgNewPost");
        const createdAt = firebase.firestore.FieldValue.serverTimestamp();
        console.log(createdAt);

        /*const firestore = firebase.firestore(); 
        const ref = firestore.collection("fechaYhora").doc(); 
        ref.set ({ 
            createdAt: firebase.firestore.FieldValue.serverTimestamp() 
        })
        .then (() => { 
        console.log ('Listo') 
        }) 
        .catch (error => { 
        console.error (error) 
        })*/

        //Inicialize Cloud Firestore throught Firebase
        firebase.firestore().collection("publications").add({
            title: title,
            description: description,
            url: urlPost,
            createdAt: createdAt,
        })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {console.error("Error adding document: ", error);
        });
    })
    
    let contenedor = document.getElementById('containerPost');
    firebase.firestore().collection("publications").onSnapshot((querySnapshot) => {
        contenedor.innerHTML = '';
        querySnapshot.forEach((doc) => {
            const id = doc.id;
            
            //console.log(id);
            //console.log(typeof doc.data().createdAt);
            contenedor.innerHTML += 
            `<div class = "cardPost">
            <h1>${doc.data().title}</h1>
            <p>${doc.data().description}</p>
            <img src="${doc.data().url}">
            <p>${doc.data().createdAt}</p>
            <button class="btn-edition">Editar</button>
            <button class="btn-delete" data-id="${doc.id}">Eliminar</button>
            </div>`
            const deletePost = id => firebase.firestore().collection("publications").doc(id).delete();
            const btnsDelete = document.querySelectorAll('.btn-delete');
            btnsDelete.forEach(btn => {
                btn.addEventListener('click', async (e) => {
                    //console.log(e.target.dataset.id);
                    await deletePost(e.target.dataset.id);
                })
            })    
    });
});
};







