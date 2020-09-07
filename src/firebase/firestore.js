export const createPost = () => {

    const formPost = document.querySelector("#form-post");
    const contenedor = document.getElementById('containerPost');
    
    let editStatus = false;
    let id = '';

    const savePublications= (title,description,urlPost,createdAt) =>
    firebase.firestore().collection("publications").doc().set({
        title,
        description,
        urlPost,
        createdAt
    })
    

    const onGetPost = (callback) => firebase.firestore().collection('publications').onSnapshot(callback);
    const deletePost = id => firebase.firestore().collection("publications").doc(id).delete();
    const getPublications = (id) => firebase.firestore().collection("publications").doc(id).get();
    const updatePost = (id,updatePost) => firebase.firestore().collection("publications").doc(id).update(updatePost);

    
onGetPost ((querySnapshot)=>{
    contenedor.innerHTML = '';
        querySnapshot.forEach(doc => {
        const  postId = doc.data();
        postId.id = doc.id;
        contenedor.innerHTML +=  `<div class = "cardPost">
            <h1>${doc.data().title}</h1>
            <p>${doc.data().description}</p>
            <img src="${doc.data().urlPost}"> 
            <br>
            <i class="fas fa-heart" id="btn-like"></i>
            <p><span id="mostrar"></span> me gusta</p>
            <button class="btn-edition" data-id="${postId.id}">Editar</button>
            <button class="btn-delete" data-id="${postId.id}">Eliminar</button>
            <p>${doc.data().createdAt}</p>
            </div>`;

        const btnsDelete = document.querySelectorAll('.btn-delete');
        btnsDelete.forEach(btn => {
        btn.addEventListener('click', async (e) => {
        //console.log(e.target.dataset.id);
        await deletePost(e.target.dataset.id);
    })
});

        const btnsEditions = document.querySelectorAll('.btn-edition');
        btnsEditions.forEach(btn => {
        btn.addEventListener('click', async (e) => {
        const doc = await getPublications(e.target.dataset.id);
        console.log (doc.data());
        formPost['title-post'].value = postId.title;
        formPost['description'].value = postId.description;
        
        const toPost = document.querySelector('.publicar');
        toPost.innerText = 'Actualizar';

            editStatus = true;
            id = doc.id;
            
            })
        });
    })
})

    formPost.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        let title = document.getElementById('title-post');
        let description = document.getElementById('description');
        let urlPost = localStorage.getItem('imgNewPost');
        let createdAt = firebase.firestore.FieldValue.serverTimestamp();
        console.log(createdAt);

        if (!editStatus){
            await savePublications (title.value ,description.value , urlPost, createdAt);
        } else
        {
        await updatePost(id,{
            title: title.value,
            description: description.value,
        })
        }
        formPost.reset();
        title.focus();
        
    })
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
}

