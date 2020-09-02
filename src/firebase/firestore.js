import { router } from '../main.js'

export const createPost = () => {
    let publicar = document.querySelector(".publicar");
    publicar.addEventListener('click', (e) => {
        e.preventDefault();
        
        let title = document.getElementById('title-post').value;
        let description = document.getElementById('description').value;
        const urlPost = localStorage.getItem('imgNewPost');
        
        const createdAt = firebase.firestore.FieldValue.serverTimestamp();
        console.log(createdAt);
        
        let editStatus = false;
        if(!editStatus) {
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
        }
    })
        
    firebase.firestore().collection("publications").onSnapshot((querySnapshot) => {
        let contenedor = document.getElementById('containerPost');
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
        <button class="btn-edition" data-id="${id}">Editar</button>
        <button class="btn-delete" data-id="${id}">Eliminar</button>
        </div>`

        const deletePost = id => firebase.firestore().collection("publications").doc(id).delete();
        const btnsDelete = document.querySelectorAll('.btn-delete');
        btnsDelete.forEach(btn => {
            btn.addEventListener('click', async (e) => {
                //console.log(e.target.dataset.id);
                await deletePost(e.target.dataset.id);
            })
        });


        //Funcion editar
        const getPost = (id) => firebase.firestore().collection("publications").doc(id).get();
        const btnsEditions = document.querySelectorAll('.btn-edition');
        btnsEditions.forEach(btn => {
            btn.addEventListener('click', async (e) => {
                //console.log(e.target.dataset.id);
                const hola = await getPost(e.target.dataset.id);
                const formPost = document.getElementById('form-post');
                const dataPost = doc.data();
                editStatus = true;
                publicar.innerText = 'Actualizar';

                console.log(hola.data());
                formPost['title-post'].value = dataPost.title;
                formPost['description'].value = dataPost.description;
                formPost['file'].value = dataPost.url;
            })
        })    
    });
});
};
