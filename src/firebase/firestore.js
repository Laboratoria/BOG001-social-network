export const createPost = () => {
    let publicar = document.querySelector(".publicar");
    publicar.addEventListener('click', (e) => {
        e.preventDefault();
        
        let title = document.getElementById('title-post').value;
        let description = document.getElementById('description').value;
        const urlPost = localStorage.getItem('imgNewPost');
        
        const createdAt = firebase.firestore.FieldValue.serverTimestamp();
        console.log(createdAt);
        
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
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
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
    <br>
    <i class="fas fa-heart" id="btn-like"></i>
    <p><span id="mostrar"></span> me gusta</p>
    <button class="btn-edition" onclick="edition("${id}", "${doc.data().title}", "${doc.data().description}")">Editar</button>
    <button class="btn-delete" data-id="${id}">Eliminar</button>
    <p>${doc.data().createdAt}</p>
    </div>`
    
    //Likes publicación
    const likes = () => {
        let contador = 0;
        const btnLike = document.querySelector('#btn-like');
        btnLike.addEventListener('click', () => {
        console.log(btnLike);
        contador ++;
        document.getElementById('mostrar').innerHTML = contador;
    })
    }
    likes();

    const deletePost = (id) => firebase.firestore().collection("publications").doc(id).delete();
    const btnsDelete = document.querySelectorAll('.btn-delete');
    btnsDelete.forEach(btn => {
        btn.addEventListener('click', async (e) => {
            //console.log(e.target.dataset.id);
            await deletePost(e.target.dataset.id);
        })
    });
    
    //Funcion editar

    const edition = (id, title, description) => {
        document.getElementById('title-post').value = title;
        document.getElementById('description').value = description;
        publicar.innerHTML = 'Actualizar';

        publicar.onclick = () => {
            let getPost = firebase.firestore().collection("publications").doc(id);
            
            let title = document.getElementById('title-post').value;
            let description = document.getElementById('description').value;

            return getPost.update({
                title: title,
                description: description,
            })
            .then(function() {
                console.log("Document successfully updated!");
                publicar.innerHTML = 'Publicar';
            })
            .catch(function(error) {
                // The document probably doesn't exist.
                console.error("Error updating document: ", error);
            });
        }
    }
    edition();


    /*const getPost = (id) => firebase.firestore().collection("publications").doc(id).get();
    const btnsEditions = document.querySelectorAll('.btn-edition');
    console.log(btnsEditions);
    btnsEditions.forEach(btn => {
        btn.addEventListener('click', async (e) => {
            const formPost = document.getElementById('form-post');
            const getPostId = await getPost(e.target.dataset.id);   //console.log(e.target.dataset.id);
            const dataPost = getPostId.data();  //console.log(getPostId.data());
            publicar.innerText = 'Actualizar';
            formPost['title-post'].value = dataPost.title;
            formPost['description'].value = dataPost.description;

            publicar.addEventListener('click', (e) => {
                let updatePost = firebase.firestore().collection("publications").doc(id);
                let title = document.getElementById('title-post').value;
                let description = document.getElementById('description').value;
                
                return updatePost.update({
                    title: title,
                    description: description,
                })
                .then(() => {
                    console.log("Documento Actualizado correctamente");
                    publicar.innerText = 'Publicar';
                })
                .catch((error) => {
                    console.log("Error en la actualización de documento: ", error);
                })
            })
            })
        })*/
    });
    })
}

